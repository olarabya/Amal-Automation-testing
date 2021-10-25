import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import LoginActions from '../../../pageObjects/LoginForm/actions';
import LoginAssertion from '../../../pageObjects/LoginForm/assertions';
const loginActions=new LoginActions(); 
const loginAssertion=new LoginAssertion(); 
const CountryCode = "+970";
const PhoneNumber ="568297341";
const password = "Abc123";

  Given ('A user navigated to Log in page',()=>{
    loginActions.openSignInPage();
  });

  And ('select Valid ContryCode',()=>{
    loginActions.typeInCountryCodeInputField(CountryCode)
  });

  And('Typed in Phone number field a valid phone Number',()=>{
    loginActions.typeInPhonNumberInputField(PhoneNumber)
  });

  And('Typed in password field a valid password',()=>{
    loginActions.typeInPasswordInputField(password)
  });


  When('Clicks on Login button',()=>{
    loginActions.clicksOnLoginButoon() 
  });

  Then('The user should logged in successfuly',()=> {
    loginActions.waitLoginFormLoading();
    loginAssertion.checkTitleContainValue()
  }); 