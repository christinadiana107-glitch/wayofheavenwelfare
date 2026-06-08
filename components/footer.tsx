"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const navigate = useRouter();
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-primary border-t-2 py-4 pt-12 mt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="logo" className="w-16 -left-3 relative object-contain" />
              <h2 className="leading-0">
                <span className="font-bold text-lg uppercase">Way of Heaven</span>
                <br />
                <span className="text-sm text-gray-400">Welfare Organization</span>
              </h2>
            </div>
            <p className="leading-relaxed max-w-xs">
              We are a registered non-profit humanitarian organization dedicated to education, healthcare, community empowerment, and sustainable
              welfare initiatives across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <p className="uppercase font-semibold mb-2 text-gray-400">Quick Links</p>
            {links.map((l) => (
              <span
                key={l.label}
                onClick={() => navigate.push(l.href)}
                className="hover:underline transition-colors duration-200 w-fit cursor-pointer"
              >
                {l.label}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="uppercase font-semibold mb-2 text-gray-400">Contact Information</p>

            <div className="flex items-center gap-2.5">
              <MapPin size={18} />
              <span>
                Office 3, 37C, Lane 3, Rahat Commercial,
                <br />
                Phase 6, DHA Karachi, Pakistan
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail size={18} />
              <a href="mailto:wayofheavenwelfare@gmail.com" className="transition-colors duration-200">
                wayofheavenwelfare@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={18} />
              <a href="tel:+923325892922" className="transition-colors duration-200">
                +92 3325892922
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} Way of Heaven Welfare Organization. All rights reserved.
          </span>
          <span className="text-[10px] tracking-[0.1em] uppercase ">Registered Non-Profit · Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
