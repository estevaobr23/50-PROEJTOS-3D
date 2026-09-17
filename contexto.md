# Contexto — Página de Vendas "100 Projetos de Móveis 3D para Gatos"

> ⚠️ **REVERSÃO EM 2026-09-16 — LER ANTES DE QUALQUER OUTRA COISA NESTE
> ARQUIVO.** A seção abaixo ("O produto", datada de 2026-09-15) dizia que o
> 3D era o produto principal e que fichas em PDF estavam abandonadas. **Isso
> foi um erro de direção do usuário e foi revertido no dia seguinte.** A
> decisão nova, que vale a partir de agora:
>
> - **Produto principal: 100 fichas técnicas em PDF** (uma por móvel).
>   O 3D não gera desejo de compra — o PDF visual é o que o público de
>   marceneiro/maker realmente quer.
> - **O acervo 3D vira bônus/complemento** dentro da mesma oferta, não mais
>   o carro-chefe.
> - Qualquer trecho abaixo que diga "nunca mais mostrar fichas desenhadas
>   estáticas" ou equivalente está REVOGADO. Fichas em PDF voltam a ser
>   produzidas, mostradas e vendidas.
> - As fichas são produzidas no projeto irmão
>   `c:\Users\Usuário\Desktop\PROJETOS\PROJETOS 3D MOVEIS PARA GATOS`
>   (lista completa em `lista-100-fichas.md` lá) — imagem de referência
>   gerada no Gemini, ficha montada a partir dela. Medida de corte não pode
>   ser inventada só olhando a imagem: vem de `lib/projetos-tecnicos.ts`
>   desse projeto irmão.
> - Antes de editar a Seção 2 ("Vitrine com modelos 3D reais") ou a Seção 4
>   ("Veja por dentro") desta página com base no texto abaixo, confirmar com
>   o usuário se elas devem passar a mostrar fichas em PDF em vez de (ou além
>   de) os GLBs — o texto abaixo ainda descreve o layout **antigo**, focado
>   em 3D como atração principal, e pode estar desatualizado quanto a isso.
>
> O restante deste arquivo (preços, bônus, links de checkout, pixel, UTM,
> estado da Cakto) **continua valendo normalmente** — a reversão é só sobre
> qual é o produto/mídia principal (PDF vs. 3D), não sobre preço ou oferta.
>
> **Execução da reversão (2026-09-16, mesmo dia):**
> - Seção 2 ("O que tem dentro", `.vitrine`): mantém a grid dos 4 model-cards
>   3D, mas o carrossel de imagens lifestyle (`.page-marquee`) foi movido pra
>   cá — antes do card `.desire-strip` ("100 projetos em 5 categorias").
> - Seção 4 ("Veja por dentro", `.inside`): ordem agora é headline → badges
>   (`.cat-marquee`) → prévia (`.ebook-preview`) → carrossel de fichas em PDF
>   (`.ficha-marquee`, novo). O `.page-marquee` NÃO duplica mais aqui — só
>   existe na seção 2 agora.
> - `.ficha-marquee`: 10 fichas técnicas reais copiadas de
>   `PROJETOS 3D MOVEIS PARA GATOS/public/fichas/grande/*.webp` (geradas por
>   IA — GPT usando referência do Gemini) para
>   `assets/fichas-preview/*.webp` nesta página, redimensionadas com
>   `sharp-cli` (700px, q78, ~85KB cada).
> - `.ebook-preview`: era uma imagem estática; agora é o **flipbook real**
>   via iframe embedado (Heyzine), gerado a partir das 5 páginas de abertura
>   em `PROJETOS 3D MOVEIS PARA GATOS/public/paginas-iniciais/*.png` (capa,
>   boas-vindas, como usar, índice de categorias, avisos importantes — nenhum
>   projeto/ficha de conteúdo real entra na prévia, só essas 5).
>   URL do flipbook: `https://heyzine.com/flip-book/97ac940289.html`.
>   Gerado via a skill `heyzine-flipbook` (helper `~/.heyzine/heyzine.mjs`,
>   credenciais em `~/.heyzine/credentials.env`) — **não dá pra editar depois
>   de gerado**, qualquer ajuste no PDF de prévia exige reconverter e trocar
>   a URL do iframe de novo.
> - Badge "+ 35 outros projetos" no `.cat-marquee` estava desatualizado
>   (resquício de quando eram 50 projetos) — corrigido para "+ 69 outros
>   projetos" (31 badges nomeados + 69 = 100).
> - **Pendente**: as 90 fichas restantes (só 10 foram usadas no carrossel de
>   amostra) e o pipeline de geração das fichas com Gemini+GPT Image ainda
>   está em estudo pelo usuário — não gerar fichas novas sem pedido explícito.

