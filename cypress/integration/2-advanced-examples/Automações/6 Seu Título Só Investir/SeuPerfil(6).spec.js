/// <reference types="cypress" />

import acessar from "../6 Seu Título Só Investir/index(6)"
const el = require ("../6 Seu Título Só Investir/Elements(6)").TESOURO



describe('Títulos Para Só investir', () =>{

    it('Acessar Pagina',() =>{
        acessar.visitarpagina()

    })

    it('Descubra Seu Título: Só investir',() =>{
        acessar.visitarpagina()
        acessar.EntrarMenuDescubra()

    })

    it('Simulando Tesouro Selic 2024 Aporte Inicial + Mensal',() =>{
        acessar.visitarpagina()
        acessar.EntrarMenuDescubra()
        acessar.SimularSelic2024()

    })

    it('Simulando Tesouro Selic 2024 Quanto resgatar',() =>{
        acessar.visitarpagina()
        acessar.EntrarMenuDescubra()
        acessar.SimularSelic2024QTOResgatar()

    })
    
})

// VISITAR PÁGINA
//RETORNAR EM TELA TESOURO SELIC 2024
//SIMULAR INVESTIMENTO NO TESOURO SELIC 2024 COM APORTE INICAL E MENSAIS SEM META DE RETORNO E ENVIAR E-MAIL
//SIMULAR INVESTIMENTO NO TESOURO SELIC 2024 COM APORTE INICAL E MENSAIS COM META DE RESGATE E ENVIAR E-MAIL