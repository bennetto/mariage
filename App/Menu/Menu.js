function Menu(param) {

    /* Variable*/
    var self = this;

    /* Récupération du template html */
    var importHtml = document.querySelector('#menu-file');
    var element = importHtml.import.querySelector('.menu').cloneNode(true);
    
    var bulleMenu = element.querySelector(".main-bulle");
    var ellipse1 = bulleMenu.getElementsByTagName("svg")[0].getElementsByTagName("ellipse")[0];
    var ellipse2 = bulleMenu.getElementsByTagName("svg")[0].getElementsByTagName("ellipse")[1];

    var contentMainBulle = bulleMenu.querySelector(".content-main-bulle");
    var textJu = bulleMenu.querySelector(".text-ju");
    var textBen = bulleMenu.querySelector(".text-ben");
    var imageBague = bulleMenu.querySelector(".image-bagues");

    /* IHM */


    /* Function pulic */
    this.init = function(){
        self.firtsAnimate();
        bulleMenu.onclick = click;
    };

    this.firtsAnimate = function(){

        var maxHeight = window.innerHeight;
        var centerHeight = maxHeight/2-250;

        var tl = new TimelineLite();

        /* initialisation position */
        tl .set(ellipse1,{attr:{cy:maxHeight/2}})
            .set(ellipse2,{attr:{cy:maxHeight/2}})
            .set(bulleMenu,{x:0,y:-maxHeight,scale:0,opacity:0,ease: Power2.easeOut})
            .set(contentMainBulle,{y:maxHeight/2-250})

            /*init main centent menu*/
            .set(textBen,{y:320})
            .set(textJu,{y:100})
            .set(imageBague,{y:150})


            /* animation */
            .to(bulleMenu,3,{x:0,y:0,scale:1,opacity:1,ease: Power2.easeOut})
    };

    var modeFullscrenne = true;

    var click = function(){

        if(modeFullscrenne)
        {
            self.AnimateToMenu();
        }else{
            self.AnimateToFullScreen();
        }
        modeFullscrenne = !modeFullscrenne;

    };
    this.AnimateToMenu = function(){

        var width = window.innerWidth;

        var hMiddle = 150;
        var ratio = 1-width/1920;
        var hcote =  100+ (ratio*50);

        var offset =  ((Math.pow(hMiddle-hcote,2) + Math.pow(width/2,2) )/(2*(hMiddle-hcote )))-hMiddle;

        var tl = new TimelineLite();

        tl.to(bulleMenu,3,{x:0,y:0,ease: Power2.easeOut})
            .to(bulleMenu,3,{width:"100%",ease: Power2.easeOut},"-=3")
            .to(ellipse1,3,{attr:{cy:-offset,ry:offset+hMiddle,rx:offset+hMiddle},ease: Power2.easeInOut},"-=3")
            .to(ellipse2,3,{attr:{cy:-offset,ry:offset,rx:offset},ease: Power2.easeInOut},"-=3")
            /* Content main bulle */
            .to(contentMainBulle,3,{y:0,ease: Power2.easeInOut},"-=3")
            .to(textJu,3,{fontSize:40,y:10,x:-60,ease: Power2.easeInOut},"-=3")
            .to(textBen,3,{fontSize:40,y:100,ease: Power2.easeInOut},"-=3")
        .to(imageBague,3,{y:-30,x:60,height:100,width:100,ease: Power2.easeInOut},"-=3");

    };

    this.AnimateToFullScreen= function(){
        var maxHeight = window.innerHeight;

        var tl = new TimelineLite();

        tl.to(ellipse1,3,{attr:{cy:maxHeight/2,rx:237.5,ry:250},ease: Power2.easeOut})
            .to(ellipse2,3,{attr:{cy:maxHeight/2,rx:235,ry:225},ease: Power2.easeOut},"-=3")
            /* Content main bulle */
            .to(contentMainBulle,3,{y:maxHeight/2-250,fontSize:30,ease: Power2.easeInOut},"-=3")
            .to(textJu,3,{fontSize:70,y:100,ease: Power2.easeInOut},"-=3")
            .to(textBen,3,{fontSize:70,y:320,ease: Power2.easeInOut},"-=3")
        .to(imageBague,3,{y:150,x:0,height:200,width:200,ease: Power2.easeInOut},"-=3");
    };

    this.getElement = function(){
        return element;

    };


    /* Function privé */

}