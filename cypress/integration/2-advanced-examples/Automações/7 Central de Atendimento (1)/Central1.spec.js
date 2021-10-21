/// <reference types="cypress" />
const el = require("../7 Central de Atendimento (1)/Elements3").TESOURO
import acessar from "../7 Central de Atendimento (1)/Index3"


describe('Pesquisar perguntas frequentes', () =>{
   
  beforeEach(() => {
    acessar.visitarpagina()

  })
             
  it('Pesquisar',() =>{
   acessar.buscarcaracter()
   
  })
       
})

//DEVERÁ RETORNAR "NÃO ENCONTROU RESULTADOS"