
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
},false;

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
},false;

function Navigation(param) {

    /* Variable*/
    var self = this;

    /* Pages */
    var menu = new Menu();
    descriptionMap = new DescriptionMapPage();
    contactPage = new ContactPage();
    confirmationPage = new ConfirmationPage();


    var body = document.getElementsByTagName("body")[0];
    var workspace = document.getElementById("workspace");


    var init = function(){

        var menuEl = menu.getElement();
        menuEl.appendBefore(workspace);

        descriptionMap.init();
        contactPage.init();
        confirmationPage.init();
        menu.init();

    };

    window.onresize = function(){
        menu.refresh();
        descriptionMap.refresh();

        if(oldPage && oldPage.refresh)
            oldPage.refresh();
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