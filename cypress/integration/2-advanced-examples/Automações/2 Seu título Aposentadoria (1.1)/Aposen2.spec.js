/// <reference types="cypress" />
const el = require("../2 Seu título Aposentadoria (1.1)/Elements2").TESOURO
import acessar from "../2 Seu título Aposentadoria (1.1)/Index2"

describe('Sem prazo', () =>{
    
    beforeEach(() => {
        acessar.visitarpagina()
        
    })
             
    it('Pesquisar',() =>{
     acessar.aposentadoriasemprazo()
   
    })
       
   
})
//BOTÃO "NÃO SEI" COM PROBLEMA, NÃO DEVERÁ PROSSEGUIR COM A AÇÃO