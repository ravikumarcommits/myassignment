///<reference types="cypress"/>

describe ('My Test suite',() =>{


    //Test to verify that search works after entering the search criteria and clicking on the search icon
    //Assertion is to check whether "results for" is present on the landing page after searching for desrired item
       it('first test',() => {
        
            cy.visit ('/')
    
            cy.get('#twotabsearchtextbox').type('atta 10lb$$')
            cy.get('#nav-search-submit-button').click()
            //cy.get('[class ="sg-col-inner"]')
            //cy.contains('results for')
            cy.get('[class ="sg-col-inner"]').should('contain','results for')
        })
    
    //Test to verify that sorting option is present on the search result page
    //Assertion checks if the sort by dropdown exist on the landing page after searching the desired item
        it('Second test',() => {
        
            cy.visit ('/')
    
            cy.get('#twotabsearchtextbox').type('atta 10lb$$')
            cy.get('#nav-search-submit-button').click()
            cy.wait(1000)
            cy.get('#a-autoid-0-announce').should('be.visible');
    
            cy.get('#a-autoid-0-announce').click()
            cy.wait(1000)
            cy.get('#s-result-sort-select_1').click()
    
    
        })
    
    
    })