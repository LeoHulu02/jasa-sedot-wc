import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";

import { company, pricingFeatures } from "@/lib/site-data";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

export function Pricing() {
  return (
    <section id="harga" className="bg-blue-50/70 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
              Harga Transparan
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Harga Mulai dari Rp350.000
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dapatkan estimasi jelas sebelum pengerjaan dimulai. Tim kami membantu memilih
              layanan yang paling sesuai dengan kebutuhan dan kondisi lokasi Anda.
            </p>

            <ul className="mt-8 space-y-4">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-bold text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-blue-700" />
                  {feature}
                </li>
              ))}
            </ul>

            <CtaButton href={`https://wa.me/${company.whatsapp}`} className="mt-8">
              Lihat Daftar Harga
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-blue-100 bg-white p-3 shadow-soft">
            <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-blue-300/50 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-900 to-brand-950 p-7 text-white">
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full border border-white/10" />
              <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-12 translate-y-12 rounded-full border border-white/10" />

              <div className="relative flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-50 ring-1 ring-white/15">
                  <Sparkles aria-hidden="true" className="h-4 w-4" />
                  Paket Awal
                </div>
                <div className="rounded-2xl bg-white px-3 py-2 text-xs font-black text-blue-800 shadow-lg">
                  Best Value
                </div>
              </div>

              <div className="relative mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Mulai dari</p>
                <p className="mt-2 text-5xl font-black tracking-tight md:text-6xl">Rp350</p>
                <p className="mt-1 text-2xl font-black text-blue-100">Ribu</p>
              </div>

              <div className="relative mt-8 grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-blue-100" />
                  <span className="text-sm font-bold text-blue-50">Survey dan estimasi transparan</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <Clock3 aria-hidden="true" className="h-5 w-5 text-blue-100" />
                  <span className="text-sm font-bold text-blue-50">Layanan darurat 24 jam</span>
                </div>
              </div>

              <div className="relative mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm leading-7 text-blue-50">
                  Cocok untuk kebutuhan rumah tangga. Harga final mengikuti volume, akses lokasi,
                  dan tingkat kesulitan pekerjaan.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
