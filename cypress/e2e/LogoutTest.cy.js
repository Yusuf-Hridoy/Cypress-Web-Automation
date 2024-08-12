import login from "../../POM/LoginPage";
import Logout from "../../POM/Logout";
//this one for to check logout

describe('My First Test', () => {
   
    it('TC1',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      const ln = new login();
      const ln1 = new Logout();
      ln.setusername("Admin");
      ln.setpassword("admin123");
      ln.clicksubmit();
      ln1.setlogoutbar();
      ln1.setlogoutbutton();
      


    })
})