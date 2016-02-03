
function ContactPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */

    var element = Utils.loadHtmlSync("./App/Pages/ContactPage/ContactPage.html");

    var panelMessage = element.querySelector('.panel-message');
    var panelContact = element.querySelector('.panel-contact');

    var btnBack = element.querySelector(".back-button");


    var callBackFct;


/* INIT */

    this.init = function(){


        element.appendAfter(workspace);


        var tInit = new TimelineLite();

        var widthMessage = panelMessage.offsetWidth;
        var widthContact = panelContact.offsetWidth;

        /* initialisation position */
        tInit .set(panelMessage,{x:widthMessage})
            .set(panelContact,{x:-widthContact});
    };

    var marker;


    this.print = function(callback){
        callBackFct = callback;


        var tl = new TimelineLite();
        tl .to(panelMessage,1,{x:0,ease: Power2.easeInOut},"-=1")
            .to(panelContact,1,{x:0,ease: Power2.easeInOut},"-=1");
    };

    this.close = function(){
        var widthMessage = panelMessage.offsetWidth;
        var widthContact = panelContact.offsetWidth;

        var tl = new TimelineLite();

        tl .to(panelMessage,1,{x:widthMessage,ease: Power2.easeInOut},"-=1")
            .to(panelContact,1,{x:-widthContact,ease: Power2.easeInOut,onComplete:endClose},"-=1");

    };
    btnBack.onclick = self.close;

    var endClose = function(){


        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}