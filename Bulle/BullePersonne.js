function BullePersonne(personne,param){
    var self = this;

    bulle.call(this,param);
    var container = this.getElement();


    //content little
    var littleContent = document.createElement("div");
    littleContent.className = "littleContent";
    var image = document.createElement("img");
    littleContent.appendChild(image);
    var text = document.createElement("p");
    littleContent.appendChild(text);

    container.appendChild(littleContent);

    //BigContent
    var bigContent = document.createElement("div").className = "bigContent";

    image.src = personne.image;
    text.innerHTML = personne.nom;
    /*Public*/
    this.setImage = function(source){
        image.src = source;
    };
    this.setTitre = function(_titre){
        text.innerHTML = _titre;
    };

}

BullePersonne.prototype = Object.create(bulle.prototype);
BullePersonne.prototype.constructor = bulle;