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

     bulles.push(new BullePersonne({nom:"Benjamin",image:"Image/Ben.JPG"},{_positionX:window.innerWidth/3,_positionY:window.innerHeight/1.2,_maxMove:90,temps:8}));
     bulles.push(new BullePersonne({nom:"Julie",image:"Image/julie.jpg"},{_positionX:window.innerWidth/5,_positionY:window.innerHeight/1.5,_maxMove:100,temps:8}));



    for(var i=0;i<bulles.length;i++){
      bulleContainer.appendChild(bulles[i].getElement());
    }


    var start = null;


    function refresh(){
        b.refresh();
    }


};