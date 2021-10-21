// <reference types="cypress" />
const el = require('../11 Conheça o Tesouro/Elements(conheca)').TESOURO
import acessar from '../11 Conheça o Tesouro/index(conheca)'
  

describe('Explorar Conheça', () =>{
  beforeEach(() => {
    acessar.visitarpagina()
    
  })
      
  it('Conheça o Tesouro Direto ',() =>{
    acessar.connhecatesouro() 
     

  })

 it('Conheça As Regras',() =>{
   acessar.conhecaregras()
    
  })
   
 it('Conheça Bancos e Corretoras Habilitadas',() =>{
   acessar.conhecabancos()
     
  })

 it('Conheça Institucional',() =>{
   acessar.conhecainstitucional() 
      
  })
    
})