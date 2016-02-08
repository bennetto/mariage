
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




    var body = document.getElementsByTagName("body")[0];
    var workspace = document.getElementById("workspace");


    var init = function(){

       self.navigateTo(new NoSItePage());

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


