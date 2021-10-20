/// <reference types="cypress" />
const el = require("../10 Central de Atendimento (4)/Elements6").TESOURO
import acessar from "../10 Central de Atendimento (4)/Index6"


describe('Palavra sem aspas', () =>{
    
             
    it('Acessar Pagina',() =>{
     acessar.visitarpagina()
   
    })
   
  it('Pesquisar',() =>{
     acessar.SEMASPAS()
   
    })
       
   
})