> Leia este arquivo inteiro antes de mexer em qualquer coisa. Ele documenta o
> estado REAL do projeto em 2026-09-15 (ver aviso de reversão acima para o
> que mudou em 2026-09-16). Se algo aqui divergir do código, o código manda —
> mas normalmente isso significa que este arquivo ficou desatualizado e deve
> ser corrigido.

## O produto (histórico — 2026-09-15, ver reversão no topo)

Infoproduto de baixo ticket para marceneiros / "maridos de aluguel": 100
projetos de móveis para gatos. **Em 2026-09-15 a decisão era "modelo 3D como
produto principal, sem PDF"; em 2026-09-16 isso foi revertido — ver o aviso
no topo do arquivo.** O texto original desta seção, mantido como histórico:

Infoproduto de baixo ticket para marceneiros / "maridos de aluguel": 100
projetos de móveis para gatos em modelo 3D (não são mais PDFs de fichas
desenhadas — foi decisão explícita do usuário abandonar isso). O comprador
recebe acesso a uma área de membros com os modelos 3D navegáveis, gerados via
IA (Tripo), com peças técnicas segmentadas para corte.

**Mudança de oferta (2026-09-15)**: o catálogo passou de 50 para 100
projetos. Todas as menções a "50" na página (`index.html`), no `package.json`
e no produto ativo na Cakto foram atualizadas para "100". Preços, bônus,
links de checkout e nomes das ofertas (VIP/Básico/Downsell) não mudaram — só
a contagem de projetos no texto.

Preços vigentes (não mexer sem pedido explícito):
- **Plano completo (VIP)**: R$ 29,90
- **Plano básico**: R$ 22,90
- **Downsell**: R$ 25,90

Bônus atuais (substituíram um set antigo de 4 bônus diferentes):
1. Calculadora de Preço e Lucro
2. Gerador de Orçamento
3. Catálogo Interativo
4. Lista de Compras Para Iniciantes

## Onde as coisas estão

- **Repo local**: `C:\Users\Usuário\Desktop\PROJETOS\PAGINA DE VENDAS 3D PARA GATOS`
- **GitHub**: `https://github.com/estevaobr23/50-PROEJTOS-3D.git` (branch `main`,
  push já feito, é o remote `origin`)
- **Deploy**: Vercel, conectado ao mesmo repo GitHub, deploy automático a cada
  push — configurado pelo usuário fora do meu controle direto. Todo commit que
  eu fizer no `main` reflete lá.
- **Projeto irmão** (fonte dos modelos 3D e da geometria técnica):
  `c:\Users\Usuário\Desktop\PROJETOS\PROJETOS 3D MOVEIS PARA GATOS` — é o
  código da ÁREA DE MEMBROS em si (Next.js/TS), não da página de vendas. Tem
  seu próprio `contexto.md`.
- **Stack da página de vendas**: Vite 5 vanilla, `index.html` single-file
  (HTML + CSS em `<style>` + JS em blocos `<script>`/`<script type="module">`
  dentro do próprio arquivo). Sem framework.

## Estrutura de arquivos importantes

