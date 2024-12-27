package org.stepdifinition;

import java.util.List;
import java.util.Map;

import org.libglobal.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.pom.LoginPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FBdifine extends BaseClass {
	public static LoginPojo l;

	@Given("To launch the chrome browser and hit the url")
	public void to_launch_the_chrome_browser_and_hit_the_url() {
		browserLaunch();
		launchUrl("https://www.facebook.com/");
		maxBrowser();
	}

	@When("To pass the invalid mailId in emailfield")
	public void to_pass_the_invalid_mailId_in_emailfield(io.cucumber.datatable.DataTable d) {
		l = new LoginPojo();
		WebElement email = l.getEmail();

		Map<String, String> m = d.asMap(String.class,String.class);
		String s = m.get("email");
		sendData(email, s);

	}

	@When("To pass the valid password in passwordfield")
	public void to_pass_the_valid_password_in_passwordfield(io.cucumber.datatable.DataTable d) {
		WebElement pass = l.getPass();
		List<Map<String, String>> m = d.asMaps();
		
		sendData(pass,m.get(0).get("p2"));
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		WebElement login = l.getLogin();
		//clkBtn(login);
		System.out.println("to click the button");
	}

	@Then("To close the chrome browser")
	public void to_close_the_chrome_browser() {
		//closeBrowser();
	}

}
