package com.salesforce.tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.salesforce.base.BaseTest;

public class ValidLoginTest extends BaseTest {
    @Test
    public void validLoginShouldPass() {
        try {
            String username = System.getProperty("salesforce.username");
            String password = System.getProperty("salesforce.password");

            if (username == null || username.trim().isEmpty() || password == null || password.trim().isEmpty()) {
                Assert.fail("Set salesforce.username and salesforce.password JVM properties before running valid login test.");
            }

            loginPage.open(getBaseUrl());
            loginPage.login(username, password);

            Assert.assertTrue(loginPage.isLoggedIn(), "User was not redirected to the authenticated Salesforce page.");
        } catch (Exception e) {
            throw new RuntimeException("Valid login flow failed: " + e.getMessage(), e);
        }
    }
}
