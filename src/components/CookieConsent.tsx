"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  if (!visible) return null;

  function handle(status: "accepted" | "declined") {
    setStoredConsent(status);
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4">
      <div className="max-w-3xl mx-auto bg-white border border-border-soft rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-foreground/80 flex-1">
          A gente usa cookies pra entender como você navega no site e
          melhorar sua experiência. Você pode aceitar ou recusar — isso não
          muda o acesso ao conteúdo. Veja nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="underline hover:text-primary"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handle("declined")}
            className="text-sm font-semibold px-4 py-2 rounded-full border border-border-soft text-foreground/70 hover:bg-nude-soft"
          >
            Recusar
          </button>
          <button
            onClick={() => handle("accepted")}
            className="text-sm font-bold px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
