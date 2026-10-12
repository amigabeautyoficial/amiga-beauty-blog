export const CONSENT_KEY = "amiga-beauty-cookie-consent";
export const CONSENT_EVENT = "amiga-beauty-consent-changed";

export type ConsentStatus = "accepted" | "declined";

export function getStoredConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(status: ConsentStatus) {
  try {
    window.localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // localStorage indisponível (modo privado, etc.) — segue sem persistir.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
