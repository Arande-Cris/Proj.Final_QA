/// <reference types="cypress" />
const el = require ("../3 Seu Título Estudante/Elements(3)").TESOURO
import acessar from "../3 Seu Título Estudante/Index(3)"



describe('Títulos Para Estudantes', () =>{
 
  beforeEach(() => {
    acessar.visitarpagina()
    acessar.entrarmenudescubra()
  })

 it('Simulação Tesouro IPCA+ 2026', ()=>{
    acessar.simulandoprefixado2026()

  })

 it('Análise de Valor limite', ()=>{
   acessar.simulandovalorlimite()

  })
  
})



// RETORNAR TÍTULO TESOURO IPCA+ 2026
// SIMULAR INVESTIMENTO TÍTULO TESOURO IPCA+ 2026 E ENVIAR POR E-MAIL
