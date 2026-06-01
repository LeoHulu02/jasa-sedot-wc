"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Droplets, Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { company, navLinks } from "@/lib/site-data";
import { CtaButton } from "@/components/ui/cta-button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link href="#beranda" onClick={closeMenu} className="focus-ring flex min-w-0 items-center gap-3 rounded-2xl">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20 sm:h-12 sm:w-12">
            <Droplets aria-hidden="true" className="h-6 w-6" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black leading-tight text-slate-950 sm:text-lg">
              {company.name}
            </span>
            <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700 sm:text-xs">
              {company.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-xl text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <CtaButton href={`https://wa.me/${company.whatsapp}`} withIcon>
            Hubungi Sekarang
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-800 shadow-sm transition hover:bg-blue-50 lg:hidden"
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-blue-100 bg-white/95 px-4 pb-4 shadow-xl shadow-blue-950/5 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl pt-3">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black text-slate-800 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    {link.label}
                    <span className="h-2 w-2 rounded-full bg-blue-200" />
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-blue-100 bg-blue-50/70 p-3">
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  onClick={closeMenu}
                  className="focus-ring flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-brand-950 px-4 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/20"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  Hubungi Sekarang
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
