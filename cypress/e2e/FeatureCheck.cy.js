import login from "../../POM/LoginPage";
import FeatureCheck from "../../POM/CheckFeature";

describe('My First Test', () => {
   
    it('Feature',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      const ln = new login();
     const lnn = new FeatureCheck();
      ln.setusername("Admin");
      ln.setpassword("admin123");
      ln.clicksubmit();
      lnn.setAdmin();
      lnn.setLeave();
      lnn.setpim();
      lnn.setrequirment();
      lnn.settime();

      
      


    })
})