# Personal Rondinelli — Consultoria Online

Site de apresentação e conversão para a consultoria online do Personal Trainer **Rondinelli Albuquerque** (CREF: 039067-G/PR), especializado em emagrecimento e hipertrofia.

---

## Tema

Landing page profissional para um personal trainer, com foco em apresentar os planos de consultoria online, exibir resultados de alunos, responder dúvidas frequentes e facilitar o contato via WhatsApp e Instagram.

---

## Tecnologias Utilizadas

- **HTML5** — estrutura semântica com tags `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS3** — estilização com variáveis CSS, Flexbox, Grid, Media Queries e animações
- **JavaScript (ES6+)** — interatividade sem frameworks
- **Font Awesome 6** — ícones via CDN
- **Google Fonts** — tipografia Montserrat

---

## Funcionalidades Interativas (JavaScript)

1. **Validação de formulário de contato**
   - Verifica nome, e-mail e mensagem antes do envio
   - Exibe mensagens de erro acessíveis via `role="alert"`
   - Exibe confirmação de envio com auto-ocultamento

2. **Navbar com link ativo dinâmico**
   - Usa `IntersectionObserver` para detectar qual seção está visível
   - Destaca automaticamente o link correspondente na navegação

3. **FAQ Accordion animado**
   - Substituição do `<details>` nativo por accordion controlado via JS
   - Animação suave de abertura/fechamento com `max-height`
   - Atributos `aria-expanded` atualizados dinamicamente

4. **Botão "Voltar ao topo"**
   - Aparece após 400px de scroll
   - Rolagem suave até o início da página

5. **Scroll Reveal**
   - Cards e imagens entram com animação fade + slide ao aparecer na tela
   - Implementado com `IntersectionObserver`

---

## Estrutura de Arquivos

```
/
├── index.html      # Estrutura principal da página
├── style.css       # Estilos, layout responsivo e animações
├── script.js       # Funcionalidades JavaScript
├── logo-rondi.png  # Logotipo do personal trainer
├── maria.jpeg      # Foto de resultado — aluna Maria
├── Vanessa.jpeg    # Foto de resultado — aluna Vanessa
├── Naty.jpeg       # Foto de resultado — aluna Naty
└── README.md       # Este arquivo
```

---

## Responsividade

O layout adapta-se a três breakpoints:

| Breakpoint     | Ajustes principais                                      |
|----------------|---------------------------------------------------------|
| Desktop ≥1200px | Grid de 3–4 colunas, tamanhos maiores                  |
| Tablet ≤768px  | Planos em coluna única, steps em 2 colunas              |
| Mobile ≤480px  | Navbar com scroll horizontal, tudo em coluna única      |

---

## Acessibilidade (WCAG)

- **Skip link** ("Pular para o conteúdo") visível ao focar via teclado (WCAG 2.4.1)
- `alt` descritivo em todas as imagens
- `aria-label` nos botões, links e seções
- `aria-expanded` no accordion do FAQ
- `role="alert"` nas mensagens de erro/sucesso
- Foco visível em todos os elementos interativos (`:focus-visible`)
- Ícones decorativos marcados com `aria-hidden="true"`
- Estrutura semântica com landmarks (`<nav>`, `<main>`, `<footer>`)
- `rel="noopener noreferrer"` em links externos

---

## Como Executar

1. Faça o clone ou download do repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Não requer servidor ou dependências locais

---

## Autores

Trabalho Prático 1 — Programação Front-End  
Curso: Análise e Desenvolvimento de Sistemas  
Professor: José Carlos Domingues Flores
