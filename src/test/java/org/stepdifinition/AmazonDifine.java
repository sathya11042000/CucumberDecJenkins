package org.stepdifinition;

import org.libglobal.BaseClass;
import org.openqa.selenium.WebElement;
import org.pom.AmazonLogin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AmazonDifine extends BaseClass {
	public static AmazonLogin a;

	@Given("To launch the browser")
	public void toLaunchTheBrowser() {
		browserLaunch();
		launchUrl(
				"https://www.amazon.in/ap/signin");
		maxBrowser();
	}

	@When("To pass the value in emailId or phnum in emailfield")
	public void toPassTheValueInEmailIdOrPhnumInEmailfield() {
		a = new AmazonLogin();
		WebElement aEmail = a.getAmazonEmail();
		sendData(aEmail, "8524046025");

	}

	@When("To click a continue btn")
	public void toClickAContinueBtn() {
		WebElement aclk = a.getAmazonConBtn();
		clkBtn(aclk);
	}

	@When("To pass the value in passwordfield")
	public void toPassTheValueInPasswordfield() {
		WebElement apass = a.getAmazonPass();
		sendData(apass, "sst");

	}

	@When("To click signin  btn")
	public void toClickSigninBtn() {
		WebElement asignin = a.getAmazonSignIn();
		clkBtn(asignin);
	}

	@Then("Close the browser")
	public void closeTheBrowser() {
//		closeBrowser();
	}

	@Given("launch the browser")
	public void launchTheBrowser() {
//		browserLaunch();
		launchUrl(
				"https://www.amazon.in/ap/signin");
		maxBrowser();
	}

	@When("pass the value in emailId or phnum in emailfield")
	public void passTheValueInEmailIdOrPhnumInEmailfield() {
		WebElement aEmail = a.getAmazonEmail();
		sendData(aEmail, "sathyastudy2000@gmail.com");
	}

	@When("click a continue btn")
	public void clickAContinueBtn() {
		WebElement aclk = a.getAmazonConBtn();
		clkBtn(aclk);
	}

	@When("pass the value in passwordfield")
	public void passTheValueInPasswordfield() {
		WebElement apass = a.getAmazonPass();
		sendData(apass, "sst");
	}

	@When("click signin  btn")
	public void clickSigninBtn() {
		WebElement asignin = a.getAmazonSignIn();
		clkBtn(asignin);
	}

	@Then("browser close Amazon")
	public void browserCloseAmazon() {
		closeBrowser();
	}

}
