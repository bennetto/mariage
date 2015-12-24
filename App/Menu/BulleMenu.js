function BulleMenu(param) {

    /* private */
    var self = this;
    var animateActivate =  true;
    param.position = {x:0,y:0};
    param.offsetPosition = {x:0,y:0};

    /* construction de la  bulle */
    var bulleContainer = document.createElement('div');
    bulleContainer.className = "bulle-menu";
    bulleContainer.style.backgroundColor = param.background;


    var text = document.createElement('p');
    text.className = "bulle-text";
    text.innerText = param.text;

    text.style.color = "white";

    bulleContainer.appendChild(text);



 /* utils */
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


    var getSize = function() {
        return  param.size;
    };
    var getSizeScale = function() {
        return  param.size*param.scale;
    };
    var getOffsetSize = function() {
        return  getSize()-getSizeScale();
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

        if(animateActivate = false)
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
    };

    this.goToInit = function(){
        param.scale = 1;
        param.offsetPosition = {x:0,y:0};
        if(param.positionMenu == 1)
        {
            param.position = {x:-1/4,y:-1/4};
        }else if(param.positionMenu == 2)
        {
            param.position = {x:5/4,y:5/4};
        }else if(param.positionMenu == 3)
        {
            param.position = {x:-1/4,y:5/4};
        }else if(param.positionMenu == 4)
        {
            param.position = {x:5/4,y:-1/4};
        }
        self.refresh();

    };

    this.goToMenu = function(){
        param.scale =  0.6;
        param.offsetPosition = {x:0,y: 100};

        if(param.positionMenu == 1)
        {
            param.position = {x:3/10,y:0};
        }else if(param.positionMenu == 2)
        {
            param.position = {x:4/10,y:0};
        }else if(param.positionMenu == 3)
        {
            param.position = {x:6/10,y:0};
        }else if(param.positionMenu == 4)
        {
            param.position = {x:7/10,y:0};
        }
        self.refresh(true);
        self.stopAnimate();
    };

    this.goTo = function(){
        param.scale = 0.8;
        param.offsetPosition = {x:50+getSizeScale()/2,y:150+getSizeScale()/2};
        param.position = {x:0,y:0};
        self.refresh(true);
        self.stopAnimate();
    };

    this.goToHome = function(){
        param.scale = 1;
        param.offsetPosition = {x:0,y:0};
        if(param.positionMenu == 1)
        {
            param.position = {x:1/4,y:1/4};
        }else if(param.positionMenu == 2)
        {
            param.position = {x:3/4,y:3/4};
        }else if(param.positionMenu == 3)
        {
            param.position = {x:1/4,y:3/4};
        }else if(param.positionMenu == 4)
        {
            param.position = {x:3/4,y:1/4};
        }



        self.refresh(true);
        self.animate();


    };


    this.refresh = function(withAnimate){

        var maxHeight = window.innerHeight;
        var maxWidth = window.innerWidth;

        var positionX = param.position.x*maxWidth - getSize()/2 + param.offsetPosition.x;
        var positionY =param.position.y*maxHeight - getSize()/2+ param.offsetPosition.y;

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

        /* refresh text */
        text.style.height = param.size+"px";
        text.style.width = param.size+"px";
    };

}