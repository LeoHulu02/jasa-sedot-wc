"use client";

import { motion } from "framer-motion";
import { Check, Clock3, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

import { company, trustIndicators } from "@/lib/site-data";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

const heroImage =
  "https://images.unsplash.com/photo-1708577580884-e23b50d4a205?auto=format&fit=crop&w=1400&q=85";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 pb-20 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-800 shadow-sm">
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              Sedot WC Profesional
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-slate-950 min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
              WC Mampet? <span className="text-blue-700">Kami Bereskan Sampai Tuntas!</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-6 md:text-xl">
              Layanan sedot WC cepat, bersih, dan profesional. Siap melayani rumah, kantor,
              restoran, pabrik, dan lingkungan Anda.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={`https://wa.me/${company.whatsapp}`} withIcon className="w-full sm:w-auto">
                Hubungi Sekarang
              </CtaButton>
              <CtaButton href="#layanan" variant="secondary" className="w-full sm:w-auto">
                Lihat Layanan
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check aria-hidden="true" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-soft"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-300/40 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-blue-950">
              <Image
                src={heroImage}
                alt="Truk tanker profesional untuk layanan sedot WC BersihTuntas"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-800 shadow-lg sm:px-4 sm:text-xs">
                  <Truck aria-hidden="true" className="h-4 w-4" />
                  Armada Profesional
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/15 p-3 text-white backdrop-blur-md sm:p-4">
                    <p className="text-xl font-black sm:text-2xl">24/7</p>
                    <p className="mt-1 text-xs font-semibold text-blue-100">Siaga Darurat</p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/15 p-3 text-white backdrop-blur-md sm:p-4">
                    <p className="text-xl font-black sm:text-2xl">30-90</p>
                    <p className="mt-1 text-xs font-semibold text-blue-100">Menit Pengerjaan</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="absolute -bottom-7 left-3 right-3 rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-soft backdrop-blur sm:-bottom-5 sm:left-auto sm:right-6 sm:max-w-xs sm:p-5"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <ShieldCheck aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-black text-slate-950">Garansi 100%</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Jika tidak puas, kami kembali tanpa biaya.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="absolute -left-3 top-6 hidden rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-soft backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Clock3 aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black text-slate-950">Respon Cepat</p>
                <p className="text-xs font-semibold text-slate-500">Estimasi jelas sejak awal</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
