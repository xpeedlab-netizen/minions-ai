import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-bold whitespace-nowrap transition-transform duration-150 ease-out active:scale-[0.98] hover:scale-[1.03] focus-visible:outline focus-visible:outline-3 focus-visible:outline-teal focus-visible:outline-offset-2";

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-7 text-lg",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-coral text-ink hover:bg-coral shadow-sm",
  secondary: "bg-teal text-white hover:bg-teal-dark",
  outline: "border-2 border-teal text-teal bg-transparent hover:bg-teal/5",
  text: "text-teal underline-offset-4 hover:underline px-0 min-h-0",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonAsLink | ButtonAsButton) {
  const classes = `${base} ${variant !== "text" ? sizes[size] : ""} ${variants[variant]} ${className} ${disabled ? "opacity-60 cursor-not-allowed hover:scale-100 active:scale-100" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="size-[1.1em]" strokeWidth={2.5} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {showArrow && <ArrowRight className="size-[1.1em]" strokeWidth={2.5} />}
    </button>
  );
}
