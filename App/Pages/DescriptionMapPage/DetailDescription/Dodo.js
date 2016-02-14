
function Dodo(container,map) {

    /* Variable*/
    var self = this;


    var hotelContainer = container.getElementsByClassName("hotel")[0];
    //remove all child of hotel
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var markers = [];
    this.print = function(){

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        markers = [];
        var labelIndex = -1;
        var labelIndex2 = 0;
        hotels.forEach(function(hotel){
            var cont = hotelContainer.cloneNode(true);

            var img = cont.getElementsByClassName("imgHotel")[0];
            img.src = "./Assets/Hotels/"+hotel.img;

            var nom = cont.getElementsByClassName("nomHotel")[0];
            nom.innerText = labels[labelIndex++ % labels.length]+" - "+hotel.nom;
            nom.textContent = labels[labelIndex % labels.length]+" - "+hotel.nom;

            var desc = cont.getElementsByClassName("descriptionHotel")[0];
            desc.innerText = hotel.desc;
            desc.textContent = hotel.desc;

            var addr = cont.getElementsByClassName("adresseHotel")[0];
            addr.innerText = hotel.adresse;
            addr.textContent = hotel.adresse;

            var tmp = cont.getElementsByClassName("tempsHotel")[0];
            tmp.innerText = hotel.temps +" min";
            tmp.textContent = hotel.temps+" min";

            var num = cont.getElementsByClassName("numHotel")[0];
            num.innerText = hotel.tel ;
            num.textContent = hotel.tel;

            var site = cont.getElementsByClassName("siteHotel")[0];
            site.href = hotel.site;

            container.appendChild(cont);

            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ 'address': hotel.adresse}, function(results, status) {
                if(results && results.length>0){
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        label: labels[labelIndex2++ % labels.length]
                    });
                    markers.push(marker);
                }
             });
        });
    };


    this.remove = function(){
        while (markers.length>0)
        {
            markers[markers.length - 1].setMap(null);
            markers.pop();
        }
        markers = null;
    };
}


var hotels = [
    {
        img:"LeSpuller.PNG",
        nom:"Logis Hôtel Le Spuller",
        desc:"",
        adresse:"42 Rue Ferdinand Mercusot, 21540 Sombernon",
        tel:"03 80 53 71 27",
        temps:"10",
        site:"http://www.logishotels.com/fr/hotel/hotel-le-spuller-165510?partid=661"
    },
    {
        img:"hotel.png",
        nom:"Le Bellevue",
        desc:"",
        adresse:"30, rue de la Libération 21540 Sombernon",
        tel:"03 80 33 40 52",
        temps:"10",
        site:"http://www.cotedor-tourisme.com/node/36/hotel-restaurant-le-bellevue_HOTBOU0210020692_fiche.html"
    },
    {
        img:"LesLibellules.PNG",
        nom:"Chambre d’hôtes Les Libellules",
        desc:"",
        adresse:"90 C, rue de Velars - 21370 Plombières Les Dijon",
        tel:"03 80 42 00 19",
        temps:"15",
        site:"http://www.chambres-hotes.fr/chambres-hotes_les-libellules_plombieres-les-dijon_7928.htm"
    },
    {
        img:"Ibis_Pouilly.PNG",
        nom:"Hôtel Ibis Budget",
        desc:"",
        adresse:"AVENUE GEORGES BESSE - 21320 - POUILLY EN AUXOIS",
        tel:"08 92 68 09 43",
        temps:"15",
        site:"http://www.ibis.com/fr/hotel-5508-ibis-budget-pouilly-en-auxois/index.shtml"
    },
    {
        img:"Castel_Burgond.PNG",
        nom:"Hôtel Castel Burgond",
        desc:"",
        adresse:"3 Route de Troyes, 21121 Daix",
        tel:"03 80 56 59 72",
        temps:"15",
        site:"http://www.hotel-dijon-castel-burgond.com/"
    },
    {
        img:"Ibis_DijonGare.PNG",
        nom:"Hôtel Ibis Dijon Gare",
        desc:"",
        adresse:"15A Avenue Albert 1er, 21000 Dijon",
        tel:"03 80 43 01 12",
        temps:"20",
        site:"http://www.hotel-ibisgare-dijon.fr/"
    },
    {
        img:"Campanile_DijonNord.PNG",
        nom:"Hôtel Campanile Dijon Nord",
        desc:"",
        adresse:"ZAC de la Toison d'Or, Allée Alfred Nobel, 21100 Dijon",
        tel:"03 80 74 41 00",
        temps:"20",
        site:"http://www.campanile.com/fr/hotels/campanile-dijon-nord-toison-dor"
    },
    {
        img:"PremiereClasse.PNG",
        nom:"Hôtel Première Classe Dijon Nord",
        desc:"",
        adresse:"6 Rue des Ardennes, 21000 Dijon",
        tel:"03 80 70 12 88",
        temps:"20",
        site:"http://www.premiereclasse.com/fr/hotels/premiere-classe-dijon-nord"
    },
    {
        img:"BandB_DijonCentre.PNG",
        nom:"Hôtel B&B Dijon Centre",
        desc:"",
        adresse:"5 Rue du Château, 21000 Dijon",
        tel:"0 892 70 75 06",
        temps:"20",
        site:"http://www.hotel-bb.com/fr/hotels/dijon-centre.htm"
    },
    {
        img:"BandB_DijonNord.PNG",
        nom:"Hôtel B&B Dijon Nord",
        desc:"",
        adresse:"1 Rue des Ardennes, 21000 Dijon",
        tel:"0 892 70 75 06",
        temps:"20",
        site:"http://www.hotel-bb.com/fr/hotels/dijon-nord.htm"
    }


];