import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DEFAULT_DESCRIPTION =
  "Beleza, comportamento, relacionamentos, carreira, fé e os melhores achadinhos — a revista para a mulher como um todo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Beleza, Comportamento e Estilo de Vida`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Beleza, Comportamento e Estilo de Vida`,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Beleza, Comportamento e Estilo de Vida`,
    description: DEFAULT_DESCRIPTION,
  },
  verification: {
    google: "djcih1RcruDcS7t0L3BV9NNT25ia0fQHLkmnzJyZSUY",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