```
index.html              → página inteira (head, 13 seções, scripts)
vite.config.js          → external[] pros módulos Three.js via CDN (ver abaixo)
public/modelos3d/*.glb  → os 4 modelos 3D reais usados na Seção 2
assets/modelos3d/thumb/*.webp → thumbnails desses 4 modelos
assets/inside/lifestyle-4x3/*.webp → imagens reais (renders/preview) usadas
                                      no carrossel "Veja por dentro"
assets/depoimentos/, assets/mockups/, garantia-15-dias.webp → outros assets
icon-email.webp, icon-wpp.webp → ícones de contato
```

`dist/`, `node_modules/`, `.preview.log`, `*.log` estão no `.gitignore` — não
commitados.

## Seção 2 — Vitrine com modelos 3D reais (carregamento sob demanda)

Decisão importante do usuário: **nunca mais mostrar fichas desenhadas
estáticas**. A Seção 2 mostra 4 cards (`.model-card`), cada um com:
- `<img class="model-thumb">` → preview real (webp) do modelo
- botão `data-abrir-3d` → ao clicar, injeta um `<div class="model-stage">`
  e monta uma cena Three.js SÓ NAQUELE MOMENTO (import dinâmico dentro de
  `<script type="module">`, usando um import map no `<head>` para resolver o
  bare specifier `"three"` via CDN jsdelivr). Isso mantém o peso inicial da
  página baixo (~1MB extra só depois do clique, medido via Playwright).

