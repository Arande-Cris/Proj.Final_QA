/// <reference types="cypress" />
const el = require ("../6 Seu Título Só Investir/Elements(6)").TESOURO
import acessar from "../6 Seu Título Só Investir/index(6)"



describe('Títulos Para Só investir', () =>{

    beforeEach(() => {
      acessar.visitarpagina()
      acessar.entrarmenudescubra()
    })

    it('Simulando Tesouro Selic 2024 Aporte Inicial + Mensal',() =>{
     acessar.simularselic2024()

    })

    it('Simulando Tesouro Selic 2024 Quanto resgatar',() =>{
      acessar.simularselic2024resgatar()

    })
    
})

// VISITAR PÁGINA
//RETORNAR EM TELA TESOURO SELIC 2024
//SIMULAR INVESTIMENTO NO TESOURO SELIC 2024 COM APORTE INICAL E MENSAIS SEM META DE RETORNO E ENVIAR E-MAIL
//SIMULAR INVESTIMENTO NO TESOURO SELIC 2024 COM APORTE INICAL E MENSAIS COM META DE RESGATE E ENVIAR E-MAIL