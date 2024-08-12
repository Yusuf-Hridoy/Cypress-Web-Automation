import login from "../../POM/LoginPage";
// this one is for to check login page

describe('My First Test', () => {
   
    it('Login with right credintial',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      const ln = new login();
      ln.setusername("Admin");
      ln.setpassword("admin123");
      ln.clicksubmit();
      ln.VerifyLogin();


    })
    it.only('Login with wrong password',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new login();
        ln.setusername("Admin");
        ln.setpassword("admin12");
        ln.clicksubmit();
        ln.errormsg();
  
  
      })
      it.only('Login with wrong user name',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new login();
        ln.setusername("Admi");
        ln.setpassword("admin123");
        ln.clicksubmit();
        ln.errormsg();
  
  
      })
})