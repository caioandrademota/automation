describe('Get Texts', () => {
    
    it('Text selection', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.top_header_left > p')//access a text without id
            .then((element) => {
                console.log(element.text())
            })
    });
});