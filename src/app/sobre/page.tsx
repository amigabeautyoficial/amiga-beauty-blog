import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nós | Amiga Beauty",
  description:
    "Conheça o Amiga Beauty: uma revista para a mulher como um todo — beleza, comportamento, relacionamentos, carreira, fé e muito mais.",
};

export default function SobrePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Sobre o Amiga Beauty
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Muito mais que um blog de beleza.
      </p>

      <div className="relative w-full aspect-[16/7] mt-8 overflow-hidden rounded-3xl bg-nude">
        <Image
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1400&q=80"
          alt="Mulheres reunidas conversando e sorrindo"
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none mt-10 prose-headings:font-extrabold prose-a:text-[var(--primary)]">
        <p>
          Oi, amiga! Que bom ter você por aqui. 💜
        </p>

        <p>
          O <strong>Amiga Beauty</strong> nasceu com um propósito simples:
          ser aquele espaço em que você se sente acolhida, como quando senta
          pra conversar com uma amiga de verdade. Só que aqui, a conversa não
          para na beleza.
        </p>

        <p>
          Sim, a gente fala muito sobre maquiagem, skincare, cabelo e os
          melhores achadinhos — porque cuidar de si também é um ato de amor
          próprio. Mas a mulher que a gente quer alcançar é muito maior do
          que isso. Por isso, o Amiga Beauty é uma{" "}
          <strong>revista para a mulher como um todo</strong>: a mulher que
          trabalha, que ama, que duvida, que cresce, que cuida da casa, da
          carreira, da fé e de si mesma — tudo ao mesmo tempo, na correria do
          dia a dia.
        </p>

        <h2>O que você encontra por aqui</h2>
        <p>Aqui você vai encontrar conteúdo sobre:</p>
        <ul>
          <li>💄 <strong>Beleza</strong> — maquiagem, skincare, cabelo e moda;</li>
          <li>
            💬 <strong>Comportamento e relacionamentos</strong> — amizades,
            amor, família e os altos e baixos da vida real;
          </li>
          <li>
            ✨ <strong>Valores e vida cristã</strong> — fé, propósito e o que
            realmente importa;
          </li>
          <li>
            💼 <strong>Carreira</strong> — dicas para crescer profissionalmente
            sem perder a essência;
          </li>
          <li>
            ✈️ <strong>Viagens e esportes</strong> — porque a vida também é
            sobre experiências e cuidar do corpo com prazer;
          </li>
          <li>
            🛍️ <strong>Achadinhos</strong> — as melhores ofertas, com preço
            justo e qualidade de verdade.
          </li>
        </ul>

        <h2>Nosso propósito</h2>
        <p>
          Queremos ser a amiga que te entende, te inspira e te ajuda a viver
          melhor — em todas as áreas da vida, não só na frente do espelho.
          Acreditamos que toda mulher merece conteúdo de qualidade, feito com
          carinho e pensado pra ela de verdade.
        </p>

        <h2>Vem com a gente</h2>
        <p>
          Se você chegou até aqui, já é nossa amiga. Fica à vontade pra
          explorar o site, deixar seu comentário, seguir a gente nas redes
          sociais e, claro, conferir os{" "}
          <a
            href="https://ofertas.amigabeauty.com.br"
            target="_blank"
            rel="noreferrer"
          >
            achadinhos da semana
          </a>
          . A gente vai estar sempre por aqui, prontas pra essa conversa. 💜
        </p>
      </div>
    </article>
  );
}
