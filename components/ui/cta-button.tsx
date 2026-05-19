import Link from "next/link";

interface CtaButtonProps {
  label?: string;
  className?: string;
  href?: string;
}

export function CtaButton({ label = "Kostenlos analysieren", className = "", href = "/analyse" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-cyan-400 hover:shadow-cyan-500/40 ${className}`}
    >
      {label}
    </Link>
  );
}
