import { MapPin, Navigation, RadioTower, Truck } from "lucide-react";

import { serviceAreas } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServiceArea() {
  return (
    <section className="bg-blue-50/70 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <SectionHeading
              title="Wilayah Layanan"
              subtitle="Armada BersihTuntas menjangkau area Jabodetabek dengan respons cepat dan jadwal fleksibel."
              centered={false}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-4 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-card"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <MapPin aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="flex-1">{area}</span>
                  <span className="text-xs font-black text-blue-500">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-soft">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-300/40 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-cyan-200/50 blur-3xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-950 via-blue-900 to-blue-700 p-4 sm:aspect-[4/3] sm:p-6">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute left-[12%] top-[14%] h-36 w-52 rounded-[55%_45%_60%_40%] bg-blue-300/25 ring-1 ring-white/10" />
              <div className="absolute right-[12%] top-[18%] h-44 w-48 rounded-[40%_60%_45%_55%] bg-cyan-200/20 ring-1 ring-white/10" />
              <div className="absolute bottom-[12%] left-[28%] h-40 w-64 rounded-[55%_45%_45%_55%] bg-white/10 ring-1 ring-white/10" />
              <div className="absolute left-[22%] right-[20%] top-[46%] h-2 -rotate-12 rounded-full bg-white/80 shadow-lg" />
              <div className="absolute bottom-[18%] left-[50%] top-[18%] w-2 rotate-12 rounded-full bg-white/70 shadow-lg" />
              <div className="absolute left-[28%] top-[55%] h-2 w-[42%] rotate-[22deg] rounded-full bg-blue-200/80 shadow-lg" />

              <div className="absolute left-4 right-4 top-4 rounded-3xl border border-white/15 bg-white/12 p-3 text-white backdrop-blur-md sm:left-5 sm:right-auto sm:top-5 sm:p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-800 sm:h-10 sm:w-10">
                    <RadioTower aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-black">Coverage Jabodetabek</p>
                    <p className="truncate text-xs font-semibold text-blue-100">Respon cepat area utama</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/15 bg-white p-3 text-blue-900 shadow-xl sm:bottom-5 sm:left-auto sm:right-5 sm:p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white sm:h-10 sm:w-10">
                    <Truck aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-black">Armada Siap</p>
                    <p className="truncate text-xs font-semibold text-slate-500">24 jam setiap hari</p>
                  </div>
                </div>
              </div>

              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-white px-2.5 py-2 text-[10px] font-black text-blue-800 shadow-xl sm:gap-2 sm:px-3 sm:text-xs"
                  style={{
                    left: `${24 + (index % 3) * 25}%`,
                    top: `${34 + Math.floor(index / 3) * 31 + (index % 2) * 7}%`
                  }}
                >
                  <Navigation aria-hidden="true" className="h-3.5 w-3.5" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
