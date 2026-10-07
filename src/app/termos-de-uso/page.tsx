import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Amiga Beauty",
  description: "Regras e condições para uso do site Amiga Beauty.",
};

export default function TermosDeUsoPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Termos de Uso
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Última atualização: 07 de outubro de 2026
      </p>

      <div className="prose prose-lg max-w-none mt-10 prose-headings:font-extrabold prose-a:text-[var(--primary)]">
        <p>
          Bem-vinda(o) ao <strong>Amiga Beauty</strong>! Ao acessar e utilizar
          o site <a href="https://amigabeauty.com.br">amigabeauty.com.br</a>,
          você concorda com os termos e condições descritos abaixo. Leia com
          atenção antes de navegar pelo site.
        </p>

        <h2>1. Sobre o site</h2>
        <p>
          O Amiga Beauty é um blog de conteúdo sobre maquiagem, skincare,
          cabelo e moda, que também recomenda produtos através de links de
          afiliados e de nossa loja de ofertas, disponível em{" "}
          <a
            href="https://ofertas.amigabeauty.com.br"
            target="_blank"
            rel="noreferrer"
          >
            ofertas.amigabeauty.com.br
          </a>
          .
        </p>

        <h2>2. Uso do conteúdo</h2>
        <p>
          Todo o conteúdo publicado no site (textos, imagens, logotipos e
          identidade visual) é de propriedade do Amiga Beauty ou de seus
          respectivos autores, protegido por leis de direitos autorais. É
          proibida a reprodução total ou parcial do conteúdo sem autorização
          prévia, exceto para compartilhamento pessoal com citação da fonte e
          link para o site original.
        </p>

        <h2>3. Caráter informativo</h2>
        <p>
          O conteúdo publicado tem caráter informativo e não substitui
          orientação profissional (médica, dermatológica ou de qualquer outra
          natureza). Recomendamos sempre consultar um profissional
          qualificado antes de adotar produtos ou procedimentos de beleza.
        </p>

        <h2>4. Links de afiliados e ofertas</h2>
        <p>
          O Amiga Beauty participa de programas de afiliados e pode receber
          comissão por compras realizadas através de links indicados no site
          ou em nossa loja de ofertas, sem qualquer custo adicional para
          você. Preços, disponibilidade e condições de produtos exibidos são
          de responsabilidade das lojas parceiras e podem mudar sem aviso
          prévio.
        </p>

        <h2>5. Comentários e interações</h2>
        <p>
          Ao comentar ou interagir no site e em nossas redes sociais, você se
          compromete a manter uma conduta respeitosa. Reservamo-nos o direito
          de remover comentários ofensivos, spam ou conteúdo que viole estes
          termos.
        </p>

        <h2>6. Limitação de responsabilidade</h2>
        <p>
          O Amiga Beauty não se responsabiliza por danos diretos ou indiretos
          decorrentes do uso do site, de produtos adquiridos através de links
          indicados, ou de decisões tomadas com base no conteúdo publicado.
        </p>

        <h2>7. Alterações nos termos</h2>
        <p>
          Estes termos podem ser atualizados a qualquer momento, sem aviso
          prévio. O uso contínuo do site após alterações implica aceitação
          dos novos termos.
        </p>

        <h2>8. Contato</h2>
        <p>
          Dúvidas sobre estes Termos de Uso podem ser enviadas para{" "}
          <a href="mailto:contato@amigabeauty.com.br">
            contato@amigabeauty.com.br
          </a>
          .
        </p>
      </div>
    </article>
  );
}
