
function JourJDetail(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */
    var importHtml = document.querySelector('#jourJDetailHtml');
    var element = importHtml.import.querySelector('.JourJDetail-container').cloneNode(true);

    var panelMaps = element.querySelector('.panel-maps');
    var panelDescription = element.querySelector('.panel-description');

    var btnBack = element.querySelector(".back-button");

    var elementInit = false;

    var callBackFct;



/* INIT */
    function initMap() {

        var mapGoogle = document.createElement("div");
        mapGoogle.className="mapGoogle";

        map = new google.maps.Map(mapGoogle, {
            center: {lat: 47.2991637, lng: 4.9291713},
            zoom: 12,
            scrollwheel:true
        });


        panelMaps.appendChild(map.getDiv());
    };


    this.init = function(){
        elementInit = true;


        element.appendAfter(workspace);

        initMap();

        var width = window.innerWidth;

        var tInit = new TimelineLite();

        /* initialisation position */
        tInit .set(panelMaps,{x:width})
            .set(panelDescription,{x:-width});

    };




    /* print or clos fct */
    var constructHtml = function(param){

        var title = panelDescription.querySelector(".title");
        title.innerText = param.nom;



    };


    this.print = function(param,callback){
        callBackFct = callback;


       constructHtml(param);

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
        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }


}