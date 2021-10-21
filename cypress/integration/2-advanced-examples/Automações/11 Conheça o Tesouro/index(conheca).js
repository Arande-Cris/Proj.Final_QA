const el = require('../11 Conheça o Tesouro/Elements(conheca)').TESOURO
class acessar{

 visitarpagina(){
   Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false})

   cy.visit(el.SITE)
   cy.get(el.COOKIE).click()
 
  }

 connhecatesouro(){
   cy.get(el.MENU).click()
   cy.get(el.CONHECA).click()
   cy.get(el.TESOURODIRETO).click()  
   cy.get(el.FECHAR).click({force: true})
   cy.get(el.TITULO).should('have.text','O QUE É?')

  }

 conhecaregras(){
   cy.get(el.MENU).click()
   cy.get(el.CONHECA).click()
   cy.get(el.REGRAS).click()
   cy.get(el.TITULO2).should('have.text','Regras')

  }

 conhecabancos(){
   cy.get(el.MENU).click()
   cy.get(el.CONHECA).click()
   cy.get(el.BANCOS).click() 
   cy.get(el.TITULO3).should('have.text','O que são?')
   //  cy.get('.td-corretoras-search').scrollIntoView()
   //  cy.get(el.BARRAPESQUISA).click()
   //  cy.get(el.BARRAPESQUISA).type(el.TEXTO1)

  }

  conhecainstitucional(){
   cy.get(el.MENU).click()
   cy.get(el.CONHECA).click()
   cy.get(el.INSTITUCIONAL).click()
   cy.get(el.TITULO4).should('have.text','Objetivos do Tesouro Direto')
   cy.get(el.TITULO5).should('have.text','\n                            Nossa historia\n                        ')
      
  }

}
export default new acessar
