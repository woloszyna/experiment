var webdriver = require('selenium-webdriver'),
    { describe, it, after, before, beforeEach, afterEach } = require ('selenium-webdriver/testing');
    By = webdriver.By,
    until = webdriver.until;
    var driver;
    
describe('Firefox scenarios', function(){   
    this.timeout(50000);
    beforeEach(function () {    
        //start new browser and open the website before each scenario
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com');
        driver.manage().window().maximize();
    });

    afterEach(function(){
        driver.quit();
    });

    it('changes opacity when email being showed', function(){
        var button = driver.findElement(By.className('btn-primary'));
        driver.findElement(By.css('input')).sendKeys('test1@email.com');
        driver.wait(function(){
            return button.getCssValue('opacity').then(function(result){
                return result == 1;
            });
        }, 5000);
    });

    it('displays alert', function () {
        var button = driver.findElement(By.className('btn-primary'));
        driver.findElement(By.css('input')).sendKeys('test1@email.com');
        button.click();
        driver.wait(until.elementLocated(By.className('alert-success')), 5000);
        message = driver.findElement(By.className('alert-success'));
        message.getText()
        /*    
        .then(function (txt) {
        console.log("The text of the alert is: " + txt);
        });
        */
    });

    it('shows navigation bar', function(){
            driver.findElement(By.css('nav')).getText()
                /*
                .then(function (txt) {
                console.log(txt);
            });
            */
    });
})