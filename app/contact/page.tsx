"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "Sdeclases48@gmail.com",
    href: "mailto:sdeclases48@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Pedro de Macoris, Dominican Republic",
    href: "#",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpqkwgaq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const json = await response.json();
        const msg =
          json?.errors?.map((e: { message: string }) => e.message).join(", ") ??
          "Something went wrong. Please try again.";
        setError(msg);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Get in
              touch and let&apos;s create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-secondary/50 border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="rounded-xl resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Start Your Project
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-8 rounded-2xl bg-foreground text-background">
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2 text-background/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
                <div className="mt-6 pt-6 border-t border-background/20">
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-background/80 text-sm">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
