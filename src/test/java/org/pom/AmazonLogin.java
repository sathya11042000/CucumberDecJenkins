package org.pom;

import org.libglobal.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AmazonLogin extends BaseClass{
	public AmazonLogin() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "email")
	public WebElement amazonEmail;
	
	@FindBy(id = "continue")
	public WebElement amazonConBtn;
	
	@FindBy(name = "password")
	public WebElement amazonPass;
	
	@FindBy(id = "signInSubmit")
	public WebElement amazonSignIn;
	
	

	public WebElement getAmazonEmail() {
		return amazonEmail;
	}

	public WebElement getAmazonConBtn() {
		return amazonConBtn;
	}

	public WebElement getAmazonPass() {
		return amazonPass;
	}

	public WebElement getAmazonSignIn() {
		return amazonSignIn;
	}



}
