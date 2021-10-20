/// <reference types="cypress" />
const el = require("../9 Central de Atendimento (3)/Elements5").TESOURO
import acessar from "../9 Central de Atendimento (3)/Index5"


describe('Palavra sem aspas', () =>{
    
             
  it('Acessar Pagina',() =>{
     acessar.visitarpagina()
   
    })
   
   it('Pesquisar',() =>{
     acessar.PALAVRASEMASPAS()
   
    })    
})

   
//DEVERÁ RETORNAR 12 RESULTADOS