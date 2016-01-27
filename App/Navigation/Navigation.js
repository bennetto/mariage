function Navigation(param) {

    /* Variable*/
    var self = this;

    /* Page */
    var menu = new Menu();

    this.Pages = {

        jourJ:new JourJ()
    };

    var workspace = document.getElementById("workspace");


    var init = function(){
        var menuEl = menu.getElement();
        workspace.appendChild(menuEl);

        menu.init();

    };

    var oldPage;
    this.navigateTo = function(page){

        if(oldPage) {
            workspace.removeChild(oldPage);
        }

        if(page)
        {
            var pageElement = page.getElement();
            workspace.appendChild(pageElement);
            oldPage = pageElement;
        }else{
            oldPage = null;
        }
    };

    init();
}