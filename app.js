/**
 * Created by benjamin on 17/08/2015.
 */

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function getValueInCss(style){
    var tab = style.split("px");
    return parseFloat(tab[0]);
}


function bulle(){

    var self = this;
    var div = document.createElement("div");

    var x =10;
    var y = 10;
    var tempsTransition = 2; // en second

    div.style.backgroundColor = "turquoise";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.borderRadius = "50px";
    div.style.WebkitTransition = '-webkit-transform '+tempsTransition+'s';


    var refresh = function(){

        x += (Math.ceil(Math.random()*400)-200);
        if(x<0)
            x=0;
        else if(x>window.innerWidth)
            x = window.innerWidth;
        y += (Math.ceil(Math.random()*400)-200);
        if(y<0)
            y=0;
        else if(y>window.innerHeight)
            y = window.innerHeight;
        div.style.WebkitTransform = 'translate('+x+'px,'+y+'px)';

        setTimeout(function(){
            window.requestAnimationFrame(refresh,div);
        },tempsTransition*1000-100);
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

    var b = new bulle();

    bulleContainer.appendChild(b.getElement());



    var start = null;


    function refresh(){
        b.refresh();
    }


};