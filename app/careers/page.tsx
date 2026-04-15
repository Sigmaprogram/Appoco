"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Rocket,
  Heart,
  Coffee,
  CheckCircle,
  AlertCircle,
  Briefcase,
  MapPin,
  Clock,
  X,
} from "lucide-react";

const cultureValues = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We encourage creative thinking and embrace new technologies to stay ahead of the curve.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "We believe the best solutions come from diverse perspectives working together.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "We value your time and well-being with flexible hours and remote work options.",
  },
  {
    icon: Coffee,
    title: "Growth Mindset",
    description:
      "We invest in your development with learning opportunities and mentorship programs.",
  },
];

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description:
      "Build beautiful, performant user interfaces with React and Next.js.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description:
      "Design and implement scalable APIs and microservices architecture.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Create intuitive and visually stunning user experiences for our clients.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco",
    type: "Full-time",
    description:
      "Build and maintain our cloud infrastructure and CI/CD pipelines.",
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "Remote / San Francisco",
    type: "Full-time",
    description:
      "Lead cross-functional teams to deliver exceptional projects on time.",
  },
  {
    id: 6,
    title: "Mobile Developer (iOS/Android)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Develop high-quality native and cross-platform mobile applications using React Native or Flutter.",
  },
  {
    id: 7,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Santo Domingo",
    type: "Full-time",
    description:
      "Work across the entire stack to deliver end-to-end features for our clients' products.",
  },
  {
    id: 8,
    title: "QA Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Ensure the quality and reliability of our software through manual and automated testing strategies.",
  },
  {
    id: 9,
    title: "Data Analyst",
    department: "Data",
    location: "Remote / Santo Domingo",
    type: "Full-time",
    description:
      "Transform raw data into actionable insights that drive business decisions for our clients.",
  },
  {
    id: 10,
    title: "SEO & Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive organic growth and manage digital marketing campaigns across multiple channels.",
  },
  {
    id: 11,
    title: "Technical Writer",
    department: "Operations",
    location: "Remote",
    type: "Part-time",
    description:
      "Create clear, concise documentation, guides, and technical content for our products and clients.",
  },
  {
    id: 12,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote / Santo Domingo",
    type: "Full-time",
    description:
      "Identify and engage prospective clients, build relationships, and grow our client pipeline.",
  },
  {
    id: 13,
    title: "Cybersecurity Analyst",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Protect our systems and client infrastructure through proactive security monitoring and threat response.",
  },
  {
    id: 14,
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and deploy machine learning models and AI-powered features into production environments.",
  },
  {
    id: 15,
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote / Santo Domingo",
    type: "Full-time",
    description:
      "Ensure clients achieve their goals by building strong relationships and delivering ongoing support.",
  },
];

const positions = [
  "Senior Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "Mobile Developer (iOS/Android)",
  "AI/ML Engineer",
  "DevOps Engineer",
  "QA Engineer",
  "Cybersecurity Analyst",
  "UI/UX Designer",
  "Data Analyst",
  "SEO & Digital Marketing Specialist",
  "Technical Writer",
  "Project Manager",
  "Sales Development Representative",
  "Customer Success Manager",
  "Other",
];

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Agregar campos que no son inputs directos
    data.set("position", selectedPosition);
    data.set("skills", skills.join(", "));

    try {
      const response = await fetch("https://formspree.io/f/meevobjj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setSkills([]);
        setSelectedPosition("");
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
              Join APPOCO
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Be part of a team that&apos;s shaping the future of digital
              innovation. We&apos;re looking for passionate individuals who want
              to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Culture
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              At APPOCO, we foster an environment where creativity thrives and
              every voice matters.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
              Explore our current opportunities and find your perfect role.
            </p>
          </div>
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-background/70 text-sm mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-background/60">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="rounded-full self-start lg:self-center"
                    onClick={() => {
                      setSelectedPosition(job.title);
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Apply Now
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to join our team? Fill out the form below and we&apos;ll be
              in touch.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-12 rounded-3xl bg-secondary/50 border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Application Submitted!
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for your interest in joining APPOCO. Our team will
                review your application and get back to you within 5 business
                days.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-8 rounded-full"
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 lg:p-12 rounded-3xl bg-card border border-border"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email <span className="text-destructive">*</span>
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
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 123-4567"
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium mb-2"
                >
                  Position <span className="text-destructive">*</span>
                </label>
                <Select
                  value={selectedPosition}
                  onValueChange={setSelectedPosition}
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Experience <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="experience"
                  name="experience"
                  required
                  rows={4}
                  placeholder="Tell us about your relevant experience..."
                  className="rounded-xl resize-none"
                />
              </div>

              {/* Skills */}
              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium mb-2"
                >
                  Skills
                </label>
                <div className="space-y-3">
                  <Input
                    id="skills"
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleAddSkill}
                    placeholder="Type a skill and press Enter"
                    className="h-12 rounded-xl"
                  />
                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="hover:text-destructive transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Portfolio Link */}
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium mb-2"
                >
                  Portfolio Link{" "}
                  <span className="text-muted-foreground">(Optional)</span>
                </label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full h-12 mt-4"
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
                    Submitting...
                  </span>
                ) : (
                  "Apply Now"
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
