"use client";

import { useState } from "react";

type ShareButtonsProps = {
  url: string;
  title: string;
};

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "currentColor",
};

function WhatsAppIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.23 0 4.33.87 5.9 2.45a8.23 8.23 0 0 1 2.44 5.86c0 4.57-3.72 8.3-8.3 8.3-1.48 0-2.93-.39-4.2-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.58 3.73-8.36 8.22-8.36zm-4.3 4.73c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.17 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.47-.4-.4-.55-.41z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12.04 2C6.58 2 2.13 6.46 2.13 11.92c0 4.18 2.6 7.75 6.28 9.2-.09-.78-.16-1.98.03-2.84.18-.77 1.17-4.93 1.17-4.93s-.3-.6-.3-1.48c0-1.39.8-2.42 1.8-2.42.85 0 1.26.64 1.26 1.4 0 .86-.54 2.14-.83 3.33-.23.99.5 1.8 1.48 1.8 1.77 0 3.14-1.87 3.14-4.56 0-2.38-1.72-4.05-4.17-4.05-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.32-.25 1-.28 1.14-.04.19-.15.23-.34.14-1.26-.58-2.05-2.42-2.05-3.9 0-3.18 2.31-6.1 6.66-6.1 3.5 0 6.22 2.49 6.22 5.83 0 3.48-2.2 6.28-5.24 6.28-1.03 0-1.99-.53-2.32-1.16l-.63 2.41c-.23.88-.85 1.98-1.26 2.65.95.29 1.95.45 3 .45 5.46 0 9.91-4.46 9.91-9.92C21.96 6.46 17.5 2 12.04 2z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21.9 4.6 18.5 20c-.25 1.1-.93 1.37-1.88.86l-5.2-3.83-2.5 2.42c-.28.28-.51.51-1.05.51l.37-5.3L18 6.3c.43-.38-.09-.6-.67-.21L6.5 13.3l-5.15-1.6c-1.12-.35-1.14-1.12.24-1.66l20.1-7.74c.93-.34 1.75.21 1.21 1.3z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon />,
      bg: "#25D366",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon />,
      bg: "#1877F2",
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: <PinterestIcon />,
      bg: "#E60023",
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <TelegramIcon />,
      bg: "#26A5E4",
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível — ignora silenciosamente
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-semibold text-foreground/60 mr-1">
        Compartilhar:
      </span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Compartilhar no ${link.name}`}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-85 transition-opacity"
          style={{ backgroundColor: link.bg }}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copiar link"
        className="w-9 h-9 rounded-full flex items-center justify-center bg-nude-soft text-foreground/70 hover:bg-nude transition-colors relative"
      >
        <LinkIcon />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold bg-foreground text-white px-2 py-1 rounded whitespace-nowrap">
            Copiado!
          </span>
        )}
      </button>
    </div>
  );
}
