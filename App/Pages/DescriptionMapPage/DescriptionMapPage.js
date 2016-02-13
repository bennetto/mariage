
function DescriptionMapPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */
    var element = Utils.loadHtmlSync("./App/Pages/DescriptionMapPage/DescriptionMapPage.html");

    var panelMaps = element.querySelector('.panel-maps');
    var panelDescription = element.querySelector('.panel-description');

    var btnBack = element.querySelector(".back-button");

    var callBackFct;
    var isClose = true;


/* INIT */
    function initMap() {

        var mapGoogle = document.createElement("div");
        mapGoogle.className = "mapGoogle";


        if (google) {
            map = new google.maps.Map(mapGoogle, {
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true,
                scrollwheel: true
            });

            panelMaps.appendChild(map.getDiv());
        };
    }



        this.init = function () {
            isClose = true;

            element.appendAfter(workspace);

            initMap();

            iniPanel();
        };


        var iniPanel = function () {
            var tInit = new TimelineLite();

            var widthDesc = panelDescription.offsetWidth;
            var widthMap = panelMaps.offsetWidth;

            /* initialisation position */
            tInit.set(panelMaps, {x: widthMap})
                .set(panelDescription, {x: -widthDesc});

        };


        var marker;
        var elementDetail;
        var dodo;
        /* print or clos fct */
        var constructHtml = function (param) {

            if (elementDetail) {
                panelDescription.removeChild(elementDetail);
                elementDetail = null;
            }

            Utils.loadHtml("./App/Pages/DescriptionMapPage/DetailDescription/" + param.nomHtmlFile + ".html", function (el) {

                elementDetail = el.cloneNode(true);

                var list = elementDetail.getElementsByClassName("listHotel");

                if (list && list.length > 0) {
                    dodo = new Dodo(list[0], map);
                    dodo.print();
                }

                panelDescription.appendChild(elementDetail);
            });

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': "794 Rue de Bourgogne, 21410 Sainte-Marie-sur-Ouche"}, function (results, status) {
                if (results && results.length > 0) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(11);
                }
            });

            var title = panelDescription.querySelector(".title");
            title.innerText = param.nom;
            title.textContent = param.nom;

            if (param.latLng && google){
                marker = new google.maps.Marker({
                    position: param.latLng,
                    map: map
                });
            }

        };


        this.print = function (param, callback) {
            callBackFct = callback;

            if(isClose) {
                isClose = false;

                //google analitic
                ga('send', param.nom);

                constructHtml(param);

                var tl = new TimelineLite();
                tl.to(panelMaps, 1, {x: 0, ease: Power2.easeInOut}, "-=1")
                    .to(panelDescription, 1, {x: 0, ease: Power2.easeInOut}, "-=1");
            }
        };

        this.close = function () {
            var widthDesc = panelDescription.offsetWidth;
            var widthMap = panelMaps.offsetWidth;

            var tl = new TimelineLite();

            tl.to(panelMaps, 1, {x: widthMap, ease: Power2.easeInOut}, "-=1")
                .to(panelDescription, 1, {x: -widthDesc, ease: Power2.easeInOut, onComplete: endClose}, "-=1");


            if (marker) {
                marker.setMap(null);
                marker = null;
            }
        };
        btnBack.onclick = self.close;

        this.refresh = function () {

            if (isClose) {
                iniPanel();
            }

        };


        var endClose = function () {
            isClose = true;
            if (elementDetail) {
                panelDescription.removeChild(elementDetail);
                elementDetail = null;
            }

            if (dodo) {
                dodo.remove();
                dodo = null;
            }

            if (callBackFct)
                callBackFct();
        };

        this.getElement = function () {
            return element;
        }
    }