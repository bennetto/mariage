function JourJDetail(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */
    var importHtml = document.querySelector('#jourJDetailHtml');
    var element = importHtml.import.querySelector('.JourJDetail-container').cloneNode(true);

    var panelMaps = element.querySelector('.panel-maps');
    var panelDescription = element.querySelector('.panel-description');

    var btnBack = element.querySelector(".back-button");



    var callBackFct;



    var constructHtml = function(){

        var title = panelDescription.querySelector(".title");
        title.innerText = param.nom;

    };

    this.print = function(callback){
        callBackFct = callback;



        constructHtml();


        workspace.appendChild(element);

        var width = window.innerWidth;

        var tInit = new TimelineLite();

        /* initialisation position */
        tInit .set(panelMaps,{x:width})
            .set(panelDescription,{x:-width});


        var tl = new TimelineLite();
        tl .to(panelMaps,1,{x:0,ease: Power2.easeInOut},"-=1")
            .to(panelDescription,1,{x:0,ease: Power2.easeInOut},"-=1");
    };

    this.close = function(){
        var width = window.innerWidth;

        var tl = new TimelineLite();

        tl .to(panelMaps,1,{x:width,ease: Power2.easeInOut},"-=1")
            .to(panelDescription,1,{x:-width,ease: Power2.easeInOut,onComplete:endClose},"-=1");

    };
    btnBack.onclick = self.close;

    var endClose = function(){
      workspace.removeChild(element);
        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }


}