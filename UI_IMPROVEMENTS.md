# Relatório de Diagnóstico UI/UX - Gomes & Pimentel Advogados

Este documento lista os pontos de melhoria identificados com base no padrão **AG5_PADRAO_UI_UX**, classificados por criticidade.

## Pendências de Performance e SEO

- **[CRÍTICO] Cumulative Layout Shift (CLS):** Tags `<img>` sem atributos `width` e `height` (Logo, Imagens da Hero, Seção Sobre). Isso causa "pulos" no layout durante o carregamento.
- **[CRÍTICO] Largest Contentful Paint (LCP):** A imagem principal da Hero não está sendo pré-carregada (`preload`), o que atrasa a percepção de carregamento rápido.
- **[CRÍTICO] Metadados Social (OG Tags):** Ausência de `og:image` premium e descrições persuasivas para compartilhamento em redes sociais/WhatsApp.
- **[CRÍTICO] Favicon:** O site não possui um favicon definido, o que prejudica o branding na aba do navegador.
- **[SUGESTÃO] Desbloqueio de Renderização:** Implementar carregamento assíncrono para o CSS e fontes para melhorar o First Contentful Paint (FCP).

## Refinamentos de UX e Interatividade

- **[CRÍTICO] Smart Header:** O menu superior é fixo mas não se esconde ao rolar para baixo, ocupando espaço útil da tela (especialmente no mobile).
- **[SUGESTÃO] Rolagem Âncora (Offset):** Embora a rolagem seja suave, falta o `scroll-margin-top` para evitar que o header "atropele" o início da seção após o clique no menu.
- **[SUGESTÃO] Espaçamento Fluido:** Uso de valores fixos em margens e paddings. Recomenda-se o uso de `clamp()` para maior harmonia em diferentes tamanhos de tela.
- **[SUGESTÃO] Emojis:** Identificado uso de emoji (🌻) em depoimentos. O padrão recomenda substituição por iconografia SVG limpa.
- **[SUGESTÃO] Contrastes (WhatsApp):** O botão de WhatsApp utiliza branco sobre verde, o que é padrão, mas deve-se garantir que tons claros sobre dourado/amarelo sigam o contraste WCAG AA.

## Arquitetura e Navegação

- **[SUGESTÃO] Simetria de Páginas:** Garantir que `campo-grande.html` e `km32.html` carreguem exatamente o mesmo Header e Footer refinados, com links de âncora corrigidos para a Home (ex: `index.html#sobre`).

---
**Status da Implementação:** ✅ Refinamentos concluídos seguindo o padrão AG5.
