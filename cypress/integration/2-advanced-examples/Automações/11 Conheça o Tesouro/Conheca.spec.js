// <reference types="cypress" />
const el = require('../11 Conheça o Tesouro/Elements(conheca)').TESOURO
import acessar from '../11 Conheça o Tesouro/index(conheca)'
  

describe('Explorar Conheça', () =>{

      
  it('Conheça o Tesouro Direto ',() =>{
    acessar.conhecaTesouro() 
     

  })

 it('Conheça As Regras',() =>{
   acessar.conhecaRegras()
    
  })
   
 it('Conheça Bancos e Corretoras Habilitadas',() =>{
   acessar.conhecaBancos()
     
  })

 it('Conheça Institucional',() =>{
   acessar.conhecaInstitucional() 
      
  })
    
})