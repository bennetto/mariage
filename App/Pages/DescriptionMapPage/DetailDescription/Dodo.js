
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

            var site = cont.getElementsByClassName("nomHotel")[0];
            site.innerText = hotel.site;
            site.textContent = hotel.site;


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
    }


];