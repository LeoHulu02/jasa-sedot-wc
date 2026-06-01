import { Phone } from "lucide-react";

import { company } from "@/lib/site-data";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 to-brand-950 px-6 py-14 text-center text-white shadow-soft sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-100">
            Respon Cepat 24 Jam
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Butuh Bantuan Sekarang?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Kami siap membantu mengatasi masalah WC Anda kapan saja.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href={`https://wa.me/${company.whatsapp}`} variant="light" withIcon>
              Hubungi Kami 24 Jam
            </CtaButton>
            <a
              href={`tel:${company.phone.replaceAll("-", "")}`}
              className="focus-ring inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-2xl font-black text-white"
            >
              <Phone aria-hidden="true" className="h-6 w-6" />
              {company.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
