import Link from "next/link";
import Image from "next/image";
import { getTopLevelCategories, getChildCategories } from "@/lib/categories";

export default function Header() {
  const topLevel = getTopLevelCategories();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo-horizontal-official.png"
              alt="Amiga Beauty"
              width={996}
              height={162}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {topLevel.map((cat) => {
              const children = getChildCategories(cat.slug);
              return (
                <div key={cat.slug} className="relative group">
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors whitespace-nowrap py-7"
                  >
                    {cat.name}
                  </Link>
                  {children.length > 0 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block pt-1 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-border-soft py-2 min-w-[190px]">
                        {children.map((child) => (
                          <Link
                            key={child.slug}
                            href={`/categoria/${child.slug}`}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:bg-nude-soft hover:text-primary whitespace-nowrap"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href="https://ofertas.amigabeauty.com.br"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-white px-4 py-2 rounded-full whitespace-nowrap"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Loja de Ofertas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Buscar"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-nude-soft hover:bg-nude transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-nude-soft hover:bg-nude transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
