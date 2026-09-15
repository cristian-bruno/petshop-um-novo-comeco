# Um Novo Começo Petshop — Fase 2

Sistema web de comércio de produtos e serviços de um petshop, desenvolvido como
Projeto da Disciplina — **Fase 2**.

- **Autor:** Bruno Cristian da Silva
- **Disciplina:** Fundamentos de Sistemas Web
- **Site publicado:** https://cristian-bruno.github.io/petshop-um-novo-comeco/
- **Repositório:** https://github.com/cristian-bruno/petshop-um-novo-comeco

## Escopo desta fase

Sobre a estrutura em HTML construída na Fase 1, foram adicionados **CSS**
(identidade visual, layout responsivo e estados de interação) e
**JavaScript** (menu mobile, destaque da página atual, botão "voltar ao
topo" e validação do formulário de contato). Sem frameworks ou bibliotecas
externas de JavaScript; a tipografia é importada do Google Fonts.

## Estrutura de arquivos

```
fase2/
├── index.html       Página inicial
├── produtos.html    Produtos das 3 categorias
├── servicos.html    Serviços de banho e tosa
├── contato.html     Canais de atendimento e formulário
├── ajuda.html       Arquivo de ajuda (funcionalidades do site)
├── README.md        Este arquivo
├── css/
│   └── style.css    Estilos, tokens de design e responsividade
├── js/
│   └── script.js    Interações e validação do formulário
└── img/             logo.jpeg, bola.png, coleira.jpg, escova.png,
                      racao-cao.jpg, racao-gato.jpg, shampoo.jpg, tapete.png
```

## Funcionalidades

### Cabeçalho (header)
Presente em todas as páginas, com logotipo, nome do petshop, slogan,
endereço, telefone e menu de navegação (`nav`) com links para todas as
páginas. Em telas estreitas (≤720px) o menu colapsa em um botão "☰ Menu"
controlado via JavaScript.

### Corpo (main)

**Produtos** — três categorias, conforme o enunciado, com foto, descrição e valor:

| Categoria | Produtos |
|---|---|
| Acessórios | Bola de Borracha, Coleira Ajustável com Guia, Escova de Cerdas |
| Rações (não perecíveis) | Ração Golden para Cães Adultos 15 kg, Ração Golden Gatos Castrados 1 kg |
| Higiene e Limpeza | Tapete Higiênico Descartável 30 un., Shampoo Neutro 500 ml |

**Serviços** — banho e tosa, cada um nas versões **com** e **sem tele-busca**,
com descrição, duração e valor, além do combo banho e tosa.

### Rodapé (footer)
Presente em todas as páginas, com menu de navegação, endereço, telefone e
informação de autoria.

## Recursos de CSS utilizados

- Variáveis CSS (custom properties) como tokens de design: cores, fontes,
  raio de borda, sombra e largura máxima do layout
- Importação de fontes do Google Fonts (`Baloo 2` para títulos, `Work Sans`
  para texto)
- Layout responsivo com Flexbox e Grid; seletor `:has()` para transformar
  seções com `article` em grid de cards
- Media query (`max-width: 720px`) adaptando menu e formulário ao mobile
- Estados de interação: `:hover`, `:focus-visible`, `transition` e link
  ativo (`.ativo`) destacado no menu
- Estilização de estados do formulário (campo inválido, mensagem de erro,
  mensagem de sucesso)
- Botão flutuante "voltar ao topo" com transição de opacidade

## Recursos de JavaScript utilizados

- `marcarLinkAtivo()` — identifica a página atual pela URL e destaca o
  link correspondente no menu (`aria-current="page"`)
- `montarMenuMobile()` — cria o botão de menu hambúrguer e alterna a
  exibição da navegação em telas pequenas
- `montarBotaoTopo()` — exibe um botão "voltar ao topo" após rolagem da
  página e rola suavemente até o topo ao ser clicado
- `validarFormularioContato()` — valida campos obrigatórios e formato de
  e-mail do formulário de contato, exibindo mensagens de erro ou de
  sucesso (sem back-end nesta fase — o envio usa `preventDefault()`)

## Recursos de HTML utilizados (Fase 1)

- Tags semânticas: `header`, `nav`, `main`, `section`, `article`, `address`, `footer`
- Títulos hierárquicos de `h1` a `h4`
- Listas ordenadas (`ol`) e não ordenadas (`ul`)
- Tabelas com `caption`, `thead`, `tbody`, `th` e `td`
- Imagens com atributo `alt` em todas as ocorrências
- Links internos (âncoras com `id`), links entre páginas e link `mailto:`
- Formulário com `fieldset`, `legend`, `label`, `input`, `select`, `textarea` e `button`

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Navegue pelo menu do cabeçalho.
