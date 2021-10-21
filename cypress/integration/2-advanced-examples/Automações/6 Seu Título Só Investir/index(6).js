const el = require ("../6 Seu Título Só Investir/Elements(6)").TESOURO

class acessar{

 visitarpagina(){
   Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false})
       
    cy.visit(el.SITE);
    cy.get(el.COOKIE).click()
  }

 entrarmenudescubra(){
   cy.get(el.OPÇÕES).click()
   cy.get(el.SIMULADOR).click()
   cy.get(el.DESCUBRA).click()
   cy.get(el.COMEÇAR).click({force: true})
   cy.get(el.OBJETIVO).click({force: true})
   cy.get(el.PRAZO).click({force: true})
   cy.get(el.RETORNO).click()
   cy.get(el.RESULTADO).click({force: true})
  }

 simularselic2024(){
   cy.get(el.SUGESTAO).should('have.text', 'Tesouro Selic \n\t\t\t\n\t\t\t2024\n\t\t')
   cy.get(el.SIMULANDO).click()
   cy.get(el.QTOINVESTIR).click()
   cy.get(el.APORTE).type(el.VALOR1)
   cy.get(el.CONFIRMAR1).click()
   cy.get(el.APORTEMES).type(el.VALOR2)
   cy.get(el.CONFIRMAR2).click()
   cy.get(el.ENVIAREMAIL).click()
   cy.get(el.DIGITAREMAIL).type(el.EMAIL)
   cy.get(el.ENVIAR).click()
   cy.get(el.CONFIRMDEENVIO).should('have.text', 'Enviar por E-mail')
   cy.get(el.CONFIRMDEENVIO2).should('have.text', '\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tE-mail enviado\n\t\t\t\t\t\t\t\t\t')
   
 }

 simularselic2024resgatar(){
   cy.get(el.SUGESTAO).should('have.text', 'Tesouro Selic \n\t\t\t\n\t\t\t2024\n\t\t')
   cy.get(el.SIMULANDO).click()
   cy.get(el.QTORESGATAR).click()
   cy.get(el.APORTEUNICO).type(el.VALOR3)
   cy.get(el.CONFIRMAR3).click()
   cy.get(el.RESGATEMES).click()
   cy.get(el.APORTEMESRESGATE).type(el.VALOR4)
   cy.get(el.CONFIRMAR4).click()
   cy.get(el.ENVIAREMAIL).click()
   cy.get(el.DIGITAREMAIL).type(el.EMAIL)
   cy.get(el.ENVIAR).click()
   cy.get(el.CONFIRMDEENVIO).should('have.text', 'Enviar por E-mail')
   cy.get(el.CONFIRMDEENVIO2).should('have.text', '\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tE-mail enviado\n\t\t\t\t\t\t\t\t\t')
 }


    


}

export default new acessar

