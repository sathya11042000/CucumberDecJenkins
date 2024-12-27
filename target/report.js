$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFile/01fb.feature");
formatter.feature({
  "name": "To validate Login functionality of Facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBdifine.to_launch_the_chrome_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid emailId and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To pass the invalid mailId in emailfield",
  "rows": [
    {
      "cells": [
        "username",
        "Gowri"
      ]
    },
    {
      "cells": [
        "password",
        "45678"
      ]
    },
    {
      "cells": [
        "email",
        "sst@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "FBdifine.to_pass_the_invalid_mailId_in_emailfield(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid password in passwordfield",
  "rows": [
    {
      "cells": [
        "p1",
        "p2",
        "p3"
      ]
    },
    {
      "cells": [
        "Selenium",
        "sst123@gmail.com",
        "12345678"
      ]
    },
    {
      "cells": [
        "java",
        "G",
        "9076542345"
      ]
    },
    {
      "cells": [
        "python",
        "manual",
        "testing"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FBdifine.to_pass_the_valid_password_in_passwordfield(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FBdifine.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FBdifine.to_close_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate invalid emailId and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Pass the invalid mailId \"\u003cemail field\u003e\" in emailfield",
  "keyword": "When "
});
formatter.step({
  "name": "Pass the invalid password \"\u003cpassword field\u003e\" in passwordfield",
  "keyword": "And "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Close the chrome browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email field",
        "password field"
      ]
    },
    {
      "cells": [
        "java123@gmail.com",
        "java"
      ]
    },
    {
      "cells": [
        "selenium123@gmail.cim",
        "selenium"
      ]
    },
    {
      "cells": [
        "framework123@gmail.com",
        "framework"
      ]
    },
    {
      "cells": [
        "sql123@gmail.com",
        "sql"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBdifine.to_launch_the_chrome_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid emailId and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Pass the invalid mailId \"java123@gmail.com\" in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_mailId_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the invalid password \"java\" in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdifinition.NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(NagativeAndPositiveTest.java:35)\r\n\tat ✽.Pass the invalid password \"java\" in passwordfield(src/test/resources/FeatureFile/01fb.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NagativeAndPositiveTest.close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBdifine.to_launch_the_chrome_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid emailId and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Pass the invalid mailId \"selenium123@gmail.cim\" in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_mailId_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the invalid password \"selenium\" in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdifinition.NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(NagativeAndPositiveTest.java:35)\r\n\tat ✽.Pass the invalid password \"selenium\" in passwordfield(src/test/resources/FeatureFile/01fb.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NagativeAndPositiveTest.close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBdifine.to_launch_the_chrome_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid emailId and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Pass the invalid mailId \"framework123@gmail.com\" in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_mailId_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the invalid password \"framework\" in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdifinition.NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(NagativeAndPositiveTest.java:35)\r\n\tat ✽.Pass the invalid password \"framework\" in passwordfield(src/test/resources/FeatureFile/01fb.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NagativeAndPositiveTest.close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBdifine.to_launch_the_chrome_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid emailId and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "Pass the invalid mailId \"sql123@gmail.com\" in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_mailId_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the invalid password \"sql\" in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.stepdifinition.NagativeAndPositiveTest.pass_the_invalid_password_in_passwordfield(NagativeAndPositiveTest.java:35)\r\n\tat ✽.Pass the invalid password \"sql\" in passwordfield(src/test/resources/FeatureFile/01fb.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "NagativeAndPositiveTest.click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the chrome browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NagativeAndPositiveTest.close_the_chrome_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/FeatureFile/02amazon.feature");
formatter.feature({
  "name": "To validate Login functionality of amazon application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDifine.toLaunchTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using nagative username and pasitive password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "To pass the value in emailId or phnum in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonDifine.toPassTheValueInEmailIdOrPhnumInEmailfield()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d131.0.6778.140)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.26.0\u0027, revision: \u00278ccf0219d7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4408bde1427d9a5e0ced16acec35c12a, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 131.0.6778.140, chrome: {chromedriverVersion: 131.0.6778.108 (3b014839fbc..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60661}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60661/devtoo..., se:cdpVersion: 131.0.6778.140, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4408bde1427d9a5e0ced16acec35c12a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat org.libglobal.BaseClass.sendData(BaseClass.java:71)\r\n\tat org.stepdifinition.AmazonDifine.toPassTheValueInEmailIdOrPhnumInEmailfield(AmazonDifine.java:26)\r\n\tat ✽.To pass the value in emailId or phnum in emailfield(src/test/resources/FeatureFile/02amazon.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click a continue btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.toClickAContinueBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To pass the value in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.toPassTheValueInPasswordfield()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click signin  btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.toClickSigninBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDifine.closeTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDifine.toLaunchTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using valied username and invalied password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@sanity"
    },
    {
      "name": ","
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "pass the value in emailId or phnum in emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonDifine.passTheValueInEmailIdOrPhnumInEmailfield()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.26.0\u0027, revision: \u00278ccf0219d7\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dname, value\u003demail}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 131.0.6778.140, chrome: {chromedriverVersion: 131.0.6778.108 (3b014839fbc..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60661}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60661/devtoo..., se:cdpVersion: 131.0.6778.140, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:151)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat org.libglobal.BaseClass.sendData(BaseClass.java:71)\r\n\tat org.stepdifinition.AmazonDifine.passTheValueInEmailIdOrPhnumInEmailfield(AmazonDifine.java:65)\r\n\tat ✽.pass the value in emailId or phnum in emailfield(src/test/resources/FeatureFile/02amazon.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click a continue btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.clickAContinueBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pass the value in passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.passTheValueInPasswordfield()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click signin  btn",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDifine.clickSigninBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "browser close Amazon",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDifine.browserCloseAmazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});