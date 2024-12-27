package org.stepdifinition;

import java.io.IOException;

import org.libglobal.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
//	@Before(order = 30)
//	public void bfHooks1() {
//		launchUrl("https://www.facebook.com/");
//	}
	@Before(order = 10)
	public void bfHooks2() {
		
		browserLaunch();

	}
	@Before(order = 50)
	public void bfHooks3() {
	
		maxBrowser();

	}
	@After(order = 80)
	public void afHooks1(Scenario s)  {
		
		TakesScreenshot ts=(TakesScreenshot)driver;
		byte[] sc = ts.getScreenshotAs(OutputType.BYTES);
		
		if (s.isFailed()) {
			s.embed(sc, "fb & amazon");
		}
		
		System.out.println("take screenshot");
	}
	
	@After(order = 40)
	public void afHooks2() {
		closeBrowser();
	}

}
