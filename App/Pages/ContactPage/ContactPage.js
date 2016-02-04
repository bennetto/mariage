
function ContactPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */

    var element = Utils.loadHtmlSync("./App/Pages/ContactPage/ContactPage.html");

    var panelMessage = element.querySelector('.panel-message');
    var panelContact = element.querySelector('.panel-contact');

    var btnBack = element.querySelector(".back-button");
    btnBack.onclick = self.close;

    var btnSend = element.querySelector(".btn-send");
    btnSend.onclick = function(){

        var msg = element.querySelector(".message-value");

        var data =  {
            "sender": "Test",
            "message": msg.value
        };
        Utils.post("http://api.dev.benetjulie.love/mariage/contact/",data);

        self.close();
    };


    var callBackFct;


/* INIT */

    this.init = function(){

        Utils.get("http://api.dev.benetjulie.love/mariage/contact/",function(value){

            console.debug("hhu : "+ value);

        });


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
        ga('send','contact');

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


    var endClose = function(){


        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}