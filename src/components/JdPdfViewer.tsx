"use client";

import { useEffect, useRef, useState } from "react";

type AnyObj = Record<string, unknown>;

interface JdPdfViewerProps {
  jd: AnyObj | null;
  template?: string;
}

export default function JdPdfViewer({
  jd,
  template = "jd",
}: JdPdfViewerProps) {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const prevUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!jd) { 
      setPdfUrl(null); 
      setError(null); 
      return; 
    }
    
    let aborted = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/pdf/${template}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jd),
        });
        
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || `HTTP ${res.status}`);
        }
        
        const blob = await res.blob();
        if (aborted) return;
        
        const url = URL.createObjectURL(blob);
        if (prevUrl.current) {
          URL.revokeObjectURL(prevUrl.current);
        }
        prevUrl.current = url;
        setPdfUrl(url);
      } catch (e: unknown) {
        console.error("PDF render failed", e);
        if (!aborted) {
          setPdfUrl(null);
          setError("Could not render PDF. Please try again.");
        }
      } finally {
        if (!aborted) setLoading(false);
      }
    })();

    return () => { 
      aborted = true; 
    };
  }, [jd, template]);

  // Clean up URL on unmount
  useEffect(() => {
    return () => {
      if (prevUrl.current) {
        URL.revokeObjectURL(prevUrl.current);
      }
    };
  }, []);

  const getFilename = () => {
    const title = (jd?.title || jd?.job_title || jd?.position || "job-description") as string;
    return title
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase() + ".pdf";
  };

  const download = () => {
    if (!pdfUrl) return;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = getFilename();
    a.click();
  };

  const openInNewTab = () => {
    if (!pdfUrl) return;
    window.open(pdfUrl, '_blank');
  };

  if (!jd) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        <button
          onClick={download}
          disabled={!pdfUrl || loading}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Generating PDF..." : "Download PDF"}
        </button>
        {pdfUrl && (
          <button
            onClick={openInNewTab}
            className="px-4 py-2 rounded border border-neutral-600 text-white hover:bg-neutral-700 transition-colors"
          >
            Open in New Tab
          </button>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center p-8 bg-neutral-900 rounded-lg">
          <div className="text-neutral-300">Generating PDF...</div>
        </div>
      )}
      
      {error && (
        <div className="p-4 bg-red-900/20 border border-red-700 rounded-lg">
          <div className="text-red-400">{error}</div>
        </div>
      )}

      {pdfUrl && !loading && (
        <div className="border border-neutral-700 rounded-lg overflow-hidden bg-white">
          <iframe
            className="w-full h-[80vh]"
            src={pdfUrl}
            title="Job Description PDF"
          />
        </div>
      )}
    </div>
  );
}
