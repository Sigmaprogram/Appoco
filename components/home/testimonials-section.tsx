"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "APPOCO transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVentures Inc.",
  },
  {
    quote: "Working with APPOCO was a game-changer. They delivered a solution that perfectly aligned with our business goals.",
    author: "Michael Roberts",
    role: "CTO, InnovateCo",
  },
  {
    quote: "The team at APPOCO is exceptional. Their expertise in modern technologies helped us launch our platform in record time.",
    author: "Emily Zhang",
    role: "Founder, StartupHub",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
            Hear from the businesses we have helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors duration-300"
            >
              <Quote className="h-8 w-8 text-background/30 mb-6" />
              <p className="text-background/90 leading-relaxed mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-background/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
