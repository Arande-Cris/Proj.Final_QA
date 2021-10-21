const el = require ("../14 Como Investir/elements(investir)").Elementos
import acessar from "../14 Como Investir/index(Investir)"

describe('Acessar Vídeo', () =>{
   
  beforeEach(() => {
   acessar.visitarpagina()
   acessar.AcessoMenu()
  })

 it('Acessar Vídeo',() => {
   acessar.AcessoVideo()
  })

}) 










