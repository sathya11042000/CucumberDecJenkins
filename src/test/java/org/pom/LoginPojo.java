package org.pom;

import org.libglobal.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class LoginPojo extends BaseClass {

	public LoginPojo() {
		PageFactory.initElements(driver,this);
	}
	@CacheLookup
	@FindBy(id = "email")
	public WebElement email;
	
	@CacheLookup
	@FindBy(id = "pass")
	public WebElement pass;
	//OR
	@FindAll(
			{
				@FindBy(name = "login"),//t
				@FindBy(xpath= "//button[@vale='1']")	//f
			}
			)
	
	public WebElement login;

	public WebElement getEmail() {
		return email;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLogin() {
		return login;
	}

	

}
