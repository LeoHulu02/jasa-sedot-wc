"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

import { company } from "@/lib/site-data";

export function FloatingContact() {
  const phoneHref = `tel:${company.phone.replaceAll("-", "")}`;
  const whatsappHref = `https://wa.me/${company.whatsapp}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-4 left-4 right-4 z-40 sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-[1.6rem] bg-blue-500/25 blur-2xl" />
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/30 bg-white/95 p-2 shadow-soft backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-cyan-50" />

          <div className="relative flex items-center gap-2">
            <a
              href={whatsappHref}
              aria-label={`Hubungi BersihTuntas via WhatsApp di ${company.phone}`}
              className="focus-ring group flex min-w-0 flex-1 items-center justify-center gap-3 rounded-[1.25rem] bg-gradient-to-r from-blue-700 via-blue-800 to-brand-950 px-3 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl min-[380px]:px-4 sm:flex-none sm:px-5"
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <span className="absolute h-10 w-10 animate-ping rounded-2xl bg-white/20" />
                <MessageCircle aria-hidden="true" className="relative h-5 w-5" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-left">Hubungi Sekarang</span>
                <span className="block truncate text-left text-xs font-semibold text-blue-100">{company.phone}</span>
              </span>
              <Sparkles aria-hidden="true" className="hidden h-4 w-4 opacity-80 sm:block" />
            </a>

            <a
              href={phoneHref}
              aria-label={`Telepon BersihTuntas di ${company.phone}`}
              className="focus-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] border border-blue-100 bg-white text-blue-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
