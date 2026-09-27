import { buildWhatsAppUrl } from "../../config/site";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/Icons";

type WhatsAppLinkProps = {
  message: string;
  label?: string;
  variant?: "fill" | "ghost" | "ghostOnDark";
  className?: string;
};

export const WhatsAppLink = ({
  message,
  label = "Agendar conversa",
  variant = "fill",
  className = "",
}: WhatsAppLinkProps) => (
  <Button
    href={buildWhatsAppUrl(message)}
    variant={variant}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label} pelo WhatsApp — abre em nova aba`}
  >
    <WhatsAppIcon />
    {label}
  </Button>
);
