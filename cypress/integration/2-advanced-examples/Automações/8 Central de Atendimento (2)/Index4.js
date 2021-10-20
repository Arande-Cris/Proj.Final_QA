const el = require("../8 Central de Atendimento (2)/Elements4").TESOURO

class acessar{

    visitarpagina(){
     Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
      // failing the test
       return false})

     cy.visit(el.SITE)
     cy.get(el.COOKIE).click();

    }

    PALAVRACOMASPAS(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.FECHA).click({force: true})
        cy.get(el.COOKIE).click({force: true})
        cy.get(el.PESQUISAR).click({force: true})
        cy.get(el.PESQUISAR).type(el.ESCREVER)
        
    }
   

   
}


export default new acessar