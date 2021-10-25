Feature:  show the report 

    Scenario: User show the 'HR Report' when select all required field 
        Given the user login succsesfuly 
        When the user click on 'Reports' tab on the left menue side 
        And select 'HR Report' from Report type dropdown
        And select project from project dropdown  
        And select report period from report period dropdown
        And click on 'Show' button inside report AmalWork page
        Then should be show the 'Daily HR Reports'
