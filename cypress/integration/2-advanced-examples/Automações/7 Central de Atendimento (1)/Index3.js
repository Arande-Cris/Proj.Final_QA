const el = require("../7 Central de Atendimento (1)/Elements3").TESOURO

class acessar{

    visitarpagina(){
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
        return false})

     cy.visit(el.SITE)
     cy.get(el.COOKIE).click();

    }

   BUSCACOMCARACTER(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.COOKIE).click()
        cy.get(el.FECHA).click({force: true})
        cy.get(el.PESQUISAR).click({force: true})
        cy.get(el.PESQUISAR).type(el.ESCREVER, "{enter}")
        
    }
   
}


export default new acessar
