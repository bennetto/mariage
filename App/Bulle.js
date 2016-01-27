function Bulle(param){

    /* private */
    var self = this;
    var animateActivate =  false;

    var bulleContainer = document.createElement('div');


    /* utils */

    this.getSize = function() {
        return  param.size;
    };
    this.getSizeScale = function() {
        return  param.size*param.scale;
    };
    this.getOffsetSize = function() {
        return  self.getSize()-self.getSizeScale();
    };

    var getRandomValue = function(old) {
        var minValue = -50;
        var maxValue = 50;
        var deplacementMin = 25;

        var r = minValue+Math.random()*(maxValue-minValue-25*2);


        if(r<(old-deplacementMin))
        {
            var value = r;
        }else{
            var value = r-old-deplacementMin+deplacementMin*2;
        }

        return value;
    };


    /* animation */
    var ryOld = 0;
    var animatey = function() {
        if(animateActivate) {
            var ry = getRandomValue(ryOld);
            ryOld = ry;
            TweenLite.to(bulleContainer, 8+Math.random()*4, {y:ry,ease: Sine.easeInOut, onComplete: animatey} )
        }
    };

    var rxOld = 0;
    var animatex = function() {
        if(animateActivate) {
            var rx = getRandomValue(ryOld);
            rxOld = rx;
            TweenLite.to(bulleContainer, 8+Math.random()*4, {x:rx,ease: Sine.easeInOut, onComplete: animatex} )
        }
    };

    var animaterot = function() {
        if(animateActivate) {
            var rot = Math.random()*50-25;
            var scale = Math.random()/5+0.8;
            TweenLite.to(bulleContainer, 8+Math.random()*4, {css:{scale:scale, rotation:rot},ease: Sine.easeInOut, onComplete: animaterot} )
        }
    };


    /* public */

    this.getElement = function(){
        return bulleContainer;
    };

    this.animate = function(){

        if(animateActivate == false)
        {
            animateActivate = true;
            animatey();
            animatex();
            animaterot();
        }else{
            animateActivate = true;
        }
    };

    this.stopAnimate = function(){
        animateActivate = false;
        TweenLite.to(bulleContainer, 1, {x:0,y:0,rotation:0,ease: Sine.easeInOut} )
    };

    this.refresh = function(withAnimate){

        var maxHeight = window.innerHeight;
        var maxWidth = window.innerWidth;

        var positionX = param.position.x*maxWidth - self.getSize()/2 + param.offsetPosition.x;
        var positionY =param.position.y*maxHeight - self.getSize()/2+ param.offsetPosition.y;

        /* refresh bull container */
        if(withAnimate != null && withAnimate) {
            TweenLite.to(bulleContainer, 1 + Math.random() * 1, {
                css: {top: positionY+"px", left: positionX+"px",scale:param.scale},
                ease: Sine.easeOut
            })
        }else{
            bulleContainer.style.top = positionY +"px";
            bulleContainer.style.left = positionX+"px";

        }

        bulleContainer.style.height = param.size+"px";
        bulleContainer.style.width = param.size+"px";
        bulleContainer.style.borderRadius = param.size+"px";

        /* refresh spec */
        if(self.refreshSpec)
        {
            self.refreshSpec();
        }
    };
}