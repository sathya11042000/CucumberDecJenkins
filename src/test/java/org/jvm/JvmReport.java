package org.jvm;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
public class JvmReport {

	public static void genarateJvmReport(String jsonPath) {
		// Mention the target folder location - File
		File f = new File("C:\\Users\\ADMIN\\eclipse-workspace\\Cucumber1130Batch\\JVM");
		// *Add details to the report using Configuration class ----
		// addClassifications("point1","point2")
		Configuration c = new Configuration(f, "facebok& amazon");
		c.addClassifications("Browser Name", "Chrome");
		c.addClassifications("Browser version", "4.22.0");
		c.addClassifications("Project Name", "Facebbok");

		// *Add json file paths into List<String>
		List<String> li = new ArrayList<>();
		li.add(jsonPath);

		// Create object for ReportBuilder class and using the created object call
		// generateReports() method.
		ReportBuilder r = new ReportBuilder(li, c);
		r.generateReports();
	}

}
