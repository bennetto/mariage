function Navigation(param) {

    /* Variable*/
    var self = this;

    /* Page */
    var menu = new Menu();

    this.Pages = {

        jourJ:new JourJ()
    };

    var body = document.getElementsByTagName("body")[0];
    var workspace = document.getElementById("workspace");


    var init = function(){
        var menuEl = menu.getElement();
        body.appendChild(menuEl);

        menu.init();

    };

    var oldPage;
    this.navigateTo = function(page){

        if(oldPage) {
            oldPage.close();
        }

        if(page)
        {
            page.init();
            oldPage = page;
        }else{
            oldPage = null;
        }
    };

    init();
}