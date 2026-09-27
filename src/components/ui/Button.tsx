import type { AnchorHTMLAttributes, ButtonHTMLAttributes, KeyboardEvent, ReactNode } from "react";

type ButtonVariant = "fill" | "ghost" | "ghostOnDark" | "light";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variantClasses: Record<ButtonVariant, string> = {
  fill: "bg-ink text-cream hover:bg-navy focus-visible:ring-ink",
  ghost: "border border-ink/20 bg-transparent text-ink hover:border-ink focus-visible:ring-ink",
  ghostOnDark:
    "border border-cream/30 bg-transparent text-cream hover:border-cream focus-visible:ring-cream",
  light: "bg-cream text-ink hover:bg-cream-2 focus-visible:ring-cream",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export const Button = (props: ButtonAsButton | ButtonAsAnchor) => {
  const { children, variant = "fill", className = "", ...rest } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.currentTarget;
    if (target instanceof HTMLAnchorElement && event.key === " ") {
      event.preventDefault();
      target.click();
    }
  };

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        href={href}
        className={classes}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} tabIndex={0} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
};
