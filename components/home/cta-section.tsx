"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary via-secondary/50 to-background border border-border p-12 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-3xl mx-auto">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Let&apos;s collaborate to create digital experiences that drive your business forward. Get in touch today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
