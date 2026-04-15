import { Metadata } from "next";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

// Note: metadata must be exported from a Server Component. --- IGNORE ---
// Move this to a separate layout or page wrapper if needed. --- IGNORE ---
export const metadata: Metadata = {
  title: "About Us | APPOCO",
  description:
    "Learn about APPOCO's mission, vision, values, and the talented team behind our innovative digital solutions.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as true partners in their digital transformation journey.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we create.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in open communication and keeping our clients informed every step of the way.",
  },
];

const team = [
  { name: "pending to be hired", role: "pending to be hired", image: "AT" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Building the Future of Digital Innovation
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              At APPOCO, we believe technology should empower businesses to
              achieve their full potential. Founded with a vision to bridge the
              gap between ideas and digital reality, we have been transforming
              how companies operate in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  APPOCO was founded in 2016 by a group of passionate
                  technologists who saw an opportunity to create something
                  different. We started with a simple belief: that great
                  software is born from understanding, collaboration, and
                  relentless pursuit of excellence.
                </p>
                <p>
                  Over the years, we have grown from a small team of developers
                  into a full-service digital agency, serving clients across
                  industries and continents. Our journey has been marked by
                  continuous learning, adaptation, and an unwavering commitment
                  to our core values.
                </p>
                <p>
                  Today, APPOCO stands as a testament to what happens when
                  talented people come together with a shared purpose. We are
                  not just building software; we are building the future.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center">
                <Image
                  src="about.jpeg"
                  alt="About Us"
                  fill
                  className="object-cover rounded-3xl filter grayscale opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-foreground text-background">
              <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-background/80 leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and competitive advantage. We are
                committed to delivering excellence in every project, fostering
                long-term partnerships, and making technology accessible to
                organizations of all sizes.
              </p>
            </div>
            <div className="p-10 rounded-3xl border border-border bg-card">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in digital transformation, known for our
                innovative approach, exceptional talent, and the lasting impact
                we create for our clients. We envision a world where every
                business can harness the power of technology to achieve their
                most ambitious goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-background border border-border"
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

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-foreground transition-colors duration-300">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-background transition-colors duration-300">
                    {member.image}
                  </span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
