/// <reference types="cypress" /> 
const el = require("../12 BarraDeBusca/Elements(barra)").Tesouroconst 
import acessar from "../12 BarraDeBusca/Index(barra)"

describe('Testar Barra de Busca', () =>{

  beforeEach(() => {
    acessar.visitarpagina()
    
  })
 
 
 it('Testar nome válido',()=>{
   acessar.TestarNomeValido()
   
  })

  it('Testar Caracter',()=>{
   acessar.TestarCaracter()

  })

  it('Testar Numero',()=>{
   acessar.TestarNumeros()

  }) 

})

//RETORNAR NOMES VALIDOS
// RETORNAR  "NENHUM RESULTADO DE BUSCA ENCONTRADO PARA"
// RETORNAR  "NENHUM RESULTADO DE BUSCA ENCONTRADO PARA"

