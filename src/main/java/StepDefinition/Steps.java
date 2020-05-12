package StepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Steps {

    private WebDriver driver;
    public static String chromeDriverPath = "/usr/bin/chromedriver";

    @Given("^Open the Chrome and launch the application$")
    public void open_the_Firefox_and_launch_the_application() throws Throwable
    {
        System.setProperty("webdriver.chrome.driver", chromeDriverPath);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.setBinary("/usr/bin/google-chrome");
        driver= new ChromeDriver(options);
        driver.manage().window().maximize();
        driver.get("http://www.demo.guru99.com/v4");
    }

    @When("^Enter the Username \"(.*)\" and Password \"(.*)\"$")
    public void enter_the_Username_and_Password(String username,String password) throws Throwable
    {
        driver.findElement(By.name("uid")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);

    }

    @Then("^Reset the credential$")
    public void	Reset_the_credential() throws Throwable
    {
        driver.findElement(By.name("btnReset")).click();
        driver.quit();
    }

}