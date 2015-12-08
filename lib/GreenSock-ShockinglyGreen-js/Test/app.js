
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
        .to(titreBulle,3,{x:0,y:centerHeight,scale:2,opacity:1,ease: Power2.easeOut,
            onComplete:function() {
                tlTextMariage.play(0);
                tlTextBenJulie.play(0);
            }})
        .to(titreBulle,1,{})
        .to(titreBulle,1,{x:0,y:-100,scale:1,ease: Power2.easeOut});


    var tlTextMariage = new TimelineLite();
    tlTextMariage.set(mariageTitle, {x:0,y:0,ease: Power2.easeOut})

        .to(titreBulle,1,{})
        .to(mariageTitle, 1, {y:40, ease:Power2.easeOut});
    tlTextMariage.pause();

    var tlTextBenJulie = new TimelineLite();
    tlTextBenJulie.set(benJulieTitle, {x:0,y:0,ease: Power2.easeOut})
        .to(benJulieTitle, 1, {text:"Ben et Julie", ease:Linear.easeNone})
        .to(titreBulle,1,{})
        .to(benJulieTitle, 1, {y:40, ease:Power2.easeOut});
    tlTextBenJulie.pause();


    tl.play(0);

  // TweenLite.to(bulle, 1.5, {width:200,height:200,ease: Power2.easeOut});

 //   TweenLite.to(bulle, 2, {physics2D:{velocity:300, angle:-60, gravity:400}});
  //  TweenLite.to(bulle, 2, {physics2D:{velocity:300, angle:-60, friction:0.1}});
  //  TweenLite.to(bulle, 2, {physics2D:{velocity:300, angle:-60, acceleration:50, accelerationAngle:180}});

};