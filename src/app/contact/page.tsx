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

  const inputClass = "w-full border-b border-neutral-800 bg-transparent px-0 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 transition-colors text-sm";
  const labelClass = "block text-xs font-bold uppercase tracking-widest text-white mb-2";

  return (
    <div className="space-y-0">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-8 sm:pt-28 sm:pb-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-red-500 mb-4">Get Started</p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none text-white">
            Looking to<br />
            <span className="text-red-500">Hire?</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-300 max-w-xl leading-relaxed">
            Tell us what you need. We reply the same day. If it is urgent, say so.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className={labelClass}>Your name</label>
                <input {...register("name")} className={inputClass} placeholder="Jane Smith" />
                {errors.name && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.name.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input {...register("company")} className={inputClass} placeholder="Acme Corp" />
                {errors.company && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.company.message}</p>}
              </div>
            </div>

            <div>
              <label className={labelClass}>Role(s) you need</label>
              <input {...register("role")} className={inputClass} placeholder="Head of Engineering, 2 AEs..." />
              {errors.role && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.role.message}</p>}
            </div>

            <div>
              <label className={labelClass}>What &quot;great&quot; looks like</label>
              <textarea
                {...register("great")}
                className={`${inputClass} min-h-28 resize-none`}
                placeholder="Tell us what the right person looks like. The more specific, the better."
              />
              {errors.great && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.great.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" {...register("email")} className={inputClass} placeholder="you@company.com" />
                {errors.email && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.email.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Link to JD <span className="text-neutral-600 normal-case tracking-normal font-normal">(optional)</span></label>
                <input type="url" {...register("jd")} className={inputClass} placeholder="https://..." />
                {errors.jd && <p className="text-red-400 text-xs mt-2 uppercase tracking-wide">{errors.jd.message}</p>}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-14 font-bold uppercase tracking-widest text-base bg-red-600 hover:bg-red-500 border-0"
              >
                {isSubmitting ? "Starting…" : "Start the Search"}
              </Button>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
}