"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Graphic Design",
    description:
      "A visually stunning portfolio website showcasing a graphic designer's work, featuring interactive galleries and smooth animations.",
    category: "Web Application",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "../grap.png",
    link: "https://kervindesign.vercel.app/",
    color: "from-foreground/5 to-foreground/15",
  },
  {
    title: "Dev portfolio",
    description:
      "A modern developer portfolio website showcasing projects, skills, and experience.",
    category: "Web Application",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "dev.png",
    link: "https://kervinleonardo.vercel.app/",
    color: "from-blue-500/10 to-blue-500/20",
  },
  {
    title: "Kode business",
    description:
      "An enterprise software solution for managing business operations, including CRM, inventory, and analytics.",
    category: "Enterprise Software",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "kode.png",
    link: "https://kodesoftware.vercel.app/",
    color: "from-emerald-500/10 to-emerald-500/20",
  },
];

export function PortfolioPreviewSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Explore some of our recent projects that showcase our expertise
              and creativity.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full self-start md:self-auto"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              {/* Image + overlay */}
              <div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Hover overlay with link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-foreground/80 flex items-center justify-center transition-opacity duration-300"
                  >
                    <ExternalLink className="h-8 w-8 text-background" />
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Always-visible link for mobile */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Ver proyecto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
