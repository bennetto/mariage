function Navigation(param) {

    /* Variable*/
    var self = this;

    /* Page */
    var menu = new Menu();

    this.Pages = {

        jourJ:new JourJ(),
        listeMariage:new ListeMariage(),
        photoPage : new PhotoPage(),
        vouNousPage : new VousNousPage()
    };

    var body = document.getElementsByTagName("body")[0];
    var workspace = document.getElementById("workspace");


    var init = function(){
        var menuEl = menu.getElement();
        body.appendChild(menuEl);

        menu.init();

    };

    var oldPage;
 var timeOut;
    this.navigateTo = function(page){

        clearTimeout(timeOut);

        if(oldPage) {
            oldPage.close();
        }

        if(page)
        {
            timeOut =  setTimeout(function(){
                page.init();
            },500);
            oldPage = page;
        }else{
            oldPage = null;
        }
    };


    init();
}