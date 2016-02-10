
function Dodo(container,map) {

    /* Variable*/
    var self = this;


    var hotelContainer = container.getElementsByClassName("hotel")[0];
    //remove all child of hotel
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    var addHotelInContainer = function(){

        hotels.forEach(function(hotel){
            var cont = hotelContainer.cloneNode(true);

            var img = cont.getElementsByClassName("imgHotel")[0];
            img.src = "./Assets/Hotels/"+hotel.img;

            var nom = cont.getElementsByClassName("nomHotel")[0];
            nom.innerText = hotel.nom;
            nom.textContent = hotel.nom;

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
        });



    };
    addHotelInContainer();
}


var hotels = [
    {
        img:"LeSpuller.png",
        nom:"Logis Hôtel Le Spuller",
        desc:"",
        adresse:"42 Rue Ferdinand Mercusot, 21540 Sombernon",
        tel:"03 80 53 71 27",
        temps:"10",
        site:"http://www.logishotels.com/fr/hotel/hotel-le-spuller-165510?partid=661"
    },
    {
        img:"",
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
        img:"",
        nom:"Hôtel Ibis Dijon Gare",
        desc:"",
        adresse:"15A Avenue Albert 1er, 21000 Dijon",
        tel:"03 80 43 01 12",
        temps:"20",
        site:"http://www.hotel-ibisgare-dijon.fr/"
    }


];