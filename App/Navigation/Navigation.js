function Navigation(param) {

    /* Variable*/
    var self = this;

    /* Page */
    var menu = new Menu();
    var workspace = document.getElementById("workspace");


    var init = function(){
        var menuEl = menu.getElement();
        workspace.appendChild(menuEl);

        menu.init();

    };



    init();
}