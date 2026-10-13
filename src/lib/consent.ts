// O banner de cookies é apenas informativo: Analytics carrega sempre
// (quando NEXT_PUBLIC_GA_ID está configurado), independente do que a
// pessoa clicar aqui. Isso só controla se o aviso já foi visto, pra não
// reaparecer a cada visita.
export const CONSENT_KEY = "amiga-beauty-cookie-notice-dismissed";

export function getStoredConsent(): "accepted" | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted"
      ? "accepted"
      : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(status: "accepted") {
  try {
    window.localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistir.
  }
}
