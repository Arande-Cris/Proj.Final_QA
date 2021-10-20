const el = require('../11 Conheça o Tesouro/Elements(conheca)').TESOURO
class acessar{

  visitarpagina(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()

    }

   conhecaTesouro(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()
     cy.get(el.MENU).click()
     cy.get(el.CONHECA).click()
     cy.get(el.TESOURODIRETO).click()  

    }

   conhecaRegras(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()
     cy.get(el.MENU).click()
     cy.get(el.CONHECA).click()
     cy.get(el.REGRAS).click()

    }

   conhecaBancos(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()
     cy.get(el.MENU).click()
     cy.get(el.CONHECA).click()
     cy.get(el.BANCOS).click() 
    //  cy.get(el.BARRAPESQUISA).scrollIntoView()
    //  cy.get(el.BARRAPESQUISA).type(el.TEXTO1)

    }

   conhecaInstitucional(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()
     cy.get(el.MENU).click()
     cy.get(el.CONHECA).click()
     cy.get(el.INSTITUCIONAL).click()
      
    }

}
export default new acessar
