const el = require('../14 Como Investir/elements(investir)').Elementos

class acessar {

    visitarpagina(){
     cy.visit(el.SITE)
     cy.get(el.COOKIE).click()

    }

    AcessoMenu(){
     cy.get(el.MENU).click()
     cy.get(el.INVEST).click()
     cy.get(el.INVEST2).click()   

    } 

    AcessoVideo(){
     cy.get(el.VIDEO).click({force:true})

    }

}

export default new acessar 

