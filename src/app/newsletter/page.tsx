"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getPublishedIssues, getAllTags } from "@/lib/newsletter";

const ISSUES_PER_PAGE = 12;

export default function NewsletterArchive() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const allIssues = getPublishedIssues();
  const allTags = getAllTags();

  const filteredIssues = useMemo(() => {
    if (!selectedTag) return allIssues;
    return allIssues.filter(issue => issue.tags.includes(selectedTag));
  }, [allIssues, selectedTag]);

  const totalPages = Math.ceil(filteredIssues.length / ISSUES_PER_PAGE);
  const startIndex = (currentPage - 1) * ISSUES_PER_PAGE;
  const paginatedIssues = filteredIssues.slice(startIndex, startIndex + ISSUES_PER_PAGE);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when filtering
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 py-section-y space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">All Newsletter Issues</h1>
        <p className="text-lg text-neutral-300">
          Short, practical notes on hiring systems, AI, and recruiting.
        </p>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => handleTagFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedTag === null
              ? "bg-red-500 text-white"
              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          }`}
        >
          All Issues
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag
                ? "bg-red-500 text-white"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Issues Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedIssues.map((issue) => (
          <article
            key={issue.slug}
            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  <Link
                    href={`/newsletter/${issue.slug}`}
                    className="hover:text-red-400 transition-colors"
                  >
                    {issue.title}
                  </Link>
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {issue.summary}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <time className="text-neutral-400" dateTime={issue.date}>
                  {formatDate(issue.date)}
                </time>
                <Link
                  href={`/newsletter/${issue.slug}`}
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  Read issue →
                </Link>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {issue.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <span className="text-neutral-400">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* RSS Link */}
      <div className="text-center pt-8 border-t border-neutral-800">
        <Link
          href="/newsletter/rss.xml"
          className="text-neutral-400 hover:text-white text-sm transition-colors"
        >
          RSS Feed
        </Link>
      </div>
    </div>
  );
}
