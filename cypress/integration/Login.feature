Feature:  Login in Amal website

   Scenario: Verify the user can login in Amal website
      Given A user navigated to Log in page
      And select Valid ContryCode 
      And Typed in Phone number field a valid phone Number 
      And Typed in password field a valid password
      When Clicks on Login button
      Then The user should logged in successfuly