const el= require("../5 Título Reserva de Emergência/Elements(5)").Tesouro
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
     cy.get(el.OPÇÕES).click();
     cy.get(el.SIMULADOR).click()
     cy.get(el.DESCUBRA).click()
     cy.get(el.COOKIE).click()
     cy.get(el.COMEÇAR).click()
     cy.get(el.OBJETIVO).click({force: true})
     cy.get(el.PRAZO).click({force: true})   
     cy.get(el.RETORNO).click({force: true})
     cy.get(el.RESULTADO).click()
   
    }


    simulacaoSelic2027(){
        cy.get(el.SIMULANDO).click()
        cy.get(el.ENTRADA).click()
        cy.get(el.VALORINICIAL).type(el.VALOR1)
        cy.get(el.CONFIRMAR).click()
        cy.get(el.VALORMES).type(el.VALOR2)
        cy.get(el.CONFIRMAR2).click()
        cy.get(el.ENVIAREMAIL).click()
        cy.get(el.DIGITAREMAIL).type(el.EMAIL)
        cy.get(el.ENVIAR).click()

    }
}
export default new acessar