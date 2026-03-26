import { Suspense } from "react";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="space-y-0">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">Candidates</p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
            Apply for<br />
            <span className="text-red-500">a Role.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-300 max-w-xl leading-relaxed">
            Fill out the form below and a member of the TRS team will be in touch. Every submission is reviewed by a human.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-3xl">
          <Suspense fallback={<div className="text-neutral-400 text-sm uppercase tracking-widest">Loading form...</div>}>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}