# Projeto de Estudo - Automação de Testes com Cypress

Este repositório contém um projeto de estudo utilizando o framework **Cypress** para automação de testes end-to-end. O objetivo é praticar a criação de testes automatizados em aplicações web, explorando os principais recursos do Cypress.

## 🧪 Funcionalidades Estudadas -- In Progress

- `cy.visit()` — acesso a URLs
- `cy.get()` — seleção de elementos por seletor CSS
- `cy.contains()` — busca de elementos por texto
- `cy.as()` — criação de aliases
- Organização e estrutura de testes

## 📁 Estrutura do Projeto -- In Progress

cypress/
├── e2e/
│ └── exemplo.cy.js
├── support/
cypress.config.js


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
