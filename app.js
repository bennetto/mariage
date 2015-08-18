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
    var div = document.createElement("div");
    
    var size = 70;
    
    var position = {};
    position.x= _positionX;
    position.y= _positionY;
    
    var move = {};
    move.x = 0;
    move.y=0;
    
    var maxMove = _maxMove; 

    var tempsTransition = temps; // en second

    div.style.position = "absolute";
    div.style.backgroundColor = "turquoise";
    
    div.style.height = size+"px";
    div.style.width = size+"px";
    div.style.borderRadius = size+"px";
    div.style.WebkitTransition = '-webkit-transform '+tempsTransition+'s ease-in-out,right '+1+'s ease-in-out,left '+1+'s ease-in-out';
    div.style.left = position.x+'px';
    div.style.marginTop = position.y+'px';


    var refresh = function(){

        //calculate move on X
        move.x = (Math.ceil(Math.random()*maxMove*2)-maxMove);
        if(move.x<0)
            move.x=0;
        else if(move.x>window.innerWidth)
            move.x = window.innerWidth;
         //calculate move on y   
        move.y = (Math.ceil(Math.random()*maxMove*2)-maxMove);
        if(move.y<0)
            move.y=0;
        else if(move.y>window.innerHeight)
            move.y = window.innerHeight;
        
        //write move    
        div.style.WebkitTransform = 'translate('+move.x+'px,'+move.y+'px)';

        //add event next move
        setTimeout(function(){
            window.requestAnimationFrame(refresh,div);
        },tempsTransition*1000-200);
    };
    window.requestAnimationFrame(refresh,div);


/*Public Function*/
    this.getElement = function(){
        return div;
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