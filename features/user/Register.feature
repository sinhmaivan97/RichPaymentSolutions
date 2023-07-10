@Register
Feature: Register to POS application

 Background:
  Given User is on the register page

  Scenario: Register with empty data
    When Check validation when user does'nt enter all textbox
    And Click to register button
    Then Verify error message

  Scenario: Register wiht blank field
    When Check validation when user does'nt enter business name, phone number and confirm password
    And Enter username <username>
    And Enter email <email>
    And Enter password <password>
    And Click to Register Button
    Then Verify error message

  Scenario: Register with invalid phone number
    When Check validation when user enter invalid phonenumber
    And Enter username <username>
    And Enter business <business>
    And Enter invalid phone number <phone>
    And Enter email address <email>
    And Enter password <password>
    And Enter confirm password <confirmpassword>
    And Click to Register Button
    Then Verify error message

  Scenario: Register with invalid email
    When Check validation when user enter invalid email
    And Enter username <username>
    And Enter business <business>
    And Enter phone number <phone>
    And Enter invalid email address <email>
    And Enter password <password>
    And Enter confirm password <confirmpassword>
    And Click to Register Button
    Then Verify error message

  Scenario: Register with invalid password
    When Check validation when user enter invalid password
    And Enter username <username>
    And Enter business <business>
    And Enter phone number <phone>
    And Enter email address <email>
    And Enter invalid password <password>
    And Enter confirm password <confirmpassword>
    And Click to Register Button
    Then Verify error message

  Scenario: Register with password and confirm password not matching
    When Check validation when user enter password and confirm password matching
    And Enter username <username>
    And Enter business <business>
    And Enter phone number <phone>
    And Enter email address <email>
    And Enter valid password <password>
    And Enter password and confirm password not matching <confirmpassword>
    And Click to Register Button
    Then Verify error message

  Scenario: Register with valid information
    When Check validation when user enter valid information
    And Enter username <username>
    And Enter business <business>
    And Enter phone number <phone>
    And Enter email address <email>
    And Enter valid password <password>
    And Enter confirm password <confirmpassword>
    And Click to Register Button
    Then Verify success message

  Scenario: Register with email already exist
    When Check validation when user enter email already exist
    And Enter username <username>
    And Enter business <business>
    And Enter phone number <phone>
    And Enter email address already exist <email>
    And Enter valid password <password>
    And Enter confirm password <confirmpassword>
    And Click to Register Button
    Then Verify error message