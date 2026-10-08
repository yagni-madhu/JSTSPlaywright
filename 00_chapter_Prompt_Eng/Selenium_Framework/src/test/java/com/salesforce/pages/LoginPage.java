package com.salesforce.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username' or @name='username']")
    private WebElement usernameInput;

    @FindBy(xpath = "//input[@id='password' or @name='pw']")
    private WebElement passwordInput;

    @FindBy(xpath = "//input[@id='Login' or @name='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn' or @name='rememberUn']")
    private WebElement rememberMeCheckbox;

    private final By errorMessageLocator = By.xpath("//div[contains(@class,'error')]//div[contains(@class,'error') or contains(text(),'Please check your username and password')]");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        PageFactory.initElements(driver, this);
    }

    public void open(String url) {
        try {
            driver.get(url);
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
        } catch (Exception e) {
            throw new RuntimeException("Unable to open Salesforce login page: " + e.getMessage(), e);
        }
    }

    public void enterUsername(String username) {
        try {
            wait.until(ExpectedConditions.visibilityOf(usernameInput));
            usernameInput.clear();
            usernameInput.sendKeys(username);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter username: " + e.getMessage(), e);
        }
    }

    public void enterPassword(String password) {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordInput));
            passwordInput.clear();
            passwordInput.sendKeys(password);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter password: " + e.getMessage(), e);
        }
    }

    public void clickLogin() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton));
            loginButton.click();
        } catch (Exception e) {
            throw new RuntimeException("Failed to click login button: " + e.getMessage(), e);
        }
    }

    public void login(String username, String password) {
        try {
            enterUsername(username);
            enterPassword(password);
            clickLogin();
        } catch (Exception e) {
            throw new RuntimeException("Login attempt failed: " + e.getMessage(), e);
        }
    }

    public void toggleRememberMe() {
        try {
            wait.until(ExpectedConditions.visibilityOf(rememberMeCheckbox));
            if (!rememberMeCheckbox.isSelected()) {
                rememberMeCheckbox.click();
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to select remember me checkbox: " + e.getMessage(), e);
        }
    }

    public boolean isErrorDisplayed() {
        try {
            WebElement error = wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessageLocator));
            return error != null && error.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public String getErrorMessage() {
        try {
            WebElement error = wait.until(ExpectedConditions.visibilityOfElementLocated(errorMessageLocator));
            return error.getText();
        } catch (Exception e) {
            return "";
        }
    }

    public boolean isLoggedIn() {
        try {
            String currentUrl = driver.getCurrentUrl();
            return currentUrl.contains("lightning") || currentUrl.contains("home") || currentUrl.contains("one.app");
        } catch (Exception e) {
            return false;
        }
    }
}
