# Portfólio — Jessica Silva

Portfólio pessoal em HTML, CSS e JavaScript puro (sem build, sem dependências).

## Estrutura

```
portfolio-jessica/
├── index.html        # conteúdo da página
├── css/
│   └── style.css     # estilos, cores e layout
├── js/
│   └── main.js       # terminal animado, cards e animações de rolagem
├── img/
│   ├── foto.jpg      # SUA FOTO (adicione este arquivo)
│   └── avatar.svg    # imagem reserva, usada se foto.jpg não existir
└── README.md
```

## Como rodar no VS Code

1. Abra a pasta `portfolio-jessica` no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

Também funciona abrindo o `index.html` direto no navegador.

## Personalização

- **Foto:** salve como `img/foto.jpg` (quadrada, de preferência 400x400 ou maior).
- **Links:** procure por `href="#"` no `index.html` e troque pelos links do GitHub, LinkedIn e do projeto online.
- **Cores:** edite as variáveis no começo de `css/style.css` (`--accent`, `--accent2`, `--ok`...).
- **Terminal:** o texto da animação fica na lista `lines` em `js/main.js`.
- **Novo projeto:** copie um bloco `<div class="card">` dentro de `#projetos`.

## Publicação gratuita

Envie a pasta para um repositório no GitHub e ative o **GitHub Pages**, ou importe o repositório na **Vercel**.
