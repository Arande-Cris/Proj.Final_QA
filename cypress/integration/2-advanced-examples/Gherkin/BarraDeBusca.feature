Funcionalidade: Barra de busca
 A fim de pesquisar os tipos de investimentos no site Tesouro Direto,
 Como um usuario visitante
 Eu quero digitar o tipos de investimentos na área de busca da página
 De modo que o sistema me retorne com o investimento buscado

 Cenario: Testar barra de busca com nome válido
  Dado que o usuário está buscando tipos de investimentos
   Quando digitar nome válido na área de busca
   Entao a barra de busca traz o resultado pesquisado

Cenario: Testar barra de busca com caracteres especiais
 Dado que o usuário está buscando tipos de investimentos
  Quando ele digitar caracteres especiais na barra de busca 
  Entao retorna com a mensagem: nenhum resultado encontrado para a busca

Cenario: Testar barra de busca com números
 Dado que o usuário está buscando tipos de investimentos  
  Quando ele digitar números na barra de busca
  Entao retorna com a mensagem: nenhum resultado encontrado para a busca

 


  
 