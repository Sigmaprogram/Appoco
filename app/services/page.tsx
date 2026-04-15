import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Cpu, Zap, Database, Cloud, Shield, Smartphone, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | APPOCO",
  description: "Explore APPOCO's comprehensive digital services including web development, custom software, UI/UX design, and automation solutions.",
}

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "We build responsive, high-performance web applications using modern frameworks and best practices. From simple landing pages to complex enterprise platforms, we deliver solutions that scale.",
    features: [
      "Custom web applications",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Content management systems",
      "API development & integration",
    ],
  },
  {
    icon: Cpu,
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your unique business requirements. We develop systems that streamline operations, improve efficiency, and give you a competitive edge.",
    features: [
      "Enterprise software solutions",
      "Legacy system modernization",
      "Business process automation",
      "System integration",
      "Real-time applications",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement. Our design process is rooted in research, user testing, and a deep understanding of human behavior.",
    features: [
      "User interface design",
      "User experience research",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with intelligent automation solutions. We help you reduce manual tasks, minimize errors, and free up your team to focus on high-value work.",
    features: [
      "Workflow automation",
      "Data processing pipelines",
      "CI/CD implementation",
      "Testing automation",
      "DevOps solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices. We build apps that users love and businesses rely on.",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Mobile app optimization",
      "App store deployment",
      "Maintenance & updates",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your cloud infrastructure.",
    features: [
      "Cloud migration",
      "Infrastructure as Code",
      "Serverless architecture",
      "Multi-cloud strategies",
      "Cost optimization",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights. We build data pipelines, dashboards, and analytics solutions that help you make informed decisions.",
    features: [
      "Data warehousing",
      "Business intelligence",
      "Machine learning integration",
      "Real-time analytics",
      "Data visualization",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your digital assets with our security-first approach. We implement robust security measures and help you meet compliance requirements.",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance consulting",
      "Data protection",
      "Identity management",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Services That Drive Digital Excellence
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital solutions designed to transform your business. From concept to deployment, we handle every aspect of your digital journey.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 h-12 mt-8">
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 lg:p-10 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <Check className="h-4 w-4 text-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Process</h2>
            <p className="mt-4 text-lg text-background/70 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We dive deep into understanding your goals, challenges, and vision." },
              { step: "02", title: "Strategy", description: "We develop a comprehensive plan tailored to your specific needs." },
              { step: "03", title: "Execution", description: "Our expert team brings your project to life with precision." },
              { step: "04", title: "Launch", description: "We deploy, monitor, and optimize for continuous improvement." },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-5xl font-bold text-background/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-background/70 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss how we can help transform your digital presence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
