import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
  ],
  resources: [
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/kervin-daniel-leonardo-francois-1528b52b0/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Sigmaprogram?tab=repositories",
    icon: Github,
    label: "GitHub",
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              APPOCO
            </Link>
            <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
              We build digital experiences that define the future. Innovative
              software solutions tailored to transform your vision into reality.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} APPOCO. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              By kervin Daniel Leonardo Francois
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
