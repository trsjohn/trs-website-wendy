"use client";

import React, { useMemo, useState, useEffect } from "react";
import { normalizeJD, type JD } from "@/lib/types";

// We'll load these dynamically
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PDFViewer: React.ComponentType<any> | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let PDFDownloadLink: React.ComponentType<any> | null = null;
let PdfJD: React.ComponentType<{ jd: JD }> | null = null;

export function RolePdf({ rawJD, inline = true }: { rawJD: unknown; inline?: boolean }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const jd = useMemo(() => {
    try {
      return normalizeJD(rawJD);
    } catch (err) {
      console.error("Failed to normalize JD data:", err);
      setError("Failed to process job description data");
      return {
        title: "Job Description",
        level: null,
        locations: [],
        location_type: null,
        remote_policy: null,
        employment_type: null,
        salary: null,
        tags: [],
        about_company: null,
        about_role: null,
        responsibilities: [],
        requirements: [],
        nice_to_haves: [],
        benefits: [],
      };
    }
  }, [rawJD]);

  useEffect(() => {
    const loadPDFComponents = async () => {
      try {
        const [pdfRenderer, pdfComponent] = await Promise.all([
          import("@react-pdf/renderer"),
          import("./PdfJD")
        ]);
        
        PDFViewer = pdfRenderer.PDFViewer;
        PDFDownloadLink = pdfRenderer.PDFDownloadLink;
        PdfJD = pdfComponent.default;
        
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load PDF components:", error);
        setError("Failed to load PDF components");
        setIsLoaded(false);
      }
    };

    // Only load if we have valid data
    if (rawJD) {
      loadPDFComponents();
    }
  }, [rawJD]);

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
        <div className="text-red-400 mb-2">PDF Error</div>
        <div className="text-red-300 text-sm">{error}</div>
        <details className="mt-2">
          <summary className="text-red-300 text-xs cursor-pointer">Debug Info</summary>
          <pre className="text-red-200 text-xs mt-1 overflow-auto">
            {JSON.stringify(rawJD, null, 2)}
          </pre>
        </details>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96 text-neutral-400">
        Loading PDF components...
      </div>
    );
  }

  const renderPDFViewer = () => {
    try {
      if (!PDFViewer || !PdfJD) return null;
      return (
        <PDFViewer width="100%" height="100%">
          <PdfJD jd={jd} />
        </PDFViewer>
      );
    } catch (err) {
      console.error("PDF Viewer render error:", err);
      return (
        <div className="flex items-center justify-center h-full text-red-400">
          Failed to render PDF viewer
        </div>
      );
    }
  };

  const renderDownloadLink = () => {
    try {
      if (!PDFDownloadLink || !PdfJD) return null;
      return (
        <PDFDownloadLink 
          document={<PdfJD jd={jd} />} 
          fileName={`${jd.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase() || "job-description"}.pdf`}
        >
          {({ loading }: { loading: boolean }) => (
            <button
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Preparing PDF…" : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      );
    } catch (err) {
      console.error("PDF Download link render error:", err);
      return (
        <button
          className="px-4 py-2 rounded-lg bg-gray-600 text-white cursor-not-allowed"
          disabled
        >
          PDF Download Unavailable
        </button>
      );
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {inline ? (
        <div className="h-[600px] rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900">
          {renderPDFViewer()}
        </div>
      ) : null}
      
      {renderDownloadLink()}
    </div>
  );
}
