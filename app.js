/**
 * Created by benjamin on 17/08/2015.
 */

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function getValueInCss(style){
    var tab = style.split("px");
    return parseFloat(tab[0]);
}




window.onload = function(){

    var bulleContainer = document.getElementById("bulleContainer");

      var bulles = [];
     bulles.push(new Ben(window.innerWidth/3,window.innerHeight/1.2,90,8));
     bulles.push(new Julie(window.innerWidth/5,window.innerHeight/4,100,10));
     bulles.push(new bulle(window.innerWidth/1.3,window.innerHeight/9,130,12));
     bulles.push(new bulle(window.innerWidth/1.7,window.innerHeight/1.5,110,11));
     bulles.push(new bulle(window.innerWidth/4,window.innerHeight/3,190,7));
     bulles.push(new bulle(window.innerWidth/2,window.innerHeight/2,150,9));

    for(var i=0;i<bulles.length;i++){
      bulleContainer.appendChild(bulles[i].getElement());
    }
    new Ben();

    var start = null;


    function refresh(){
        b.refresh();
    }


};