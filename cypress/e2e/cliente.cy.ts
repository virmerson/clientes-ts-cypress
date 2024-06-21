
/// <reference types="cypress" /> 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it("Deve cadastro de cliente", () => {
    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Novo Cliente")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('li').contains("Novo Cliente")

  })

  it("Deve ter mensagem do campo vazio deve existir", () => {

    cy.visit("http://localhost:5173")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.contains("Nome do cliente é obrigatório")
  })

  it("Deve existir clientes na lista", () => {
    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Cliente 1")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('#inputNome').type("Cliente 2")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('li').contains("Cliente 1")
    cy.get('li').contains("Cliente 2")

  })

  it("Deve editar um cliente", () => {
    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Cliente a atualizar")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('#listaClientes > :nth-child(1) > :nth-child(2)').click()
    cy.get('#inputNome').clear().type("Cliente atualizado")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('li').contains("Cliente atualizado")


  })

  it("Deve receber mensagem de campo obrigatório ao atualizar", () => {

    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Cliente a atualizar")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('#listaClientes > :nth-child(1) > :nth-child(2)').click()
    cy.get('#inputNome').clear()
    cy.get('#formCliente > :nth-child(3)').click()
    cy.contains("Nome do cliente é obrigatório")

  })

  it("Deve excluir um cliente", () => {
    cy.visit("http://localhost:5173")
    cy.get('#inputNome').type("Cliente a ser excluído")
    cy.get('#formCliente > :nth-child(3)').click()
    cy.get('li').contains("Cliente a ser excluído")
    cy.get('#listaClientes > :nth-child(1) > :nth-child(1)').click()
    cy.on('window:confirm', () => true)
    cy.contains("Cliente a ser excluído").should("not.exist")




  })

})  
