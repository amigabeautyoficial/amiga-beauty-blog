#!/usr/bin/env node
/**
 * Avisa o Bing, o Yandex e outros buscadores compatíveis com IndexNow que
 * uma ou mais URLs do site foram publicadas/atualizadas.
 *
 * Uso:
 *   node scripts/indexnow.mjs https://amigabeauty.com.br/blog/novo-artigo
 *   node scripts/indexnow.mjs url1 url2 url3
 *   node scripts/indexnow.mjs --all   (envia todas as URLs do sitemap.xml)
 *
 * A chave abaixo é pública por natureza (é o próprio mecanismo de
 * verificação do protocolo IndexNow) e fica também em
 * public/<KEY>.txt, acessível em https://amigabeauty.com.br/<KEY>.txt
 */

const HOST = "amigabeauty.com.br";
const KEY = "f8a508a328f84cf3a37f705fc235ce41";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function getAllSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Não foi possível ler o sitemap (status ${res.status})`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function submitUrls(urlList) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`Enviadas ${urlList.length} URL(s). Status: ${res.status}`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  if (!res.ok && res.status !== 202) {
    const body = await res.text().catch(() => "");
    console.error("Resposta do IndexNow:", body);
    process.exitCode = 1;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error(
      "Uso: node scripts/indexnow.mjs <url1> [url2 ...] | --all"
    );
    process.exit(1);
  }

  const urlList =
    args[0] === "--all" ? await getAllSitemapUrls() : args;

  await submitUrls(urlList);
}

main().catch((err) => {
  console.error("Falha ao notificar o IndexNow:", err.message);
  process.exit(1);
});
