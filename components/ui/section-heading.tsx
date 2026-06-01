import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  children
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-bold uppercase tracking-[0.24em] ${
            dark ? "text-blue-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? "text-blue-100" : "text-slate-600"}`}>
          {subtitle}
        </p>
      ) : null}
      {children}
    </div>
  );
}
