class BasePage{
    constructor(PageName){
        this.pageName = PageName;
    }
    openPage(){
        console.log("Opening the page ");
    }
    closePage(){
        console.log("Closing the page");
    }
}

class HomePage extends BasePage{

}

let home = new HomePage();
home.openPage();
home.closePage();