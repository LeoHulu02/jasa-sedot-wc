import { Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  withIcon?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-blue-700 via-blue-800 to-brand-950 text-white shadow-soft shadow-blue-900/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-900/25",
  secondary:
    "border border-blue-200 bg-white text-blue-800 shadow-sm hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50",
  light:
    "bg-white text-blue-800 shadow-xl hover:-translate-y-0.5 hover:bg-blue-50"
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  withIcon = false,
  className = ""
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`focus-ring group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
    >
      {variant === "primary" ? (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
      ) : null}
      {withIcon ? (
        <span
          className={`relative flex h-7 w-7 items-center justify-center rounded-xl ${
            variant === "primary" ? "bg-white/15" : "bg-blue-50"
          }`}
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
        </span>
      ) : null}
      <span className="relative">{children}</span>
    </Link>
  );
}
