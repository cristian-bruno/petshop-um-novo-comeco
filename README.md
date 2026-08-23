# Um Novo Começo Petshop — Fase 1

Sistema web de comércio de produtos e serviços de um petshop, desenvolvido como
Projeto da Disciplina — **Fase 1**.

- **Autor:** [SEU NOME COMPLETO]
- **Disciplina:** [NOME DA DISCIPLINA]
- **Site publicado:** [COLE AQUI O LINK DO GITHUB PAGES]
- **Repositório:** [COLE AQUI O LINK DO REPOSITÓRIO]

## Escopo desta fase

Construção das páginas **somente em HTML**, sem CSS, sem Bootstrap e sem
JavaScript. A customização visual e as funções em JavaScript serão feitas na
fase 2.

## Estrutura de arquivos

```
fase1/
├── index.html       Página inicial
├── produtos.html    Produtos das 3 categorias
├── servicos.html    Serviços de banho e tosa
├── contato.html     Canais de atendimento e formulário
├── ajuda.html       Arquivo de ajuda (funcionalidades do site)
├── README.md        Este arquivo
└── imagens: logo.jpeg, bola.jpg, coleira.jpeg, escova.jpg,
   racao-cao.png, racao-gato.jpg, tapete.jpg, shampoo.png
```

## Funcionalidades

### Cabeçalho (header)
Presente em todas as páginas, com logotipo, nome do petshop, slogan, endereço,
telefone e menu de navegação (`nav`) com links para todas as páginas.

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
Presente em todas as páginas, com menu de navegação, endereço, telefone, e-mail,
CNPJ, aviso legal e informação de autoria.

## Recursos de HTML utilizados

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

## Observações

- A imagem `tapete.jpg` é uma **ilustração provisória** — substitua por uma foto
  real do produto antes da entrega final.
- Valores e dados cadastrais (endereço, CNPJ, telefone) são fictícios, usados
  apenas para fins didáticos.
- Substitua todas as ocorrências de `[SEU NOME COMPLETO]` pelo seu nome nos
  arquivos HTML (aparece na tag `meta name="author"` e no rodapé).
