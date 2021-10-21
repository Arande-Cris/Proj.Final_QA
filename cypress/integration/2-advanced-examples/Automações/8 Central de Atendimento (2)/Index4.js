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

    palavracomaspas(){
     cy.get(el.MENU).click()
     cy.get(el.TITULO).click({force: true})
     cy.get(el.FECHA).click({force: true})
     //  cy.get(el.COOKIE).click({force: true})
      cy.get(el.PESQUISAR).click({force: true})
     cy.get(el.PESQUISAR).type(el.ESCREVER)
     cy.get(el.RESULTADO).should('have.text', 'Sua pesquisa por "["lei]" não encontrou resultados')
     cy.get(el.NAOENCONTROU).should('have.text', 'Não encontrou a resposta que procurava?')
        
    }
   
   
}


export default new acessar