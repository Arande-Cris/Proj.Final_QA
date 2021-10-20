/// <reference types="cypress" />
const el = require("../7 Central de Atendimento (1)/Elements3").TESOURO
import acessar from "../7 Central de Atendimento (1)/Index3"


describe('Pesquisar perguntas frequentes', () =>{
    
             
  it('Acessar Pagina',() =>{
   acessar.visitarpagina()
   
  })
   
  it('Pesquisar',() =>{
   acessar.BUSCACOMCARACTER()
   
  })
       
})

//DEVERÁ RETORNAR "NÃO ENCONTROU RESULTADOS"