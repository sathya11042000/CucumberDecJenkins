package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@C:\\Users\\ADMIN\\eclipse-workspace\\Cucumber1130Batch\\FeatureFile\\failed.txt",
glue = "org.stepdifinition")

public class RestRunner {

}
