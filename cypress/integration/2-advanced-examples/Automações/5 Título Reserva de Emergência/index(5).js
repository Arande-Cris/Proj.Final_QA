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
   
    entrarmenudescubra(){
     cy.get(el.OPÇÕES).click();
     cy.get(el.SIMULADOR).click();
     cy.get(el.DESCUBRA).click();
     cy.get(el.COOKIE).click({force: true});
     cy.get(el.COMECAR).click({force: true});
     cy.get(el.OBJETIVO).click({force: true});
     cy.get(el.PRAZO).click({force: true});   
     cy.get(el.RETORNO).click({force: true});
     cy.get(el.RESULTADO).click();
   
    }


    simulacaoselic2027(){
        cy.get(el.SUGESTAO).should('have.text', 'Tesouro Prefixado \n\t\t\t\n\t\t\t2026\n\t\t');
        cy.get(el.SIMULANDO).click();
        cy.get(el.ENTRADA).click();
        cy.get(el.VALORINICIAL).type(el.VALOR1);
        cy.get(el.CONFIRMAR).click();
        cy.get(el.VALORMES).type(el.VALOR2);
        cy.get(el.CONFIRMAR2).click();
        cy.get(el.ENVIAREMAIL).click();
        cy.get(el.DIGITAREMAIL).type(el.EMAIL);
        cy.get(el.ENVIAR).click();
        cy.get(el.CONFIRMDEENVIO).should('have.text', 'Enviar por E-mail');
        cy.get(el.CONFIRMDEENVIO2).should('have.text', '\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tE-mail enviado\n\t\t\t\t\t\t\t\t\t');

    }
}
export default new acessar