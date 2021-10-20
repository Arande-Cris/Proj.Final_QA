const el = require("../4 Seu Título Carro Novo/Elements(4)").TESOURO

class acessar{
   
    
    visitarpagina(){
     Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false})
              
     cy.visit(el.SITE);
     cy.get(el.COOKIE).click();
    }


    EntrarMenuDescubra(){
       cy.get(el.MENU).click({force: true})
       cy.get(el.SIMULADOR).click({force: true})
       cy.get(el.DESCUBRA).click({force: true})
       cy.get(el.COMEÇAR).click()
       cy.get(el.OBJETIVO).click()
       cy.get(el.PRAZO).click({force: true})
       cy.get(el.RETORNO).click()
       cy.get(el.RESULTADO).click({force: true})

    }

    SimulandoPrefixado2026(){
     cy.get(el.SIMULANDO).click()
     cy.get(el.QTOINVESTIRHJ).click()
     cy.get(el.RESGATAR).type(el.VALOR1)
     cy.get(el.CONFIRMAR1).click()
     cy.get(el.FORMAAOPRTE).click()
     cy.get(el.APORTE).type(el.VALOR2)
     cy.get(el.CONFIRMAR2).click()
     cy.get(el.ENVIAREMAIL).click()
     cy.get(el.DIGITAREMAIL).type(el.EMAIL)
     cy.get(el.ENVIAR).click()

    }
}
export default new acessar