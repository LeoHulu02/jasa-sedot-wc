"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
  };

  return (
    <section id="testimoni" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Apa Kata Pelanggan Kami" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-blue-100 bg-blue-50/70 p-4 shadow-card sm:p-6">
            <article className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <Image
                  src={active.avatar}
                  alt={`Foto pelanggan ${active.name}`}
                  width={88}
                  height={88}
                  className="h-20 w-20 rounded-3xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex gap-1 text-amber-400" aria-label={`${active.rating} dari 5 bintang`}>
                    {Array.from({ length: active.rating }).map((_, index) => (
                      <Star key={index} aria-hidden="true" className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xl font-bold leading-9 text-slate-900">
                    &ldquo;{active.text}&rdquo;
                  </blockquote>
                  <div className="mt-5">
                    <p className="font-black text-slate-950">{active.name}</p>
                    <p className="text-sm font-semibold text-slate-500">{active.role}</p>
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Lihat testimoni ${testimonial.name}`}
                    aria-current={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 rounded-full transition ${
                      activeIndex === index ? "w-9 bg-blue-700" : "w-3 bg-blue-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-800 shadow-sm transition hover:bg-blue-700 hover:text-white"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-800 shadow-sm transition hover:bg-blue-700 hover:text-white"
                  aria-label="Testimoni berikutnya"
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
