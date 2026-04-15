"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticleSphere } from "@/components/particle-sphere";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      {/* Particle Sphere */}
      <div className="">
        <ParticleSphere />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm font-medium">
              Transforming Ideas into Reality
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto leading-tight">
            We Build Digital Experiences That Define the Future
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            APPOCO delivers innovative software solutions and cutting-edge web
            development that transforms your vision into powerful digital
            products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-12 text-base"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
              { value: "25+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
