package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.JvmReport;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",glue = "org.stepdifinition",
plugin = {"html:target","junit:JunitF\\ju.xml","json:JsonF\\js.json","rerun:FeatureFile\\failed.txt"})
public class RunnerCls {
	@AfterClass
	public static void aftCls() {
		JvmReport.genarateJvmReport("C:\\Users\\ADMIN\\eclipse-workspace\\Cucumber1130Batch\\JsonF\\js.json");

	}

}
