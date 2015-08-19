/**
 * Created by benjamin on 17/08/2015.
 */

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function getValueInCss(style){
    var tab = style.split("px");
    return parseFloat(tab[0]);
}


function bulle(_positionX,_positionY,_maxMove,temps){

    var self = this;
    var container = document.createElement("div");
    
    var size = 70;
    var scale = 1;
    var position = {};
    position.x= _positionX;
    position.y= _positionY;
    
    var move = {};
    move.x = 0;
    move.y=0;
    
    var maxMove = _maxMove; 

    var tempsTransitionBulle = temps; // en second

    var bulleMode = true;
    //content little
    var littleContent = document.createElement("div");
    littleContent.className = "littleContent";
    var image = document.createElement("img");
    littleContent.appendChild(image);
    var text = document.createElement("p");
    littleContent.appendChild(text);

    this.setImage = function(source){
        image.src = source;
    };
    this.setTitre = function(_titre){
        text.src = _titre;
    };

    //BigContent
    var bigContent = document.createElement("div").className = "bigContent";

    //Container
    container.style.position = "absolute";
    container.style.backgroundColor = "turquoise";

    container.style.height = size+"px";
    container.style.width = size+"px";
    container.style.borderRadius = size+"px";

    container.style.left = position.x+'px';
    container.style.marginTop = position.y+'px';

    var changeTempsTransform = function(tmp){

        container.style.WebkitTransition = '-webkit-transform '+tmp+'s ease-in-out,right '+1+'s ease-in-out,left '+1+'s ease-in-out';
    };
    changeTempsTransform(tempsTransitionBulle);

    container.addEventListener('click',function(){
        bulleMode = !bulleMode;
        if(bulleMode){
            changeTempsTransform(1);
            scale = 1;
            setTimeout(function() {
                changeTempsTransform(tempsTransitionBulle);
            },1000);
        }else{
            changeTempsTransform(1);
            scale = 10;
        }
        refresh();
    });




    var refresh = function(){
        if(bulleMode) {
            //calculate move on X
            move.x = (Math.ceil(Math.random() * maxMove * 2) - maxMove);
            if (move.x < 0)
                move.x = 0;
            else if (move.x > window.innerWidth)
                move.x = window.innerWidth;
            //calculate move on y
            move.y = (Math.ceil(Math.random() * maxMove * 2) - maxMove);
            if (move.y < 0)
                move.y = 0;
            else if (move.y > window.innerHeight)
                move.y = window.innerHeight;
        }
        //write move
        container.style.WebkitTransform = 'translate(' + move.x + 'px,' + move.y + 'px) scale('+scale+')';

        //add event next move


    };

    var autoRefresh = function() {
        refresh();
        setTimeout(function(){
            window.requestAnimationFrame(autoRefresh,container);
        },tempsTransitionBulle*1000-200);
    };
    autoRefresh();

    window.requestAnimationFrame(refresh,container);


/*Public Function*/
    this.getElement = function(){
        return container;
    };




}


window.onload = function(){

    var bulleContainer = document.getElementById("bulleContainer");

      var bulles = [];
     bulles.push(new bulle(window.innerWidth/3,window.innerHeight/1.2,90,8));
     bulles.push(new bulle(window.innerWidth/5,window.innerHeight/4,100,10));
     bulles.push(new bulle(window.innerWidth/1.3,window.innerHeight/9,130,12));
     bulles.push(new bulle(window.innerWidth/1.7,window.innerHeight/1.5,110,11));
     bulles.push(new bulle(window.innerWidth/4,window.innerHeight/3,190,7));
     bulles.push(new bulle(window.innerWidth/2,window.innerHeight/2,150,9));

    for(var i=0;i<bulles.length;i++){
      bulleContainer.appendChild(bulles[i].getElement());
    }


    var start = null;


    function refresh(){
        b.refresh();
    }


};