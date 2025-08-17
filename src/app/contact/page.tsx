"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company"),
  role: z.string().min(2, "Please describe the role you need"),
  great: z.string().min(10, "Please describe what great looks like"),
  email: z.string().email("Enter a valid email"),
  jd: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const resolver = useMemo(() => zodResolver(ContactSchema), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({ resolver });

  const onSubmit = async (values: ContactValues) => {
    const subject = encodeURIComponent("New Role Request");
    const body = encodeURIComponent(`Name: ${values.name}
Company: ${values.company}
Role: ${values.role}
What "great" looks like: ${values.great}
Email: ${values.email}${values.jd ? `\nJD Link: ${values.jd}` : ''}`);
    window.location.href = `mailto:sales@trsolutions.ai?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Got a role? We'll get you a slate.</h1>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-neutral-800 p-6 space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1 font-medium">Your name</label>
              <input {...register("name")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">Company</label>
              <input {...register("company")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
              {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">Role you need</label>
            <input {...register("role")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
            {errors.role && <p className="text-red-400 text-sm mt-1">{errors.role.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">What "great" looks like</label>
            <textarea {...register("great")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2 min-h-24" />
            {errors.great && <p className="text-red-400 text-sm mt-1">{errors.great.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input type="email" {...register("email")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">Link to JD (optional)</label>
              <input type="url" {...register("jd")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
              {errors.jd && <p className="text-red-400 text-sm mt-1">{errors.jd.message}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Starting…" : "Start the search"}
            </Button>
            <p className="text-center text-sm text-neutral-400">
              We reply same day. If it is urgent, say so.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}


