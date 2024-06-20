
/// <reference types="cypress" /> 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it("cadastro de cliente", () => {
    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Novo Cliente")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('li').contains("Novo Cliente")

  })
})
