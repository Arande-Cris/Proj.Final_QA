/// <reference types="cypress" />
import acessar from "../3 Seu Título Estudante/Index(3)"
const el = require ("../3 Seu Título Estudante/Elements(3)").TESOURO


describe('Títulos Para Estudantes', () =>{
     
 it('Visitar Página', ()=>{
   acessar.visitarpagina()
   
  })

 it('Descubra seu Título: Estudos', ()=>{
   acessar.visitarpagina()
   acessar.EntrarMenuDescubra()
   
  })

 it('Simulação Tesouro IPCA+ 2026', ()=>{
   acessar.visitarpagina()
   acessar.EntrarMenuDescubra()
   acessar.SimulandoPrefixado2026()

  })

 it('Análise de Valor limite', ()=>{
   acessar.visitarpagina()
   acessar.EntrarMenuDescubra()
    acessar.SimulandoValorLimite()

  })
  
})



// RETORNAR TÍTULO TESOURO IPCA+ 2026
// SIMULAR INVESTIMENTO TÍTULO TESOURO IPCA+ 2026 E ENVIAR POR E-MAIL
