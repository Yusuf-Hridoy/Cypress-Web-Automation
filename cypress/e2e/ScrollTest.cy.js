import login from "../../POM/LoginPage";
import scroll from "../../POM/Scrolling";

describe('scroll test ', () => {
   
    it.only('Login with right credintial',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      const ln = new login();
      const lnn = new scroll();
      ln.setusername("Admin");
      ln.setpassword("admin123");
      ln.clicksubmit();
      lnn.clickpim();
      lnn.Scrolling();
      
     


    })
})