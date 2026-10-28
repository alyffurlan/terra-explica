# A Terra Explica — blog estático

Um blog responsivo feito com **HTML, CSS e JavaScript puro**, sem dependências, servidor ou banco de dados. Os artigos ficam em `js/articles.js`, então você consegue publicar uma nova edição editando um único arquivo.

## Como abrir no computador

1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador. Para uma experiência de desenvolvimento melhor, use a extensão **Live Server** no VS Code e clique em **Go Live**.

As imagens dos artigos ficam na pasta `assets/`. As fontes são carregadas do Google Fonts, então é necessária conexão com a internet para que apareçam.

## Como publicar no GitHub Pages (recomendado)

1. Entre no GitHub e crie um repositório novo, por exemplo `a-terra-explica`.
2. Envie **os arquivos e pastas que estão dentro desta pasta** para a raiz do repositório. O `index.html` deve ficar na raiz.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
6. Aguarde alguns minutos. O GitHub mostrará o endereço publicado na mesma tela de Pages.
7. Sempre que você enviar alterações para a branch `main`, o site será atualizado automaticamente.

> Este projeto é estático: o GitHub Pages é suficiente. Você não precisa de PHP, Node, banco de dados ou Render para a versão atual.

## Como publicar um artigo novo toda semana

1. Abra `js/articles.js`.
2. Dentro do array `ARTICLES`, copie um objeto inteiro de artigo, desde a primeira `{` até a `}` que fecha aquele artigo.
3. Cole o objeto no começo do array, depois do `[`; confira se há vírgula entre objetos.
4. Troque os campos:
   - `id`: identificador único, sem espaços ou acentos, por exemplo `"energia-solar"`.
   - `category`: tema curto, por exemplo `"Ciência"`, `"Tecnologia"` ou `"História"`.
   - `date`: data no formato `AAAA-MM-DD`.
   - `readTime`: tempo estimado, como `"4 MIN DE LEITURA"`.
   - `title`: título do artigo.
   - `excerpt`: resumo curto que aparece nos cartões.
   - `image`: URL direta da imagem ou caminho de um arquivo na pasta `assets/`.
   - `imageAlt`: descrição acessível da imagem.
   - `content`: blocos de texto do artigo. Use `{ type: "p", text: "..." }` para parágrafos e `{ type: "h3", text: "..." }` para subtítulos.
   - `quiz`: exatamente três perguntas, cada uma com três opções, a posição da correta e uma explicação.
5. Salve e teste no navegador. Verifique também se a imagem carrega e se as três perguntas funcionam.
6. Envie a alteração para o GitHub. O Pages atualizará o site automaticamente.

### Modelo de pergunta

```js
{
  question: "Qual afirmação está correta?",
  options: [
    "Primeira opção.",
    "Segunda opção.",
    "Terceira opção."
  ],
  answer: 1,
  explanation: "A segunda opção está correta porque..."
}
```

`answer` começa em zero: `0` significa primeira opção, `1` segunda e `2` terceira.

### Como adicionar uma imagem local

Coloque o arquivo em `assets/`, por exemplo `assets/energia-solar.jpg`, e no artigo use:

```js
image: "assets/energia-solar.jpg",
imageAlt: "Painéis solares recebendo luz do sol"
```

Prefira imagens próprias ou com licença que permita reutilização. Dê crédito quando a licença exigir.

## O que já vem pronto

- Layout adaptável para celular e computador.
- Busca por título, resumo, categoria e texto do artigo.
- Filtros por tema.
- Cartões de artigos e arquivo de publicações.
- Artigo aberto em uma janela de leitura.
- Quiz com três perguntas, correção automática e explicação de cada resposta.
- Botão para refazer o quiz.
- Três artigos publicados: placas tectônicas, camadas da Terra e terremotos.

## Observações

- Não há painel de administração: os artigos são adicionados editando `js/articles.js`. Isso mantém o projeto simples e gratuito para hospedar.
- A busca funciona no navegador, sobre os artigos incluídos no arquivo.
- Como o projeto não usa backend, não coleta nem salva as respostas do quiz.

## Ícone do site

O ícone (aba do navegador, celular, favoritos) é o globo da pasta `assets/`: `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png` e `icon-512.png`. Se trocar de novo e o navegador mostrar o antigo, aumente o `?v=2` nos links do `index.html` ou force a atualização com Ctrl+F5.
