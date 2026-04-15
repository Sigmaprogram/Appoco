"use client"

import { Code2, Palette, Cpu, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies. From responsive websites to complex web platforms.",
  },
  {
    icon: Cpu,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements and scale with your growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement with your digital products.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with intelligent automation solutions that save time and reduce operational costs.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
