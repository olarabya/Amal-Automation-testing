class ReportAssertion{  
    checkTitleContainValue(){
      cy.get(".card").find("h4").should("contain", "Daily HR Reports");
return this;
    }
    
}
export default ReportAssertion;