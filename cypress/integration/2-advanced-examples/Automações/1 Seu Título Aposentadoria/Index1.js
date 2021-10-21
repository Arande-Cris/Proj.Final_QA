const el = require("../1 Seu Título Aposentadoria/Elements1").TESOURO

class acessar{

 visitarpagina(){
   Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false})

   cy.visit(el.SITE)
    cy.get(el.COOKIE).click();

  }

 aposentadoriacomprazo(){
   cy.get(el.MENU).click()
   cy.get(el.TITULO).click({force: true})
   cy.get(el.SUBTITULO).click({force: true})
   cy.get(el.COMECO).click({force: true})
   cy.get(el.OBJETIVO).click({force: true})        
   cy.get(el.PRAZO).click({force: true})
   cy.get(el.RETORNO).click({force: true})
   cy.get(el.RESULTADO).click({force: true})
   cy.get(el.SUGESTAO).should('have.text', 'Tesouro Prefixado \n\t\t\t\n\t\t\t2026\n\t\t')
    
  }   
      
}


export default new acessar