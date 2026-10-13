import { SITE_URL } from "./site";

const LOJA_ORIGIN = "https://ofertas.amigabeauty.com.br";

/**
 * Troca os links de navegação "para casa" da loja (logo e "Início", que no
 * código da AfiliadosPro apontam pra https://ofertas.amigabeauty.com.br)
 * pelo domínio principal do blog. Só mexe no atributo `href`, nunca em
 * `action` — o formulário de busca da loja usa o mesmo texto de URL e
 * precisa continuar indo pro backend de verdade.
 */
function redirectHomeLinksToBlog(html: string): string {
  const escaped = LOJA_ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`href="${escaped}"`, "g");
  return html.replace(pattern, `href="${SITE_URL}"`);
}

/**
 * Busca uma página da loja (hospedada na VPS, fora deste projeto) e
 * devolve como se fosse nossa, com os links de "voltar à home" ajustados.
 * Usado pelas rotas /loja e /loja/[...path].
 */
export async function proxyLojaRequest(
  request: Request,
  pathSegments: string[]
): Promise<Response> {
  const { search } = new URL(request.url);
  const upstreamUrl = `${LOJA_ORIGIN}/${pathSegments.join("/")}${search}`;

  const upstream = await fetch(upstreamUrl, {
    headers: { "user-agent": request.headers.get("user-agent") ?? "" },
    redirect: "follow",
  });

  const contentType = upstream.headers.get("content-type") ?? "";

  if (!contentType.includes("text/html")) {
    return new Response(upstream.body, {
      status: upstream.status,
      headers: { "content-type": contentType },
    });
  }

  const html = await upstream.text();
  return new Response(redirectHomeLinksToBlog(html), {
    status: upstream.status,
    headers: { "content-type": contentType },
  });
}
