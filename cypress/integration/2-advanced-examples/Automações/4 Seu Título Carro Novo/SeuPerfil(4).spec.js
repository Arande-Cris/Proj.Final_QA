/// <reference types="cypress" />
const el = require ("../4 Seu Título Carro Novo/Elements(4)").TESOURO
import acessar from "../4 Seu Título Carro Novo/index(4)"

describe('Títulos Para Carro Novo', () =>{
  beforeEach(() => {
    acessar.visitarpagina()

  })

  it('Simulação Tesouro Prefixado 2026', ()=>{
   acessar.entrarmenudescubra()
   acessar.simulandoprefixado2026()

  })
})

//RETORNAR TÍTULO TESOURO PREFIXADO 2026
//SIMULAR INVESTIMENTO TÍTULO TESOURO PREFIXADO 2026 E ENVIAR POR E-MAIL
