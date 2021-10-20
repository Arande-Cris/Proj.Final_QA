const el = require ("../13 Noticias/Elements(noticias)").Tesouro

class acessar{
    visitarpagina(){
        cy.visit(el.SITE) 
        cy.get(el.COOKIE).click()

    }
    EntrarMenuNoticia(){
        cy.get(el.MENUNOTICIA).click({force: true})
        // cy.get(el.COOKIE2).click()

    }
    EntrarNoticia1(){
        cy.get('.td-noticias-section > :nth-child(2)').click()
    
    }
    EntrarNoticia2(){
        cy.get('.td-noticias-section > :nth-child(3)').click()

    }
    EntrarNoticia3(){
        cy.get('.td-noticias-section > :nth-child(4)').click()
    }
}

export default new acessar
