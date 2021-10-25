import { wait } from "@testing-library/dom";

class ReportActions{

    selectReportsTab(){
        cy.wait(3500);
       return cy.get('ul.nav').contains("a","Reports").click();
    }

    SelectReportType(ReportType:string){
        cy.wait(4000);

        cy.get("mat-select[formcontrolname=reportTypeSelected]").click();
        cy.wait(4500);

        cy.get("mat-option").find('span').contains(ReportType).click();
        return this;



    }

   SelectProject(Project:string){
    cy.wait(3000);

    cy.get("mat-select[formcontrolname=projectSelected]").click();
    cy.wait(3500);

    cy.get("mat-option").find('span').contains(Project).click();
    return this;
}

    SelectReportPeriod(ReportPeriod:string){
        cy.wait(4000);

        cy.get("mat-select[formcontrolname=reportPeriodSelected]").click();
        cy.wait(4500);

        cy.get("mat-option").find('span').contains(ReportPeriod).click();
        return this;    
    }

   /* SelectProfession(Profession:string){
        cy.wait(4500);

        cy.get("mat-select[formcontrolname=profession]").click();
        cy.wait(5500);

        cy.get("mat-option").find("div","span").contains(Profession).click();
        return this;    
    }*/


    ClickOnShowButton(){
        return cy.get("button").contains("span","Show").should('be.visible').click()
    } 

    
}
export default ReportActions;