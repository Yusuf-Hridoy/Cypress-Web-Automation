class Logout{
    logoutbar = ".oxd-userdropdown-name";
    logoutbtn = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)";


    setlogoutbar(beforelogout)
    {
        cy.get(this.logoutbar).click();
    }
    setlogoutbutton(clicklogout)
    {
        cy.get(this.logoutbtn).click();
    }
}
export default Logout;
