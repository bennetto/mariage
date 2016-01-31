function Bulle(param){

    /* private */
    var self = this;
    self.animateActivate =  false;

    param.position = {x:0,y:0};
    param.offsetPosition = {x:0,y:0};
    var bulleContainer = document.createElement('div');

    var maxHeight = window.innerHeight;
    var maxWidth = window.innerWidth;
    var sizeScale;

    /* utils */

    this.getSize = function() {
        return  param.size;
    };
    this.getSizeScale = function() {
        sizeScale = param.size*param.scale;
        return  sizeScale;
    };
    this.getOffsetSize = function() {
        return  self.getSize()-self.getSizeScale();
    };

    this.getPosition= function(){
        var gsTransform = bulleContainer._gsTransform;
        if(gsTransform) {

            var positionX = sizeScale/2 + gsTransform.x + bulleContainer.offsetLeft;
            var positionY =  sizeScale/2 + gsTransform.y + bulleContainer.offsetTop;

            return position = {
                x: positionX,
                y: positionY
            }
        }
        else{
            return position = {
                x:0,
                y:0
            }
        }

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
        if(self.animateActivate) {
            var ry = getRandomValue(ryOld);
            ryOld = ry;
            TweenLite.to(bulleContainer, 8+Math.random()*4, {y:ry,ease: Sine.easeInOut, onComplete: animatey} )
        }
    };

    var rxOld = 0;
    var animatex = function() {
        if(self.animateActivate) {
            var rx = getRandomValue(ryOld);
            rxOld = rx;
            TweenLite.to(bulleContainer, 8+Math.random()*4, {x:rx,ease: Sine.easeInOut, onComplete: animatex} )
        }
    };

    var animaterot = function() {
        if(self.animateActivate) {
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

        if(self.animateActivate == false)
        {
            self.animateActivate = true;
            animatey();
            animatex();
           // animaterot();
            if(self.animateSpec)
                self.animateSpec();

        }else{
            self.animateActivate = true;
        }
    };

    this.stopAnimate = function(){
        self.animateActivate = false;
        TweenLite.to(bulleContainer, 1, {x:0,y:0,rotation:0,ease: Sine.easeInOut} )

    };

    this.refresh = function(withAnimate,callback){

        maxHeight = window.innerHeight;
        maxWidth = window.innerWidth;

        var positionX = param.position.x*maxWidth - self.getSize()/2 + param.offsetPosition.x;
        var positionY =param.position.y*maxHeight - self.getSize()/2+ param.offsetPosition.y;

        /* refresh bull container */
        if(withAnimate != null && withAnimate) {
            TweenLite.to(bulleContainer, 1.5 + Math.random() * 1, {
                css: {top: positionY+"px", left: positionX+"px",scale:param.scale},
                ease: Sine.easeInOut,
                onComplete:callback
            });
        }else{
            bulleContainer.style.top = positionY +"px";
            bulleContainer.style.left = positionX+"px";

        }

        bulleContainer.style.height = param.size+"px";
        bulleContainer.style.width = param.size+"px";
        bulleContainer.style.borderRadius = param.size+"px";

        var s = self.getSizeScale();
        /* refresh spec */
        if(self.refreshSpec)
        {
            self.refreshSpec();
        }
    };
}