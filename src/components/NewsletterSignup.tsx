"use client";

import { useState } from "react";
import Button from "./ui/Button";

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    try {
      // TODO: Wire to actual newsletter service
      // For now, simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 whitespace-nowrap"
            aria-label="Subscribe to newsletter"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        
        {status === "success" && (
          <p className="text-green-400 text-sm">{message}</p>
        )}
        
        {status === "error" && (
          <p className="text-red-400 text-sm">{message}</p>
        )}
      </form>
      
      <p className="text-neutral-400 text-sm mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
