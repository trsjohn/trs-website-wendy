"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell us a bit more (10+ chars)"),
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
    const subject = encodeURIComponent("Website Contact");
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`);
    window.location.href = `mailto:sales@trsolutions.ai?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-section-y sm:py-section-y-sm">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-8">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-neutral-800 p-6 space-y-4 text-left">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input {...register("name")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" {...register("email")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2" />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">How Can We Help You...</label>
            <textarea {...register("message")} className="w-full rounded border border-neutral-800 bg-transparent px-3 py-2 min-h-32" />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send"}
          </Button>
        </form>
      </div>
    </div>
  );
}


