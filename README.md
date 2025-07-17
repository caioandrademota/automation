# Projeto de Estudo - Automação de Testes com Cypress

Este repositório contém um projeto de estudo utilizando o framework **Cypress** para automação de testes end-to-end. O objetivo é praticar a criação de testes automatizados em aplicações web, explorando os principais recursos do Cypress.

## 🧪 Funcionalidades Estudadas

- `cy.visit()` — Navegação para uma URL
- `cy.get()` — Seleção de elementos com seletores CSS
- `cy.contains()` — Busca de elementos pelo conteúdo de texto
- `cy.type()` — Inserção de texto em inputs
- `cy.click()` — Simulação de clique
- `cy.dblclick()` — Simulação de clique duplo
- `cy.rightclick()` — Simulação de clique com o botão direito
- `cy.select()` — Seleção em elementos `<select>`
- `cy.check()` / `cy.uncheck()` — Marcar/desmarcar checkboxes ou radio buttons
- `cy.as()` — Criação de aliases (não usado ainda, mas útil para otimização)
- **Organização de testes**:
  - `describe()` — Agrupa os testes em uma suíte
  - `it()` — Define um caso de teste

## 🧾 Estrutura Recomendada

```bash
cypress/
├── e2e/
│   └── get_elements.cy.js
│   └── get_text.cy.js
│   └── interactions.cy.js
├── support/
│   └── commands.js
│   └── e2e.js
├── fixtures/
│   └── examples.json
├── cypress.config.js
├── package.json
```

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/caioandrademota/automation.git
cd automation

# Instale as dependências
npm install

# Abra o Cypress com interface
npx cypress open

# Ou execute os testes no modo headless
npx cypress run
