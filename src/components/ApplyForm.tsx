"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPublicJds, type PublicJd } from "@/lib/publicJds";
import JDPanel from "./JDPanel";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

const SUPABASE_URL = "https://tkxavfnnphflkzqcjxdd.supabase.co/functions/v1/submit-application";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRreGF2Zm5ucGhmbGt6cWNqeGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4OTc4MjIsImV4cCI6MjA2MzQ3MzgyMn0.CWzE4q6e4mBnmhk5bkkZ7pkQRZcm53ZnvgQ8P6MB2SY";

const ApplicationSchema = z.object({
  roleId: z.string().min(1, "Please choose a role"),
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  linkedin: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  why: z.string().min(20, "Tell us a bit more (20+ chars)"),
  resume: z
    .instanceof(File)
    .refine((f) => f.type === "application/pdf", "Resume must be a PDF"),
});

type ApplicationValues = z.infer<typeof ApplicationSchema>;

const inputClass =
  "border border-zinc-700 bg-zinc-900 text-white placeholder-zinc-500 p-2 w-full rounded focus:outline-none focus:ring-1 focus:ring-brand";

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the data URL prefix (e.g. "data:application/pdf;base64,")
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ApplyForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [roles, setRoles] = useState<PublicJd[]>([]);
  const [selectedRole, setSelectedRole] = useState<PublicJd | null>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadRoles() {
      try {
        const data = await getPublicJds();
        setRoles(data);
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    }
    loadRoles();
  }, []);

  const resolver = useMemo(() => zodResolver(ApplicationSchema), []);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ApplicationValues>({ resolver });

  const onSubmit = async (values: ApplicationValues) => {
    try {
      const file_data = await fileToBase64(values.resume);

      const res = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          req_id: values.roleId,
          full_name: values.name,
          email: values.email,
          linkedin_url: values.linkedin || undefined,
          interest_reason: values.why,
          file_data,
          file_name: values.resume.name,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Submission error:", error);
        throw new Error("Submission failed");
      }

      toast.success("Application submitted!");
      reset();
      setSelectedRole(null);
      // reset() clears form state but not the uncontrolled file input's DOM value
      if (resumeInputRef.current) resumeInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const roleId = watch("roleId");
  const resumeFile = watch("resume");

  useEffect(() => {
    const preselectedRoleId = searchParams.get("role");
    if (preselectedRoleId && roles.length > 0) {
      const role = roles.find((r) => r.req_id === preselectedRoleId);
      if (role) {
        setValue("roleId", preselectedRoleId, { shouldValidate: true });
      }
    }
  }, [roles, searchParams, setValue]);

  useEffect(() => {
    const role = roles.find((r) => r.req_id === roleId) || null;
    setSelectedRole(role);
  }, [roleId, roles]);

  // Mirror the chosen role back into the URL so the address bar is always a
  // shareable link to that specific posting. replace() rather than push() so
  // browsing the dropdown doesn't stack history entries the user has to click
  // back through to leave the page.
  useEffect(() => {
    if (!roleId || searchParams.get("role") === roleId) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", roleId);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [roleId, router, searchParams]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Select Role</label>
        <select {...register("roleId")} className={inputClass}>
          <option value="">Choose a role...</option>
          {roles.map((role) => {
            const displayTitle = role.job_title.split("—")[0]?.trim() || role.job_title;
            return (
              <option key={role.req_id} value={role.req_id}>
                {displayTitle}
              </option>
            );
          })}
        </select>
        {errors.roleId && (
          <p className="text-red-400 text-sm mt-1">{errors.roleId.message}</p>
        )}
      </div>

      {selectedRole && <JDPanel role={selectedRole} />}

      <div>
        <label className="block mb-2 font-medium">Full Name</label>
        <input type="text" {...register("name")} className={inputClass} />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input type="email" {...register("email")} className={inputClass} />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">LinkedIn</label>
        <input type="url" {...register("linkedin")} className={inputClass} />
        {errors.linkedin && (
          <p className="text-red-400 text-sm mt-1">{errors.linkedin.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium">Why are you interested?</label>
        <textarea {...register("why")} className={inputClass} />
        {errors.why && <p className="text-red-400 text-sm mt-1">{errors.why.message}</p>}
      </div>

      <div>
        <label htmlFor="resume" className="block mb-2 font-medium">
          Upload Resume (PDF)
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <label
            htmlFor="resume"
            className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-white/20 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-within:ring-2 focus-within:ring-white/20"
          >
            {resumeFile ? "Change file" : "Choose PDF"}
            <input
              id="resume"
              ref={resumeInputRef}
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setValue("resume", file, { shouldValidate: true });
              }}
            />
          </label>
          <span
            className={`min-w-0 flex-1 truncate text-sm ${
              resumeFile ? "text-zinc-300" : "text-zinc-500"
            }`}
          >
            {resumeFile ? resumeFile.name : "No file selected"}
          </span>
        </div>
        {errors.resume && (
          <p className="text-red-400 text-sm mt-1">{errors.resume.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>

      <p className="text-red-500 italic text-sm mt-3">
        *Don&apos;t worry, we won&apos;t ghost you. You&apos;ll hear back from us one way or another.
      </p>
    </form>
  );
}