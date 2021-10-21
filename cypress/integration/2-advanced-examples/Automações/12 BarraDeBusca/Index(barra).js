const el = require("../12 BarraDeBusca/Elements(barra)").Tesouro

class acessar{
   visitarpagina(){
      cy.visit(el.SITE) 
      cy.get(el.COOKIE).click()

    }

   TestarNomeValido(){
      cy.get(el.MENU).click()
      cy.get(el.BARRA).type(el.NOMEVALIDO, '{enter}')
      cy.get(el.RESULTADO).should('have.text', el.TEXTO1)
    }
 
   TestarCaracter(){
      cy.get(el.MENU).click()
      cy.get(el.BARRA).type(el.CARACTER)
      cy.get(el.LUPA).click()
      cy.get(el.ERRO).should('have.text',el.TEXTO2)

    }
  TestarNumeros(){
     cy.get(el.MENU).click()
     cy.get(el.BARRA).type(el.NUMEROS)
     cy.get(el.LUPA).click()
     cy.get(el.ERRO).should('have.text', el.TEXTO3)

    }

}
export default new acessar