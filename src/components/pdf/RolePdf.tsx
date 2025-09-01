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
  const jd = useMemo(() => normalizeJD(rawJD), [rawJD]);

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
      }
    };

    loadPDFComponents();
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96 text-neutral-400">
        Loading PDF components...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {inline && PDFViewer && PdfJD ? (
        <div className="h-[600px] rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900">
          <PDFViewer width="100%" height="100%">
            <PdfJD jd={jd} />
          </PDFViewer>
        </div>
      ) : null}

      {PDFDownloadLink && PdfJD ? (
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
      ) : null}
    </div>
  );
}
