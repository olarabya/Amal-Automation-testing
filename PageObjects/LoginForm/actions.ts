
class LoginActions{

    openSignInPage(){
        return cy.visit('http://amalui.eu-west-1.elasticbeanstalk.com/#/pages/login')
    }

    typeInCountryCodeInputField(CountryCode: string){
        cy.wait(3000);

        cy.get("mat-select[formcontrolname=CountryCode]").click();
        cy.wait(3500);
        cy.get("mat-option").find('span').contains(CountryCode).click();
         return this 
    } 

    typeInPhonNumberInputField(PhoneNumber: string){
        cy.get('input[type="text"]').type(PhoneNumber)
         return this 
    } 

    typeInPasswordInputField(password: string){
        cy.get('input[type="password"]').type(password)
        return this 
    }

    clicksOnLoginButoon(){
        return cy.get('button').contains("span","Login").click()
    }

    waitLoginFormLoading(){
        return cy.wait(1000)
    }
    
}
export default LoginActions;