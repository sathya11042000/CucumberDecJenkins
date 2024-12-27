package org.libglobal;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class BaseClass {

	public static WebDriver driver;
	public static Actions a;

	public static void browserLaunch() {
		driver = new ChromeDriver();

	}

	public static void launchUrl(String url) {
		driver.get(url);
	}

	public static void maxBrowser() {
		driver.manage().window().maximize();

	}

	public static void getDateAndTime() {
		Date d = new Date();
		System.out.println(d);

	}

	public static String prtTitle() {
		String title = driver.getTitle();
//		System.out.println(title);

		return title;
	}

	public static String prtCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		// System.out.println(currentUrl);
		return currentUrl;
	}

	public static void closeBrowser() {
		driver.quit();
	}

	public static void referesh() {
		driver.navigate().refresh();

	}

	public static void sendData(WebElement webRef, String sendValue) {
		webRef.sendKeys(sendValue);
	}

	public static void clkBtn(WebElement webRef) {
		webRef.click();
	}

	public static void snap(String fileName) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File temActions = ts.getScreenshotAs(OutputType.FILE);
		File destination = new File(
				"C:\\Users\\ADMIN\\eclipse-workspace\\MavenConfigration1130\\sc\\" + fileName + ".png");
		FileUtils.copyFile(temActions, destination);

	}

	public static void MoveToEle(WebElement webRef) {
		a = new Actions(driver);
		a.moveToElement(webRef).perform();

	}

	public static void dragDrop(WebElement src, WebElement tar) {
		a.dragAndDrop(src, tar).perform();

	}

	public static String toReadFile(String fileName, String shName, int rowNo, int cellNo) throws IOException {
		// 11amEXSheet.xlsx ,"Login"
		File f = new File("C:\\Users\\ADMIN\\eclipse-workspace\\MavenConfigration1130\\xlsx\\" + fileName + ".xlsx");
		FileInputStream fin = new FileInputStream(f);
		Workbook book = new XSSFWorkbook(fin);
		Sheet sh = book.getSheet(shName);
		Row row = sh.getRow(rowNo);
		Cell cell = row.getCell(cellNo);

		int type = cell.getCellType();// 0 or 1
		String value = "";
		if (type == 1) {
			value = cell.getStringCellValue();
		} else if (DateUtil.isCellDateFormatted(cell)) {
			Date date = cell.getDateCellValue();
			SimpleDateFormat sim = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss");
			value = sim.format(date);
		} else {
			double dble = cell.getNumericCellValue();
			long l = (long) dble;
			value = String.valueOf(l);

		}

		return value;

	}
}
