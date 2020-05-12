$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Reset functionality on login page of Application",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;1"
    },
    {
      "cells": [
        "mngr260310",
        "UhEgYnE"
      ],
      "line": 14,
      "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verification of reset button with numbers of credential",
  "description": "",
  "id": "reset-functionality-on-login-page-of-application;verification-of-reset-button-with-numbers-of-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Open the Chrome and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter the Username \"mngr260310\" and Password \"UhEgYnE\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.open_the_Firefox_and_launch_the_application()"
});
formatter.result({
  "duration": 6125239572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr260310",
      "offset": 20
    },
    {
      "val": "UhEgYnE",
      "offset": 46
    }
  ],
  "location": "Steps.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 275865914,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Reset_the_credential()"
});
formatter.result({
  "duration": 214036262,
  "status": "passed"
});
});