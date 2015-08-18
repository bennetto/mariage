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
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.borderRadius = "50px";
    div.style.WebkitTransition = '-webkit-transform '+tempsTransition+'s linear';
    div.style.marginLeft = position.x+'px';
    div.style.marginTop = position.y+'px';

    var refresh = function(){

        move.x = (Math.ceil(Math.random()*maxMove*2)-maxMove);
        if(move.x<0)
            move.x=0;
        else if(move.x>window.innerWidth)
            move.x = window.innerWidth;
            
        move.y = (Math.ceil(Math.random()*maxMove*2)-maxMove);
        if(move.y<0)
            move.y=0;
        else if(move.y>window.innerHeight)
            move.y = window.innerHeight;
            
        div.style.WebkitTransform = 'translate('+move.x+'px,'+move.y+'px)';

        setTimeout(function(){
            window.requestAnimationFrame(refresh,div);
        },tempsTransition*1000-200);
      //  div.style.marginTop =  (getValueInCss(div.style.marginTop)+0.1)+"px";
      //  div.style.marginLeft =  (getValueInCss(div.style.marginLeft)+0.1)+"px";
    };
    window.requestAnimationFrame(refresh,div);


    this.getElement = function(){
        return div;
    };

}


window.onload = function(){

    var bulleContainer = document.getElementById("bulleContainer");

      var bulles = [];
     bulles.push(new bulle(window.innerWidth/3,window.innerHeight/2,100,8));
     bulles.push(new bulle(window.innerWidth/5,window.innerHeight/4,100,10));
     bulles.push(new bulle(window.innerWidth/1.3,window.innerHeight/4,100,12));

    for(var i=0;i<bulles.length;i++){
      bulleContainer.appendChild(bulles[i].getElement());
    }


    



    var start = null;


    function refresh(){
        b.refresh();
    }


};