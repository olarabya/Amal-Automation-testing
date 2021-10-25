  import {Given , When , Then , And} from 'cypress-cucumber-preprocessor/steps';
  import LoginActions from '../../../pageObjects/LoginForm/actions';
  import ReportActions from '../../../pageObjects/LoginForm/Report/actions';
  import ReportAssertion from '../../../pageObjects/LoginForm/Report/assertions';

  const reportActions = new ReportActions();
  const reportAssertion = new ReportAssertion(); 
const loginActions=new LoginActions();
  const ReportType="HR";
  const Project="Foothill Technology Solution"
  const ReportPeriod="Daily Report"
  const Profession =" Electricity works"
  const CountryCode = "+970";
  const PhoneNumber ="568297341";
  const password = "Abc123";
  
  
  Given("the user login succsesfuly",()=>{
    loginActions.openSignInPage();

    loginActions.typeInCountryCodeInputField(CountryCode).typeInPhonNumberInputField(PhoneNumber).typeInPasswordInputField(password).clicksOnLoginButoon();
  });
  
  When("the user click on 'Reports' tab on the left menue side",()=>{
    reportActions.selectReportsTab()

  });
  
  When("select 'HR Report' from Report type dropdown",()=>{
    reportActions.SelectReportType(ReportType);
  });
  
  When("select project from project dropdown",()=>{
    reportActions.SelectProject(Project)
  });
  
  When("select report period from report period dropdown",()=>{
    reportActions.SelectReportPeriod(ReportPeriod);
  });

/*  When("select profession from profession dropdown",()=>{
    reportActions.SelectReportPeriod(Profession);
  });*/
  
  When("click on 'Show' button inside report AmalWork page",()=>{
    reportActions.ClickOnShowButton();
  });
  
  Then("should be show the 'Daily HR Reports'",()=>{
    reportAssertion.checkTitleContainValue()
  }); 
  
  
  
 