Os 4 modelos ativos hoje (escolhidos por serem os mais interessantes —
priorizando nichos e torres, excluindo peças simples como "Painel Arranhador
de Parede"):

| slug (data-modelo)            | nome exibido                         | arquivo GLB                              |
|--------------------------------|---------------------------------------|-------------------------------------------|
| `torre-alta-vertical`          | Torre Alta Vertical (041)             | `modelos3d/torre-alta-vertical.glb`       |
| `nicho-tunel-entrada-angulo`   | Nicho Túnel com Entrada em Ângulo (015)| `modelos3d/nicho-tunel-entrada-angulo.glb`|
| `casinha-suspensa-telhado`     | Casinha Suspensa com Telhado (022)    | `modelos3d/casinha-suspensa-telhado.glb`  |
| `arvore-compacta-2-niveis`     | Árvore Compacta de 2 Níveis (039)     | `modelos3d/arvore-compacta-2-niveis.glb`  |

**Histórico relevante**: havia um 5º candidato, "Nicho Túnel Retangular
(013)", que tinha defeito visual (pés/base bagunçados/cruzados) — foi
DESCARTADO e substituído por Casinha Suspensa + Árvore Compacta. Se algum dia
reaproveitar modelos da área de membros, sempre visualizar antes: pode ter
defeito de geração (Tripo/IA).

Detalhes técnicos do carregamento 3D:
- GLBs comprimidos com Draco (`gltf-transform optimize --compress draco
  --texture-compress webp`), reduzindo de 6-9MB brutos para 0,6-1,4MB cada.
- Precisa de `GLTFLoader` + `DRACOLoader` (setDecoderPath apontando pro CDN),
  senão dá erro "No DRACOLoader instance provided".
- `vite.config.js` tem que listar as URLs completas do CDN em
  `build.rollupOptions.external`, senão o Rollup tenta resolver o bare
  specifier `three` em build time e quebra (o pacote nem está instalado
  localmente — é 100% via CDN, de propósito).
- Os `.glb` ficam em `public/modelos3d/` (não em `assets/`) porque só são
  referenciados via string JS, nunca em atributo HTML — e o Vite só
  detecta/copia assets referenciados em HTML. `public/` é copiada para
  `dist/` sem processamento, então é o único jeito confiável do `.glb`
  chegar no build final.
- Função de destruição (`destruir()`) faz dispose completo da cena ao trocar
  de modelo, pra não vazar memória.

## Seção 4 — "Veja por dentro"

Duas partes, nesta ordem:

1. **`.cat-marquee`**: lista/carrossel horizontal de nomes de projeto em
   badges (`.cat-badge`), 4 fileiras (`.cat-row` > `.cat-track`), scroll
   infinito alternando direção (`cat-left`/`cat-right`), badges "sangrando"
   para fora do container (densidade alta). Badges dos 4 projetos que têm
   modelo 3D navegável na página (mesmos da Seção 2) recebem a classe
   `.cat-badge--destaque` (gradiente laranja) para se destacarem visualmente
   da lista.
   - **Isto substituiu um bloco antigo** (`.flip-wrap`/`.flip-embed`, um
     flipbook/hero-mockup) que existia dentro desta mesma seção "Veja por
     dentro" — não confundir com o Hero (seção 1), que nunca foi mexido
     nesse pedido. Se pedirem para "trocar aquele bloco visual" de novo,
     conferir se é este marquee de badges antes de tocar em qualquer coisa.

2. **`.page-marquee`**: 3 linhas de imagens reais
   (`assets/inside/lifestyle-4x3/*.webp`) — são renders/preview REAIS dos
   projetos (não desenhos/fichas técnicas). Únicas imagens desta pasta
   realmente referenciadas pelo HTML (pastas irmãs "gallery" e
   "lifestyle-4x5" eram órfãs e foram removidas do repo).

## Paleta de cores

A paleta antiga era "terra/marrom" — **foi completamente removida** por
pedido explícito do usuário, que queria a paleta REAL usada na área de
membros do produto (laranja + grafite, sem marrom). Tokens atuais em
`:root` (index.html, por volta da linha 40-56):

```css
--primary: hsl(222, 20%, 14%);   /* grafite escuro */
--coral:   hsl(21, 90%, 48%);    /* laranja principal */
--leaf:    hsl(32, 95%, 44%);    /* âmbar */
```

Essa mesma paleta foi convertida de HSL→HEX manualmente e aplicada também ao
**design visual do checkout da Cakto** via API (não só criação do produto —
o usuário insistiu especificamente nisso). Já foi verificado com medição
real de `getComputedStyle()` em Playwright contra a página do checkout.

## Pixel de rastreamento e UTMs

- Pixel UTMify real, já implementado no `<head>`:
  `window.pixelId = "6aa754da356ad930a1e76c9a";` — veio ofuscado
  (base64+XOR) do usuário, eu decodifiquei manualmente antes de colar
  qualquer coisa na página, pra confirmar que era conteúdo legítimo (pixel
  UTMify padrão).
- Bloco de repasse de UTM (comentário "3. CHECKOUT + REPASSE DE UTM", por
  volta da linha 1400 do `index.html`): a Cakto NÃO herda UTM da página
  automaticamente — é preciso colar os parâmetros na query string do link de
  checkout na hora do clique. O bloco:
  - Campos rastreados: `utm_source, utm_medium, utm_campaign, utm_term,
    utm_content, sck, fbclid, gclid, ttclid`.
  - Regra "primeiro toque vence": captura da URL na primeira visita, salva em
    `sessionStorage` (`rastreio_50-projetos-3d-gatos`), e reaplica em toda
    visita subsequente da mesma sessão mesmo que a URL não tenha mais UTM.
  - Aplica em qualquer elemento com atributo `data-checkout="vip|basico|downsell"`.
  - Testado nos 3 cenários: chegada com UTM, recarga sem UTM, visitante
    direto.

## Links de checkout (Cakto, produção real — SEM sandbox)

```js
var LINKS = {
  vip:      'https://pay.cakto.com.br/35dieni',   // R$ 29,90
  downsell: 'https://pay.cakto.com.br/g64q8jg',   // R$ 25,90
  basico:   'https://pay.cakto.com.br/3ceh5ve'    // R$ 22,90
};
```

## Estado da conta Cakto (dashboard)

Depois de uma limpeza pedida explicitamente pelo usuário, **apenas 2
produtos ficam ativos** na conta:
1. **50 Projetos de Móveis 3D para Gatos** (produto principal, com as 3
   ofertas/links acima)
2. **Entrega Imediata no WhatsApp + Grupo do Marceneiro Pet** (order bump /
   produto de entrega)

Todos os outros produtos que existiam (12 no total) foram deletados
(soft-delete) via API. Se algo reaparecer na lista, provavelmente é um
teste antigo que não foi pego pela paginação — a API da Cakto só retorna 10
resultados por página por padrão, é preciso iterar `?page=N` até `next`
vir `null` pra ter certeza que a lista está completa.

### Limitações conhecidas da API pública da Cakto
Alguns campos do painel **não são graváveis via API** e exigem ação manual
do usuário direto no painel da Cakto:
- Imagem/capa do produto
- PIX como método de pagamento padrão
- Categoria do produto
- Forma de entrega de conteúdo ("Acesso por e-mail" vs "Link de pagamento")

Também vale lembrar: na API da Cakto, **HTTP 200 não é garantia de
sucesso** — ela aceita e silenciosamente ignora vários campos que não
existem ou não são suportados. Sempre reconfirmar qualquer escrita
importante com um GET subsequente antes de considerar a tarefa concluída.

## Servidor de preview local ("local hosting")

**Isso NÃO é um bug — é esperado.** O processo do servidor de preview não
sobrevive a um reinício da sessão do Claude Code (nova janela/sessão =
processo morto). Toda vez que o usuário pedir o "link do local hosting" e
ele não responder, o procedimento é:

```bash
cd "C:/Users/Usuário/Desktop/PROJETOS/PAGINA DE VENDAS 3D PARA GATOS"
npx vite build
nohup npx vite preview --port 4180 --strictPort > .preview.log 2>&1 &
sleep 3
curl -s -o /dev/null -m 8 -w "HTTP %{http_code}\n" http://localhost:4180/
```

Link padrão: `http://localhost:4180`. Sempre confirmar com `curl` (HTTP 200
+ checar o `<title>`) antes de informar ao usuário que está no ar. Avisar
sempre que esse link só existe enquanto o terminal da sessão atual estiver
aberto.

## Convenções e decisões de estilo já validadas (não reabrir debate)

- Sem avisos de "pré-venda" ou placeholder visível — o usuário pediu para
  tratar a página como versão final desde o primeiro rascunho.
- Nunca reintroduzir tom marrom/terra na paleta.
- ~~Nunca voltar a mostrar fichas técnicas desenhadas/estáticas como imagem
  de produto~~ — **REVOGADO em 2026-09-16, ver aviso no topo do arquivo.**
  Fichas em PDF são agora o produto principal; o 3D vira bônus.
- Modelos 3D sempre sob demanda (clique), nunca no carregamento inicial da
  página — continua valendo, mas agora como seção de bônus, não a atração
  principal da página.
- Preferir nichos e torres ao escolher quais dos 50 projetos destacar; evitar
  peças simples demais (ex.: painéis lisos).
- Qualquer alteração de preço, bônus ou produtos ativos na Cakto só deve ser
  feita mediante pedido explícito e, para exclusões em massa, com confirmação
  prévia do usuário.

## Testes já feitos (e como)

- Playwright: screenshots de todas as seções, verificação de carregamento de
  imagem real (`img.decode()` + forçar `loading='eager'` antes de medir,
  porque `lazy` fora do viewport simulado dava falso positivo de "imagem
  quebrada"), simulação de clique nos botões "Ver em 3D", medição de peso de
  rede antes/depois do clique (~1MB extra só sob demanda), medição de
  `getComputedStyle()` real na página de checkout da Cakto (paleta aplicada).
- Build: `npx vite build` limpo, sem warnings de módulo externo não resolvido.

## Se abrir uma sessão nova a partir daqui

1. Leia este arquivo inteiro primeiro.
2. Rode `git status` e `git log --oneline -5` pra confirmar que nada mudou
   fora desta sessão.
3. Se o usuário pedir o link local, siga a seção "Servidor de preview local"
   acima — não precisa perguntar nada, é sempre o mesmo procedimento.
4. Qualquer mudança de preço/bônus/produto Cakto: confirmar valores atuais
   nas seções acima antes de assumir que mudaram.
