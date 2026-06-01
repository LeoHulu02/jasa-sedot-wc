import { Droplets, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { company, footerServices, navLinks, serviceAreas } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-800">
              <Droplets aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-black">{company.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                {company.tagline}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-blue-100">
            Layanan sedot WC profesional untuk rumah, kantor, restoran, pabrik, dan area
            komersial di Jabodetabek.
          </p>
        </div>

        <div>
          <h3 className="font-black">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="focus-ring rounded-lg text-blue-100 transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-black">Contact Information</h3>
          <ul className="mt-4 space-y-4 text-sm text-blue-100">
            <li className="flex items-center gap-3">
              <Phone aria-hidden="true" className="h-5 w-5 text-blue-300" />
              <a className="focus-ring rounded-lg hover:text-white" href={`tel:${company.phone.replaceAll("-", "")}`}>
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle aria-hidden="true" className="h-5 w-5 text-blue-300" />
              <a className="focus-ring rounded-lg hover:text-white" href={`https://wa.me/${company.whatsapp}`}>
                WhatsApp 24 Jam
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail aria-hidden="true" className="h-5 w-5 text-blue-300" />
              <a className="focus-ring rounded-lg hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 text-blue-300" />
              <span>{serviceAreas.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 pb-28 pt-6 text-center text-sm text-blue-100 sm:pb-6">
        © 2026 BersihTuntas. All Rights Reserved.
      </div>
    </footer>
  );
}
