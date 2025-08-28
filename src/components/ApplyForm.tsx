"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRoles, submitApplication, type Role as ApiRole } from "@/lib/api";
import JDPanel from "./JDPanel";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";

type Role = ApiRole;

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

export default function ApplyForm() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    async function loadRoles() {
      try {
        const data = await getRoles();
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
    const role = roles.find((r) => r.id === values.roleId);
    if (!role) {
      return;
    }
    try {
      await submitApplication({
        role_id: role.id,
        role_title: role.title,
        client_name: "",
        name: values.name,
        email: values.email,
        linkedin: values.linkedin || undefined,
        why: values.why,
        resume: values.resume,
      });
      toast.success("Application submitted!");
      reset();
      setSelectedRole(null);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const roleId = watch("roleId");
  useEffect(() => {
    const role = roles.find((r) => r.id === roleId) || null;
    setSelectedRole(role);
  }, [roleId, roles]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Select Role</label>
        <select
          {...register("roleId")}
          className="border p-2 w-full rounded"
        >
          <option value="">Choose a role...</option>
          {roles.map((role) => {
            const displayTitle = role.title.split("—")[0]?.trim() || role.title;
            return (
              <option key={role.id} value={role.id}>
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
        <input
          type="text"
          {...register("name")}
          className="border p-2 w-full rounded"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input type="email" {...register("email")} className="border p-2 w-full rounded" />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">LinkedIn (optional)</label>
        <input type="url" {...register("linkedin")} className="border p-2 w-full rounded" />
        {errors.linkedin && (
          <p className="text-red-400 text-sm mt-1">{errors.linkedin.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 font-medium">Why are you interested?</label>
        <textarea {...register("why")} className="border p-2 w-full rounded" />
        {errors.why && <p className="text-red-400 text-sm mt-1">{errors.why.message}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium">Upload Resume (PDF)</label>
        <input
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setValue("resume", file, { shouldValidate: true });
          }}
        />
        {errors.resume && (
          <p className="text-red-400 text-sm mt-1">{errors.resume.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>
      
      <p className="text-red-500 italic text-sm mt-3">
        *Don't worry, we won't ghost you. You'll hear back from us one way or another.
      </p>
    </form>
  );
}