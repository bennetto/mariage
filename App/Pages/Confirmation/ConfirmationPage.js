
function ConfirmationPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */

    var element = Utils.loadHtmlSync("./App/Pages/Confirmation/ConfirmationPage.html");

    var panelLeft = element.querySelector('.panel-left');
    //right
    var panelHome = element.querySelector('.panel-home');
    var panelAdd = element.querySelector('.panel-add');
    var panelEnd = element.querySelector('.panel-end');


    var btnBack = element.querySelector(".back-button");
    var btnHome = element.querySelector(".btn-home");

    var callBackFct;


    /* INIT */

    this.init = function(){

        element.appendAfter(workspace);


        var tInit = new TimelineLite();

        var widthLeft = panelLeft.offsetWidth;
        var widthRight = panelHome.offsetWidth;

        /* initialisation position */
        tInit .set(panelLeft,{x:-widthLeft})
            .set(panelHome,{x:widthRight})
            .set(panelAdd,{x:widthRight})
            .set(panelEnd,{x:widthRight});
    };

    var currentPanelRight;


    this.print = function(callback){
        currentPanelRight = panelHome;
        callBackFct = callback;
        ga('send','contact');

        var tl = new TimelineLite();
        tl .to(panelLeft,1,{x:0,ease: Power2.easeInOut},"-=1")
            .to(currentPanelRight,1,{x:0,ease: Power2.easeInOut},"-=1");
    };

    this.goToAdd = function(){
        var widthRight = currentPanelRight.offsetWidth;

        var tl = new TimelineLite();
        tl .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut})
            .to(panelAdd,1,{x:0,ease: Power2.easeInOut});

        currentPanelRight = panelAdd;
    };

    this.goToEnd = function(){
        var widthRight = currentPanelRight.offsetWidth;

        var tl = new TimelineLite();
        tl .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut})
            .to(panelEnd,1,{x:0,ease: Power2.easeInOut});

        currentPanelRight = panelEnd;
    };

    this.close = function(){
        var widthLeft = panelLeft.offsetWidth;
        var widthRight = currentPanelRight.offsetWidth;

        var tl = new TimelineLite();

        tl .to(panelLeft,1,{x:-widthLeft,ease: Power2.easeInOut},"-=1")
            .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut,onComplete:endClose},"-=1")

    };

    btnBack.onclick = self.close;
    btnHome.onclick = self.goToAdd;
    var endClose = function(){

        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}