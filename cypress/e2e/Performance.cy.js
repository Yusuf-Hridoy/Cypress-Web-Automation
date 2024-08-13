import login from "../../POM/LoginPage";
import performance from "../../POM/CheckingPerformance";

describe('My First Test', () => {
   
    it('Login with right credintial',()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      const ln = new login();
      const lnn = new performance();
      ln.setusername("Admin");
      ln.setpassword("admin123");
      ln.clicksubmit();
      lnn.setperformance();
      lnn.setEmployeename();
      lnn.setjobtitle();
     


    })
})

