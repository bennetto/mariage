function BulleMenu(param) {

    /* private */
    var self = this;

    var bulleContainer = document.createElement('div');
    bulleContainer.className = "bulle-menu";
    bulleContainer.style.backgroundColor = param.background;
    bulleContainer.style.top = param.position.x - param.size/2+"px";
    bulleContainer.style.left = param.position.y- param.size/2+"px";

    bulleContainer.style.height = param.size+"px";
    bulleContainer.style.width = param.size+"px";
    bulleContainer.style.borderRadius = param.size+"px";

    var text = document.createElement('p');
    text.className = "bulle-text";
    text.innerText = param.text;
    text.style.height = param.size+"px";
    text.style.width = param.size+"px";
    text.style.color = "white";

    bulleContainer.appendChild(text);

    var position = param.position;

    var animateActivate =  true;
    var animate = function(){
        if(animateActivate) {

            var ry =  Math.random()*50;
            var rx =   Math.random()*50;

            var tl = new TimelineLite();
            tl.to(bulleContainer, 3, {x:rx,y:ry,ease: Sine.easeIn, onComplete: animate} )
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

    var ryOld = 0;
    var animatey = function() {
        if(animateActivate) {
            var ry = getRandomValue(ryOld);
            ryOld = ry;
            var tl = new TimelineLite();
            tl.to(bulleContainer, 8+Math.random()*4, {y:ry,ease: Sine.easeInOut, onComplete: animatey} )
        }
    };

    var rxOld = 0;
    var animatex = function() {
        if(animateActivate) {
            var rx = getRandomValue(ryOld);
            rxOld = rx;
            var tl = new TimelineLite();
            tl.to(bulleContainer, 8+Math.random()*4, {x:rx,ease: Sine.easeInOut, onComplete: animatex} )
        }
    };


    /* public */

    this.getElement = function(){
        return bulleContainer;
    };

    this.animate = function(){
        animateActivate = true;
        animatey();
        animatex();
    };


}