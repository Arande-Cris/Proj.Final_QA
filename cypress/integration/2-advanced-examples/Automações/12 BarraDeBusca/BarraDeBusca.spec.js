/// <reference types="cypress" /> 
const el = require("../12 BarraDeBusca/Elements(barra)").Tesouroconst 
import acessar from "../12 BarraDeBusca/Index(barra)"

describe('Títulos Para Estudantes', () =>{
   it('Visitar o site',()=>{
     acessar.visitarpagina()

    })

   it('Testar barra de busca com nome válido',()=>{
      acessar.TestarNomeValido()
   
    })

  it('Testar Caracter',()=>{
     acessar.visitarpagina()
     acessar.TestarCaracter()

    })

  it('Testar Numero',()=>{
     acessar.visitarpagina()
     acessar.TestarNumeros()

    }) 
})

//RETORNAR NOMES VALIDOS
// RETORNAR  "NENHUM RESULTADO DE BUSCA ENCONTRADO PARA"
// RETORNAR  "NENHUM RESULTADO DE BUSCA ENCONTRADO PARA"

