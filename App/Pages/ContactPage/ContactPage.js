
function ContactPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */

    var element = Utils.loadHtmlSync("./App/Pages/ContactPage/ContactPage.html");

    var panelMessage = element.querySelector('.panel-message');
    var panelContact = element.querySelector('.panel-contact');

    var btnBack = element.querySelector(".back-button");


    var btnSend = element.querySelector(".btn-send");
    btnSend.onclick = function(){

        var msg = element.querySelector(".message-value");
        var nom = element.querySelector(".nom-value");


        if(nom.value.length == 0 || msg.value.length == 0)
        {
            GlobalNotif.print("Veuillez remplir les champs",2000);
        }
        else{
            var data =  {
                "sender": nom.value.latinise(),
                "message": msg.value.latinise()
            };
            Utils.post(urlServer+"/mariage/contact/",JSON.stringify(data),function(isOk,reponse){

                if(isOk) {
                    GlobalNotif.print("Message envoyée !!!", 2000);
                    self.close();
                }
                else {
                    GlobalNotif.print("Oups!!! Serveur non disponible", 5000);
                }
            });
        }




    };


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


        panelContact.style.display = "none";
        panelMessage.style.display = "none";
    };

    var marker;


    this.print = function(callback){
        callBackFct = callback;
        ga('send','contact');

        panelContact.style.display = "block";
        panelMessage.style.display = "block";

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
        panelContact.style.display = "none";
        panelMessage.style.display = "none";

        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}