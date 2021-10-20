/// <reference types="cypress" />
import acessar from "../5 Título Reserva de Emergência/index(5)"
const el = require ("../5 Título Reserva de Emergência/Elements(5)").Tesouro

describe('Título Reserva de Emergência', () =>{
              
    it('Acessar Pagina',() =>{
     acessar.visitarpagina()

    })
   
    it('Descubra Seu Perfil: Reserva de Emergência',() =>{
        acessar.EntrarMenuDescubra()
   
    })  


   it('Simular Selic 2027',() =>{
        acessar.simulacaoSelic2027()
   
    }) 
       
   
})

//RETORNAR OPÇÃO SELIC 2027 E ENVIAR E-MAIL.

