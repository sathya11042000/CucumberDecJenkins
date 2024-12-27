package org.stepdifinition;

import org.junit.Assert;
import org.libglobal.BaseClass;
import org.openqa.selenium.WebElement;
import org.pom.LoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class NagativeAndPositiveTest extends BaseClass {
	public static LoginPojo l;

	@Given("Launch the chrome browser and hit the url")
	public void launch_the_chrome_browser_and_hit_the_url() {
		browserLaunch();
		launchUrl("https://www.facebook.com/");
		maxBrowser();
	}

	@When("Pass the invalid mailId {string} in emailfield")
	public void pass_the_invalid_mailId_in_emailfield(String em) {
		l = new LoginPojo();

		WebElement email = l.getEmail();
		sendData(email, em);

	}

	@When("Pass the invalid password {string} in passwordfield")
	public void pass_the_invalid_password_in_passwordfield(String pa) {
		WebElement pass = l.getPass();
		Assert.assertTrue(false);
		sendData(pass, pa);
	}

	@When("Click the login button")
	public void click_the_login_button() {
		WebElement login = l.getLogin();
		clkBtn(login);
	}

	@Then("Close the chrome browser")
	public void close_the_chrome_browser() {
		closeBrowser();
	}

}
