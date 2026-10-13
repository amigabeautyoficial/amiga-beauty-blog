import Link from "next/link";
import Image from "next/image";
import { getTopLevelCategoriesWithPosts } from "@/lib/posts";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border-soft bg-nude-soft">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/images/logo-horizontal-official.png"
            alt="Amiga Beauty"
            width={996}
            height={162}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-3 text-sm text-foreground/70 max-w-xs">
            Beleza, comportamento, relacionamentos, carreira, fé e os
            melhores achadinhos — tudo pensado pra você, toda semana.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-foreground/60">
            Categorias
          </h4>
          <ul className="space-y-2">
            {getTopLevelCategoriesWithPosts().map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categoria/${cat.slug}`}
                  className="text-sm text-foreground/80 hover:text-primary"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wide mb-3 text-foreground/60">
            Siga a Amiga Beauty
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Instagram", "TikTok", "Pinterest", "YouTube"].map((s) => (
              <span
                key={s}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-border-soft text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href="/loja"
            className="inline-block mt-4 text-sm font-bold text-white px-4 py-2 rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Ver Achadinhos
          </a>
          <p className="mt-2 text-[11px] text-foreground/50 max-w-xs">
            Link de afiliado: podemos ganhar uma comissão em compras feitas
            por aqui, sem custo extra pra você.
          </p>
        </div>
      </div>
      <div className="border-t border-border-soft py-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-xs text-foreground/50">
        <span>
          © {new Date().getFullYear()} Amiga Beauty. Todos os direitos
          reservados.
        </span>
        <span className="hidden sm:inline">·</span>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <span className="hidden sm:inline">·</span>
        <Link href="/sobre" className="hover:text-primary">
          Sobre Nós
        </Link>
        <span className="hidden sm:inline">·</span>
        <Link href="/politica-de-privacidade" className="hover:text-primary">
          Política de Privacidade
        </Link>
        <span className="hidden sm:inline">·</span>
        <Link href="/termos-de-uso" className="hover:text-primary">
          Termos de Uso
        </Link>
      </div>
    </footer>
  );
}
