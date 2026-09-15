# Um Novo Começo Petshop — Fase 2

Sistema web de comércio de produtos e serviços de um petshop, desenvolvido como
Projeto da Disciplina — **Fase 2**.

- **Autor:** Bruno Cristian da Silva
- **Disciplina:** Fundamentos de Sistemas Web
- **Site publicado:** https://cristian-bruno.github.io/petshop-um-novo-comeco/
- **Repositório:** https://github.com/cristian-bruno/petshop-um-novo-comeco

## Escopo desta fase

Sobre a estrutura em HTML construída na Fase 1, foram adicionados **CSS**
(identidade visual, layout responsivo e estados de interação), **JavaScript**
(carrossel, menu mobile, indicador de loja aberta/fechada, destaque da página
atual, botão "voltar ao topo" e validação de formulários) e o **formulário de
cadastro do cliente e do pet com agendamento** de banho/tosa. Sem frameworks
ou bibliotecas externas de JavaScript; a tipografia é importada do Google
Fonts.

## Ajustes realizados nesta fase

- **Correção de carregamento de CSS/JS:** no início da fase, apenas
  `index.html` carregava `css/style.css` e `js/script.js`; as demais páginas
  ficavam sem estilo e sem as funções de JavaScript. O `<link>` de estilo e o
  `<script>` foram adicionados em `produtos.html`, `servicos.html`,
  `contato.html` e `ajuda.html`.
- **Carrossel de destaques:** adicionado na página inicial, com troca
  automática (a cada 6s), setas e indicadores clicáveis, e pausa automática
  quando o mouse ou o teclado estão sobre ele.
- **Formulário de cadastro do cliente e do pet + agendamento:** criado em
  `contato.html` (âncora `#agendamento`), reunindo dados do tutor (nome,
  endereço, CPF, sexo, telefone, e-mail), dados do pet (nome, raça, idade e
  autorização de uso de fotos), escolha do serviço (banho, tosa ou combo),
  forma de atendimento (tele-busca ou entrega no local) e data/horário do
  agendamento.
- **Indicador de loja aberta/fechada:** exibido em `index.html` e
  `contato.html`, calculado a partir da hora atual do visitante e da tabela
  de horários de atendimento.
- **Validação de formulários simplificada:** a validação passou a usar os
  recursos nativos do HTML5 (`required`, `type`, `pattern`, `min`) em vez de
  checagens manuais duplicadas, cobrindo automaticamente os dois formulários
  agora existentes em `contato.html`.
- **`servicos.html` atualizado:** a seção "Como agendar" agora leva
  diretamente ao formulário de cadastro e agendamento, em vez de pedir apenas
  uma ligação telefônica.
- **`ajuda.html` atualizado:** o conteúdo, que ainda descrevia o site como
  "fase 1, sem CSS/JS", foi revisado para refletir os recursos desta fase.
- **Acessibilidade mantida e reforçada:** todas as imagens continuam com
  `alt` descritivo; os controles do carrossel e o botão "voltar ao topo"
  ganharam `aria-label`; o indicador de status da loja usa `aria-live`; e
  todos os campos dos formulários estão associados aos seus rótulos via
  `id`/`for`.

## Estrutura de arquivos

```
fase2/
├── index.html       Página inicial (com carrossel de destaques)
├── produtos.html    Produtos das 3 categorias
├── servicos.html    Serviços de banho e tosa
├── contato.html     Canais de atendimento, formulário de cadastro/agendamento e contato geral
├── ajuda.html       Arquivo de ajuda (funcionalidades do site)
├── README.md        Este arquivo
├── css/
│   └── style.css    Estilos, tokens de design e responsividade
├── js/
│   └── script.js    Interações, carrossel e validação de formulários
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

**Cadastro e agendamento** — formulário completo em `contato.html`, com
dados do tutor e do pet, escolha do serviço, forma de atendimento e data/hora.

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
- Media query (`max-width: 720px`) adaptando menu, formulários e carrossel
  ao mobile
- Estados de interação: `:hover`, `:focus-visible`, `transition` e link
  ativo (`.ativo`) destacado no menu
- Estilos do carrossel (trilho deslizante, setas, indicadores) e do
  indicador de status da loja (aberto/fechado)
- Estilização de grupos de `radio`/`checkbox` (`accent-color`, layout em
  linha) e de campos de data/hora/número
- Botão flutuante "voltar ao topo" com transição de opacidade

## Recursos de JavaScript utilizados

- `marcarLinkAtivo()` — identifica a página atual pela URL e destaca o
  link correspondente no menu (`aria-current="page"`)
- `montarMenuMobile()` — cria o botão de menu hambúrguer e alterna a
  exibição da navegação em telas pequenas
- `montarBotaoTopo()` — exibe um botão "voltar ao topo" após rolagem da
  página e rola suavemente até o topo ao ser clicado
- `configurarEnvioFormularios()` — usa a validação nativa do HTML5
  (`checkValidity`/`reportValidity`) em todos os formulários da página e
  mostra uma mensagem de sucesso quando os dados estão válidos (sem
  back-end nesta fase — o envio usa `preventDefault()`)
- `definirDataMinimaAgendamento()` — função temporal que usa a data atual
  do navegador para impedir agendamentos em dias que já passaram
- `atualizarStatusLoja()` — outra função temporal, que compara a hora
  atual com a tabela de horários e indica se a loja está aberta ou fechada
- `iniciarCarrossel()` — controla a troca automática (temporizada) e
  manual dos slides de destaque na página inicial

## Recursos de HTML utilizados

- Tags semânticas: `header`, `nav`, `main`, `section`, `article`, `address`, `footer`, `figure`/`figcaption`
- Títulos hierárquicos de `h1` a `h4`
- Listas ordenadas (`ol`) e não ordenadas (`ul`)
- Tabelas com `caption`, `thead`, `tbody`, `th` e `td`
- Imagens com atributo `alt` em todas as ocorrências
- Links internos (âncoras com `id`), links entre páginas e link `mailto:`
- Formulários com `fieldset`, `legend`, `label`, `select`, `textarea` e `button`
- Campos e atributos variados: `text`, `email`, `tel`, `number`, `date`,
  `time`, `radio`, `checkbox`, `required`, `placeholder`, `pattern`, `min`/`max`

## Acessibilidade

- Todas as imagens possuem atributo `alt` descritivo (audiodescrição para leitores de tela)
- Controles do carrossel e botão "voltar ao topo" com `aria-label`
- Indicador de status da loja com `aria-live="polite"`, para avisar
  leitores de tela quando o texto muda
- Campos de formulário associados aos rótulos via `id`/`for`

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Navegue pelo menu do cabeçalho.
