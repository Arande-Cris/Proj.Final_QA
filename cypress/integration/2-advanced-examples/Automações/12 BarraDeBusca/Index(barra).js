const el = require("../12 BarraDeBusca/Elements(barra)").Tesouro

class acessar{
visitarpagina(){
    cy.visit(el.SITE) 
    cy.get(el.COOKIE).click()

}

TestarNomeValido(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.NOMEVALIDO, '{enter}')
}

TestarCaracter(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.CARACTER)
    cy.get(el.LUPA).click()

}
TestarNumeros(){
    cy.get(el.MENU).click()
    cy.get(el.BARRA).type(el.NUMEROS)
    cy.get(el.LUPA).click()

}
}
export default new acessar