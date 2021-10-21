/// <reference types="cypress" />
const el = require ("../5 Título Reserva de Emergência/Elements(5)").Tesouro
import acessar from "../5 Título Reserva de Emergência/index(5)"

describe('Título Reserva de Emergência', () =>{
   
   beforeEach(() => {
     acessar.visitarpagina()
      
    })

   it('Simular Selic 2027',() =>{
     acessar.entrarmenudescubra()
     acessar.simulacaoselic2027()
   
    }) 
       
   
})

//RETORNAR OPÇÃO SELIC 2027 E ENVIAR E-MAIL.

