import { advantages } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <section id="keunggulan" className="bg-brand-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Profesional, Cepat, dan Terpercaya" dark />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <Reveal key={advantage.title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-white/10 bg-white/8 p-6 text-white shadow-2xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/12">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-100">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{advantage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100">{advantage.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
