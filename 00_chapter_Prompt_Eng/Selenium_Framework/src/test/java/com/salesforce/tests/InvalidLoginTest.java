package com.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.salesforce.base.BaseTest;

public class InvalidLoginTest extends BaseTest {
    @Test
    public void invalidLoginShouldShowError() {
        try {
            loginPage.open(getBaseUrl());
            loginPage.login("invalid.user@example.com", "WrongPassword123");

            Assert.assertTrue(loginPage.isErrorDisplayed(), "Error message was not displayed for invalid login.");
            String message = loginPage.getErrorMessage();
            Assert.assertTrue(message.toLowerCase().contains("username") || message.toLowerCase().contains("password"),
                    "Error message did not contain expected login failure text. Actual message: " + message);
        } catch (Exception e) {
            throw new RuntimeException("Invalid login flow failed: " + e.getMessage(), e);
        }
    }
}
