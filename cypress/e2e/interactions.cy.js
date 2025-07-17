///<reference types='cypress' />

describe('Interactions', () => {
    
    it('Typing', () => {
        cy.visit('/')
            .get('.form-control')//select input via class
            .type('testedasilva@gmail.com{enter}')//content to be written && using enter instead of clicking
    });

    it('Clicking', () => {
        cy.visit('/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click() //left button click
        //cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').dblclick() -- double click
        //cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').rightclick() -- right click
        //cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click(234,325 {force:true}) -- using coordinates
            .get('#user')
            .type('testedasilva@gmail.com')//content to be written
            .get('#password')
            .type('2346kjhgswkudf')
            .get('#btnLogin').click()
            .get('.swal2-confirm').click()
    });
    
});  