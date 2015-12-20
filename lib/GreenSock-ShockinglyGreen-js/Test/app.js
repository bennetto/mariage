
window.onload = function() {

    var bulle = document.getElementById("bulle");
    var titreBulle = document.getElementById("titreBulle");
    var benJulieTitle =  titreBulle.getElementsByClassName("benJulieTitle");
    var mariageTitle =  titreBulle.getElementsByClassName("mariageTitle");
    var tl = new TimelineLite();

    var maxHeight = window.innerHeight;
    var centerHeight = maxHeight/2-100;

    var tl = new TimelineLite();
    tl.set(titreBulle,{x:0,y:-200,scale:0,opacity:0,ease: Power2.easeOut})
        .set(mariageTitle, {x:0,y:0,ease: Power2.easeOut})
        .set(benJulieTitle, {x:0,y:0,ease: Power2.easeOut})

        .to(titreBulle,3,{x:0,y:centerHeight,scale:2,opacity:1,ease: Power2.easeOut})
        .to(titreBulle,1,{x:0,y:-100,scale:1,ease: Power2.easeOut})
        .to(benJulieTitle, 1, {y:40, ease:Power2.easeOut},'-=1')
        .to(mariageTitle, 1, {y:40, ease:Power2.easeOut},'-=1');

    tl.play(0);

};