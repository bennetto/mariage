function BullePersonne(personne,param){
    var _this = this;

    bulle.call(this,param);
    var container = this.getElement();

    var positionInit = {};
    positionInit.x= param._positionX;
    positionInit.y= param._positionY;




    //content little
    var littleContent = document.createElement("div");
    littleContent.className = "littleContent";
    var image = document.createElement("img");
    littleContent.appendChild(image);
    var text = document.createElement("p");
    littleContent.appendChild(text);

    container.appendChild(littleContent);

    image.src = personne.image;
    text.innerHTML = personne.nom;

    //BigContent
    var bigContent = document.createElement("div").className = "bigContent";

    var bulleMode = true;
    container.addEventListener('click',function(){
        bulleMode = !bulleMode;
        _this.hasMove(bulleMode);
        if(bulleMode){
            _this.setPosition(positionInit);
            _this.setSize(70);
        }else{
            var positionCentrer = {};
            positionCentrer.x= window.innerWidth/2;
            positionCentrer.y= window.innerHeight/2;

            _this.setPosition(positionCentrer);
            _this.setSize(window.innerHeight-200);
        }
        _this.refresh();
    });

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