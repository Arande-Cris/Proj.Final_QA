/// <reference types="cypress" />
const el = require("../1 Seu Título Aposentadoria/Elements1").TESOURO
import acessar from "../1 Seu Título Aposentadoria/Index1"


describe('Com prazo', () =>{
   
   beforeEach(() => {
    acessar.visitarpagina()
    
   })

             
 it('Pesquisar',() =>{
    acessar.aposentadoriacomprazo()
   
   })
       
   
})