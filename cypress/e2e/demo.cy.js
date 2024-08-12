describe("mouse operation", () =>{
  it('mousehover', () =>{
      cy.visit('https://www.automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
      
  })
})