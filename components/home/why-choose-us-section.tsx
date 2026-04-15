"use client"

import { Shield, Clock, Users, Rocket, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to deliver solutions that keep you ahead of the competition.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled developers, designers, and strategists bring years of industry experience to every project.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes ensure flawless, production-ready deliverables.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timelines and consistently deliver projects within the agreed timeframes.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Our track record speaks for itself with 150+ successful projects and satisfied clients worldwide.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose APPOCO</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
