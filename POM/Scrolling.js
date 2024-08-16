class scroll{

   clickpim(pim){
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
   }
   Scrolling(scroll){
    cy.get(".oxd-icon.bi-chevron-right").scrollIntoView();
   }
}

export default scroll;