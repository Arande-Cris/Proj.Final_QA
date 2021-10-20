const el = require("../10 Central de Atendimento (4)/Elements6").TESOURO

class acessar{

    visitarpagina(){
     Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
      return false})

     cy.visit(el.SITE)
     cy.get(el.COOKIE).click();

    }

    SEMASPAS(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.FECHA).click({force: true})
        cy.get(el.COOKIE).click({force: true})
        cy.get(el.PESQUISAR).click({force: true})
        cy.get(el.PESQUISAR).type(el.ESCREVER)
     }
   
   
}
 export default new acessar
 