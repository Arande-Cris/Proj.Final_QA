/// <reference types="cypress" />

import acessar from "../1 Seu Título Aposentadoria/Index1"
const el = require("../1 Seu Título Aposentadoria/Elements1").TESOURO

describe('Com prazo', () =>{
    
             
    it('Acessar Pagina',() =>{
     acessar.visitarpagina()
   
    })
   
   it('Pesquisar',() =>{
     acessar.APOSENTADORIACOMPRAZO()
   
    })
       
   
})