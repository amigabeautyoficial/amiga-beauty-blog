import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Amiga Beauty",
  description: "Como o Amiga Beauty coleta, usa e protege seus dados.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
        Política de Privacidade
      </h1>
      <p className="mt-3 text-sm text-foreground/60">
        Última atualização: 07 de outubro de 2026
      </p>

      <div className="prose prose-lg max-w-none mt-10 prose-headings:font-extrabold prose-a:text-[var(--primary)]">
        <p>
          Esta Política de Privacidade descreve como o <strong>Amiga Beauty</strong>{" "}
          (&quot;nós&quot;, &quot;nosso&quot; ou &quot;site&quot;), acessível em{" "}
          <a href="https://amigabeauty.com.br">amigabeauty.com.br</a>, coleta,
          usa e protege as informações dos visitantes, em conformidade com a
          Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>

        <h2>1. Quais dados coletamos</h2>
        <p>Podemos coletar os seguintes tipos de informação:</p>
        <ul>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de
            navegador, páginas visitadas, tempo de permanência e origem do
            acesso, coletados automaticamente por ferramentas de análise
            (como Google Analytics).
          </li>
          <li>
            <strong>Cookies:</strong> pequenos arquivos armazenados no seu
            dispositivo para lembrar preferências e melhorar sua experiência
            de navegação.
          </li>
          <li>
            <strong>Dados fornecidos voluntariamente:</strong> nome e e-mail,
            caso você se cadastre em newsletter, deixe comentários ou entre
            em contato conosco.
          </li>
        </ul>

        <h2>2. Como usamos seus dados</h2>
        <p>Utilizamos as informações coletadas para:</p>
        <ul>
          <li>Melhorar o conteúdo e a experiência de navegação no site;</li>
          <li>
            Personalizar anúncios e recomendações de produtos exibidos no
            site e em plataformas parceiras;
          </li>
          <li>Enviar newsletters e comunicações, quando autorizado;</li>
          <li>Analisar métricas de audiência e desempenho do conteúdo.</li>
        </ul>

        <h2>3. Links de afiliados</h2>
        <p>
          O Amiga Beauty participa de programas de afiliados (como Shopee,
          Amazon, Mercado Livre e outros) e pode conter links que direcionam
          para lojas parceiras, incluindo nossa loja de ofertas em{" "}
          <a
            href="https://ofertas.amigabeauty.com.br"
            target="_blank"
            rel="noreferrer"
          >
            ofertas.amigabeauty.com.br
          </a>
          . Ao clicar nesses links, você sai do nosso site e passa a estar
          sujeito à política de privacidade da plataforma parceira. Podemos
          receber uma comissão por compras realizadas através desses links,
          sem custo adicional para você.
        </p>

        <h2>4. Cookies e tecnologias de rastreamento</h2>
        <p>
          Usamos cookies próprios e de terceiros (como Google Analytics e
          redes de publicidade) para entender como o site é utilizado e
          exibir conteúdo mais relevante. Você pode desativar os cookies nas
          configurações do seu navegador, mas isso pode afetar algumas
          funcionalidades do site.
        </p>

        <h2>5. Compartilhamento de dados</h2>
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhar informações
          com prestadores de serviço (hospedagem, análise de dados,
          plataformas de e-mail marketing) estritamente para operar o site,
          sempre respeitando esta política.
        </p>

        <h2>6. Seus direitos</h2>
        <p>Conforme a LGPD, você tem direito a:</p>
        <ul>
          <li>Confirmar a existência de tratamento dos seus dados;</li>
          <li>Acessar, corrigir ou atualizar seus dados;</li>
          <li>Solicitar a exclusão de dados pessoais;</li>
          <li>Revogar consentimentos dados anteriormente.</li>
        </ul>
        <p>
          Para exercer esses direitos, entre em contato pelo e-mail{" "}
          <a href="mailto:contato@amigabeauty.com.br">
            contato@amigabeauty.com.br
          </a>
          .
        </p>

        <h2>7. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. Recomendamos a
          revisão deste conteúdo com regularidade. A data da última
          atualização está sempre indicada no topo desta página.
        </p>

        <h2>8. Contato</h2>
        <p>
          Dúvidas sobre esta Política de Privacidade podem ser enviadas para{" "}
          <a href="mailto:contato@amigabeauty.com.br">
            contato@amigabeauty.com.br
          </a>
          .
        </p>
      </div>
    </article>
  );
}
