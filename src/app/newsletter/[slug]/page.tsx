import { notFound } from "next/navigation";
import Link from "next/link";
import { getIssueBySlug, getNextPreviousIssues } from "@/lib/newsletter";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  
  if (!issue) {
    return {
      title: "Issue Not Found — TRS Newsletter",
    };
  }

  return {
    title: `${issue.title} — TRS Newsletter`,
    description: issue.tldr,

    openGraph: {
      title: `${issue.title} — TRS Newsletter`,
      description: issue.tldr,
      url: `/newsletter/${issue.slug}`,
      siteName: "TRS",
      type: "article",
      publishedTime: issue.date,
      authors: ["TRS"],
    },
  };
}

export default async function NewsletterIssue({ params }: Props) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  
  if (!issue) {
    notFound();
  }

  const { next, previous } = getNextPreviousIssues(slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-section-y">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {issue.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-sm text-neutral-400 mb-6">
            <time dateTime={issue.date}>{formatDate(issue.date)}</time>
            <span>•</span>
            <div className="flex gap-2">
              {issue.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* TL;DR */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-3">TL;DR</h2>
          <p className="text-neutral-200 leading-relaxed">{issue.tldr}</p>
        </div>

        {/* CTA after TL;DR */}
        <div className="text-center mb-12">
          <Link href="/contact">
            <Button className="px-6 py-3">Start a search</Button>
          </Link>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          <div 
            className="text-neutral-200 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ 
              __html: issue.body.replace(/\n/g, '<br/>').replace(/# /g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">').replace(/<h2 class="text-2xl font-bold text-white mt-8 mb-4">/g, '</p><h2 class="text-2xl font-bold text-white mt-8 mb-4">').replace(/## /g, '<h3 class="text-xl font-bold text-white mt-6 mb-3">').replace(/<h3 class="text-xl font-bold text-white mt-6 mb-3">/g, '</p><h3 class="text-xl font-bold text-white mt-6 mb-3">').replace(/^\s*/, '<p>').replace(/\s*$/, '</p>')
            }}
          />
        </div>

        {/* End CTA */}
        <div className="text-center mt-12 pt-8 border-t border-neutral-800">
          <Link 
            href="/services" 
            className="text-red-400 hover:text-red-300 font-medium transition-colors"
          >
            See how it works →
          </Link>
        </div>
      </article>

      {/* Navigation */}
      <nav className="max-w-4xl mx-auto px-6 sm:px-8 pb-section-y">
        <div className="flex justify-between items-center pt-8 border-t border-neutral-800">
          {previous ? (
            <Link
              href={`/newsletter/${previous.slug}`}
              className="text-left max-w-xs"
            >
              <div className="text-sm text-neutral-400 mb-1">← Previous</div>
              <div className="text-white hover:text-red-400 transition-colors">
                {previous.title}
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            href="/newsletter"
            className="text-neutral-400 hover:text-white text-sm transition-colors"
          >
            All Issues
          </Link>

          {next ? (
            <Link
              href={`/newsletter/${next.slug}`}
              className="text-right max-w-xs"
            >
              <div className="text-sm text-neutral-400 mb-1">Next →</div>
              <div className="text-white hover:text-red-400 transition-colors">
                {next.title}
              </div>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </nav>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: issue.title,
            datePublished: issue.date,
            author: {
              "@type": "Organization",
              name: "TRS",
            },
            description: issue.tldr,
            url: `/newsletter/${issue.slug}`,
          }),
        }}
      />
    </>
  );
}
