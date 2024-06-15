const { promisify } = require("cypress/types/bluebird");
// Descreve o conjunto de testes "Buscar por voos"
describe('Buscar por voos', () => {// Ínicio describe 
    // Define o contexto "Não logado"
    context('Não logado', () => { // Ínicio context 
        // Antes de cada teste, visita a página inicial do site
        beforeEach(() => {
            cy.visit('/') // Abre o navegador na página da urlBase 
        }) // Final do before 

        // Teste para buscar voos entre São Paulo e Cairo
        it('Buscar voos entre São Paulo e Cairo', () => {
            // Verifica se o título da página é 'BlazeDemo'
            cy.title()
            .should('eq', 'BlazeDemo')

            // Seleciona o combo Origem pelo cssSelector 
            // Identicando que deve ser o primeiro (0)
            // Selecionando a opção 'São Paolo'  
            cy.get('select.form-inline')
            .eq(0)
            .select('São Paolo')

            // Seleciona 'Cairo' no campo de destino
            cy.get('select.form-inline')
            .eq(1)
            .select('Cairo')

            // Clica no botão de busca de voos
            cy.get('.btn.btn-primary')
            .click()

            // Verifica se o título da página mudou para 'BlazeDemo - reserve'
            cy.title()
            .should('eq', 'BlazeDemo - reserve')

            // Verifica se o cabeçalho da página indica o destino dos voos
            cy.get('.container h3')
            .should('have.text', 'Flights from São Paolo to Cairo: ')
        })
    })
}) // final context 
