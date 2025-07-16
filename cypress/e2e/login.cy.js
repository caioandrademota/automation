//2 parametros (funcionalidade)
describe('Login', () => {

    //caso de teste
    it('Successful Login', () =>{
        //comando para acesso de URL, relacionado a baseURL
        //get
        cy.visit('/')
            .get('.header-logo') //element selection method

        //contains
        cy.get('#top_header').as('header')// as() sets here
            .contains('Login') //find elements by text, after using get to a smaller search area

        //find
        cy.get('#top_header')
            .find('.fa-user') //find elements - more general

        //as
        cy.get('@header') //use with @
            .find('.fa-user') //it provides a easier way invoke your elements
    })

    // //caso de teste
    // it('E-mail invalido', () =>{
        
    // })

    // //caso de teste
    // it('Senha Invalida', () =>{
        
    // })



})