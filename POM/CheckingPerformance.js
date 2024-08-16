class performance{
    txtperformance = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2)";
    txtemployeename = "input[placeholder='Type for hints...']";
    selectJobtitle = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > i:nth-child(1)";


    setperformance(performance){
        cy.get(this.txtperformance).click();
    }
    setEmployeename(employeename){
        cy.get(this.txtemployeename).type('Cherly  Adams');
    }
    setjobtitle(jobtitle){
        cy.get(this.selectJobtitle).click().contains('IT Manager');
    }
}

export default performance;