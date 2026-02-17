import { Sparkles, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#changelog" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "Blog", href: "#blog" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Help Center", href: "#help" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
    { label: "Press", href: "#press" },
  ],
  Legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Security", href: "#security" },
    { label: "GDPR", href: "#gdpr" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#twitter" },
  { icon: Linkedin, label: "LinkedIn", href: "#linkedin" },
  { icon: Youtube, label: "YouTube", href: "#youtube" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">
                <span className="text-white">Call</span>
                <span className="font-semibold text-white">Copilot</span>
                <span className="text-gray-600">.io</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              AI-powered sales coaching for every call. Win more deals with
              real-time guidance.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            &copy; 2026 CallCopilot.io. All rights reserved.
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
