class LoginAssertion{  
    checkTitleContainValue(){
      return  cy.get("div.discription").contains('List of all recorded projects. Clicking on the project will provide a details for that project.')
    }
}
export default LoginAssertion;
