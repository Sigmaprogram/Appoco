"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

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
  {
    title: "Six triple eight game",
    description:
      "A mobile game developed using Unity, featuring engaging gameplay and vibrant graphics.",
    category: "Game Development",
    tags: ["Unity", "C#", "Blender"],
    image: "game.png",
    link: "https://v0-six-triple-eight-game-fluyfk1j4-kervins-projects-b777f563.vercel.app/",
    color: "from-emerald-500/10 to-emerald-500/20",
  },
  {
    title: "Mapcity game",
    description:
      "A location-based mobile game developed with Unity, allowing players to explore real-world locations and complete challenges.",
    category: "Game Development",
    tags: ["Unity", "C#", "Blender"],
    image: "map.png",
    link: "https://mapcity-red.vercel.app/",
    color: "from-emerald-500/10 to-emerald-500/20",
  },
  {
    title: "R&L Servicios electricos",
    description:
      "A comprehensive enterprise software solution for managing electrical service operations, including scheduling, invoicing, and customer management.",
    category: "Enterprise Software",
    tags: ["Next.js", "Tailwind", "Oracle"],
    image: "servele.png",
    link: "https://rylservicioselectricos.vercel.app/",
    color: "from-emerald-500/10 to-emerald-500/20",
  },
];

const categories = [
  "All",
  "Web Application",
  "Game Development",
  "Enterprise Software",
  "Healthcare",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Work Speaks for Itself
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects across industries.
              Each project represents our commitment to excellence, innovation,
              and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-16">
              No hay proyectos en esta categoría aún.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-foreground/20 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${project.color} overflow-hidden`}
                  >
                    {project.image ? (
                      // ── Con imagen real ──────────────────────────────────
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 text-background">
                              <ExternalLink className="h-5 w-5" />
                              <span className="font-medium">View Project</span>
                            </div>
                          </a>
                        )}
                      </>
                    ) : (
                      // ── Sin imagen: placeholder con inicial ──────────────
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-300">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 text-background">
                              <ExternalLink className="h-5 w-5" />
                              <span className="font-medium">View Project</span>
                            </div>
                          </a>
                        )}
                      </>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 h-12 mt-8">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
