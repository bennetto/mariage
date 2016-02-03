
function DescriptionMapPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */
    var importHtml = document.querySelector('#jourJDetailHtml');
    var element = importHtml.import.querySelector('.DescriptionMapPage-container').cloneNode(true);

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

            scrollwheel:true
        });


        panelMaps.appendChild(map.getDiv());
    };


    this.init = function(){
        elementInit = true;

        element.appendAfter(workspace);

        initMap();

        ;

        var tInit = new TimelineLite();

        var widthDesc = panelDescription.offsetWidth;
        var widthMap = panelMaps.offsetWidth;

        /* initialisation position */
        tInit .set(panelMaps,{x:widthMap})
            .set(panelDescription,{x:-widthDesc});
    };




    var marker;
    var elementDetail;
    /* print or clos fct */
    var constructHtml = function(param){

        if(elementDetail)
        {
            panelDescription.removeChild(elementDetail);
            elementDetail = null;
        }
        
        var  importHtml = document.querySelector("#"+param.id);
        elementDetail = importHtml.import.querySelector('.description-detail').cloneNode(true);

        panelDescription.appendChild(elementDetail);


        map.setCenter({lat: 47.2991637, lng: 4.9291713});
        map.setZoom(12);

        var title = panelDescription.querySelector(".title");
        title.innerText = param.nom;




        if(param.latLng)
        {
            marker = new google.maps.Marker({
                position: param.latLng,
                map: map,
                title: 'Mairie de Talant'
            });
        }
    };


    this.print = function(param,callback){
        callBackFct = callback;


       constructHtml(param);

        var tl = new TimelineLite();
        tl .to(panelMaps,1,{x:0,ease: Power2.easeInOut},"-=1")
            .to(panelDescription,1,{x:0,ease: Power2.easeInOut},"-=1");
    };

    this.close = function(){
        var widthDesc = panelDescription.offsetWidth;
        var widthMap = panelMaps.offsetWidth;

        var tl = new TimelineLite();

        tl .to(panelMaps,1,{x:widthMap,ease: Power2.easeInOut},"-=1")
            .to(panelDescription,1,{x:-widthDesc,ease: Power2.easeInOut,onComplete:endClose},"-=1");


        if(marker)
        {
            marker.setMap(null);
            marker= null;
        }
    };
    btnBack.onclick = self.close;

    var endClose = function(){



        if(elementDetail)
        {
            panelDescription.removeChild(elementDetail);
            elementDetail = null;
        }


        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}