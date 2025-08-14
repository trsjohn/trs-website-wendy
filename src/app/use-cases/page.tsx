import { SectionTitle } from "@/components/SectionTitle";
import TilesGrid from "@/components/TilesGrid";
import { Search, ListChecks, FileText, Hand, BarChart3, Zap } from "lucide-react";

export default function UseCasesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y">
      <h1 className="sr-only">Use cases</h1>
      <SectionTitle as="h2" className="mb-6">Use cases</SectionTitle>
      <TilesGrid
        items={[
          { Icon: Search, title: "Source Smarter", description: "AI-boosted Boolean + targeted outreach to find top talent others miss." },
          { Icon: ListChecks, title: "Score What Matters", description: "10-point custom rubric tailored to your role, not generic checklists." },
          { Icon: FileText, title: "Decision Clarity", description: "Candidate briefs with scores, transcripts, and context for quick yes/no." },
          { Icon: Hand, title: "Stay Hands-On", description: "Your preferences guide the search; we adapt in real time." },
          { Icon: BarChart3, title: "Built for Growth", description: "Systems that scale with your team — from one hire to a full department." },
          { Icon: Zap, title: "Faster Cycles", description: "From intake to offer quicker with fewer wasted interviews." },
        ]}
      />
    </main>
  );
}


