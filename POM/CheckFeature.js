// this page locator are for that are clickable and  redirect to the expected page
class FeatureCheck{

    tadmin = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)";
    tpim = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)";
    tleave = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)";
    ttime = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)";
    trequirment = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)";

    setAdmin(admin){
        cy.get(this.tadmin).click()
    }
    setpim(pim){
        cy.get(this.tpim).click()
    }
    setLeave(leave){
        cy.get(this.tleave).click()
    }
    settime(time){
        cy.get(this.ttime).click()
    }
    setrequirment(requirment){
        cy.get(this.trequirment).click()
    }
}
export default FeatureCheck;