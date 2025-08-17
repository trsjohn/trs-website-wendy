export interface NewsletterIssue {
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD format
  summary: string;
  tags: string[];
  body: string; // MDX content
  tldr: string;
  published: boolean;
}

// Sample newsletter issues
export const newsletterIssues: NewsletterIssue[] = [
  {
    title: "Cutting Noise: Scorecards with Receipts",
    slug: "cutting-noise-scorecards-with-receipts",
    date: "2024-01-15",
    summary: "How transcript-backed rubrics speed yes/no decisions.",
    tags: ["Hiring Systems", "AI in Recruiting"],
    tldr: "Most scorecards are opinion. Ours come with receipts—direct quotes from interviews that prove the score. Faster decisions, less bias.",
    body: `# Cutting Noise: Scorecards with Receipts

Most recruiting scorecards are opinion dressed up as data. "Strong technical skills" says nothing. "Candidate demonstrated deep understanding of distributed systems architecture, specifically mentioning experience with Kafka partitioning and Redis clustering" says everything.

## The Problem with Traditional Scorecards

Traditional recruiting relies on gut feel and vague assessments. Hiring managers get scorecards that look scientific but contain subjective ratings without evidence.

## Our Approach

Every score comes with receipts—direct quotes from interviews that justify the rating. This creates:

- **Faster decisions**: No need to re-interview to understand candidate strength
- **Less bias**: Evidence-based rather than feeling-based
- **Better calibration**: Teams align on what "strong" actually means

## Coming Soon

Full implementation details and examples from real searches.`,
    published: true
  },
  {
    title: "PSaaS in Practice",
    slug: "psaas-in-practice",
    date: "2024-01-08",
    summary: "What a one-week screen looks like, end-to-end.",
    tags: ["Case Studies"],
    tldr: "From intake to slate in 7 days. Here's exactly how we do it—no fluff, just the process that works.",
    body: `# PSaaS in Practice

People ask what a one-week screen actually looks like. Here's the breakdown—no marketing speak, just the process.

## Day 1: Intake
Real intake, not checkbox theater. We extract:
- Must-haves vs. nice-to-haves
- Deal-breakers and red flags
- Success metrics for the role

## Days 2-4: Sourcing + Initial Screen
- Boolean across 50+ platforms
- AI-powered initial filtering
- Human review of top candidates

## Days 5-6: Scoring + Brief Creation
- Structured interviews with top candidates
- AI scoring with human oversight
- Brief creation with evidence

## Day 7: Delivery
- Slate delivered with scorecards
- Evidence-backed recommendations
- Clear next steps

## Coming Soon
Real case study with actual timelines and results.`,
    published: true
  },
  {
    title: "Finding the People Others Miss",
    slug: "finding-people-others-miss",
    date: "2024-01-01",
    summary: "Boolean + sourcing patterns that actually work.",
    tags: ["GTM"],
    tldr: "Most recruiters search the same way. We've mapped the patterns that find hidden talent—the people others miss.",
    body: `# Finding the People Others Miss

Everyone searches LinkedIn the same way. Same keywords, same filters, same results. Here's how we find the people others miss.

## Beyond Obvious Keywords

Instead of searching "sales engineer," we search for:
- People who've done technical demos
- Former engineers in customer-facing roles
- Solutions architects who've moved into sales

## The X-Ray Approach

LinkedIn is just the starting point. We X-ray:
- Company alumni networks
- Technical conference speakers
- Open source contributors
- Industry forum participants

## Warm Intro Networks

Cold outreach is dead. Warm intros are everything:
- Map mutual connections
- Identify referral paths
- Leverage existing relationships

## Coming Soon
The complete sourcing playbook with specific search strings and outreach templates.`,
    published: true
  }
];

export function getPublishedIssues(): NewsletterIssue[] {
  return newsletterIssues
    .filter(issue => issue.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getIssueBySlug(slug: string): NewsletterIssue | undefined {
  return newsletterIssues.find(issue => issue.slug === slug && issue.published);
}

export function getRecentIssues(count: number = 3): NewsletterIssue[] {
  return getPublishedIssues().slice(0, count);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  newsletterIssues.forEach(issue => {
    issue.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getIssuesByTag(tag: string): NewsletterIssue[] {
  return getPublishedIssues().filter(issue => issue.tags.includes(tag));
}

export function getNextPreviousIssues(currentSlug: string): {
  next: NewsletterIssue | null;
  previous: NewsletterIssue | null;
} {
  const publishedIssues = getPublishedIssues();
  const currentIndex = publishedIssues.findIndex(issue => issue.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { next: null, previous: null };
  }

  return {
    next: currentIndex > 0 ? publishedIssues[currentIndex - 1] : null,
    previous: currentIndex < publishedIssues.length - 1 ? publishedIssues[currentIndex + 1] : null
  };
}
