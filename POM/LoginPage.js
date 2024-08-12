class login
{
    txtusername= "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnsubmit = "button[type='submit']";
    verifymessage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    ErrorMessage = ".oxd-text.oxd-text--p.oxd-alert-content-text";




    setusername(username)
    {
        cy.get(this.txtusername).type(username)
    }
    setpassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }
    clicksubmit()
    {
        cy.get(this.btnsubmit).click()
    }

    VerifyLogin(){
        cy.get(this.verifymessage).should('have.text','Dashboard')
    }
    errormsg(){
        cy.get(this.ErrorMessage).should('have.text','Invalid credentials')
    }
}

export default login;