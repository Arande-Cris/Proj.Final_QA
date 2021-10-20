
describe('API Correios', () => {

  it('Buscar por um CEP Válido', () => {
      cy.request({

      method: 'GET',

      url: 'https://api.postmon.com.br/v1/cep/08235770'

      }).then((response) => {
         cy.log(JSON.stringify(response.body));

         expect(response).to.have.property("status", 200)

         expect(response.body).to.have.property("bairro", "Parque Guarani")

         expect(response.body).to.have.property("logradouro", "Avenida Coronel Alves e Rocha Filho")

         expect(response.body).to.have.property("estado", "SP")

        })

    })

})