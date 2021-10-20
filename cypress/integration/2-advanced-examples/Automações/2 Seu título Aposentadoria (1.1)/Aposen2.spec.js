/// <reference types="cypress" />

import acessar from "../2 Seu título Aposentadoria (1.1)/Index2"
const el = require("../2 Seu título Aposentadoria (1.1)/Elements2").TESOURO

describe('Sem prazo', () =>{
    
             
    it('Acessar Pagina',() =>{
     acessar.visitarpagina()
   
    })
   
    it('Pesquisar',() =>{
     acessar.APOSENTADORIASEMPRAZO()
   
    })
       
   
})
//BOTÃO "NÃO SEI" COM PROBLEMA, NÃO DEVERÁ PROSSEGUIR COM A AÇÃO