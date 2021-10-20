const el = require("../2 Seu título Aposentadoria (1.1)/Elements2").TESOURO

class acessar{

    visitarpagina(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false})

    cy.visit(el.SITE)
    cy.get(el.COOKIE).click();

    }

    APOSENTADORIASEMPRAZO(){
        cy.get(el.MENU).click()
        cy.get(el.TITULO).click({force: true})
        cy.get(el.SUBTITULO).click({force: true})
        cy.get(el.COMECO).click()
        cy.get(el.OBJETIVO).click({force: true})
        cy.get(el.PRAZO).click({force: true})
        cy.get(el.COOKIE).click()
        }
   
       //RETORNAR EM TELA RESULTADOS
   
   
   }


export default new acessar