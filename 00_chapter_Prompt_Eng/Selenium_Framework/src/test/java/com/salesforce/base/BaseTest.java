package com.salesforce.base;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import com.salesforce.pages.LoginPage;
import com.salesforce.utils.ConfigReader;
import com.salesforce.utils.DriverFactory;

public class BaseTest {
    protected WebDriver driver;
    protected LoginPage loginPage;

    @BeforeMethod
    public void setUp() {
        try {
            driver = DriverFactory.createDriver();
            loginPage = new LoginPage(driver);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize test environment: " + e.getMessage(), e);
        }
    }

    @AfterMethod
    public void tearDown() {
        try {
            if (driver != null) {
                driver.quit();
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to quit browser: " + e.getMessage(), e);
        }
    }

    protected String getBaseUrl() {
        return ConfigReader.getString("base.url", "https://login.salesforce.com/?locale=in");
    }
}
