import { Suspense } from "react";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-8">Apply for a Role</h1>
        <div className="text-left">
          <Suspense fallback={<div className="text-neutral-300">Loading application form...</div>}>
            <ApplyForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}