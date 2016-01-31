function BulleDayStep(param) {

    Bulle.call(this,param);
    /* private */
    var self = this;

    /* construction de la  bulle */
    var bulleContainer = self.getElement();

    bulleContainer.className = "bulle-day-step";


    var bulleCenter = document.createElement('div');
    bulleCenter.className = "bulle-day-step-center";
    bulleCenter.style.backgroundColor = param.background;




    var text = document.createElement('p');
    text.className = "bulle-text";
    text.innerText = param.text;

    text.style.color = "white";
    bulleCenter.appendChild(text);
    bulleContainer.appendChild(bulleCenter);

    var textHeure = document.createElement('p');
    textHeure.className = "bulle-text-heure";
    textHeure.innerText = param.heure;

    textHeure.style.color = "black";
    bulleContainer.appendChild(textHeure);



    /* public */
    this.goToInit = function(){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:param.positionLine/12,y:4/2};

        self.refresh();
        self.goToTimeLine();
    };

    this.goToOut = function(callback){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:param.positionLine/12,y:4/2};

        self.refresh(true,function(){
            self.stopAnimate();
            if(callback)
                callback();
            //workspace.removeChild(bulleContainer);
        });
    };

    this.goToTimeLine = function(){
        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        // cacul aléatoire de la position vertical des bulles sauf pour la premiére bulle pour pas quelle s'entrechoque avec le menu
        var y = 1/2;
        if(param.positionLine != 1)
        {
            y = Math.random()*2/4 + 0.30;
        }

        param.position = {x:param.positionLine/12,y:y};

        self.refresh(true);

       self.animate();
    };


    var animateSpecRot = function() {
        if(self.animateActivate) {
            var rot = Math.random()*100-50;
            TweenLite.to(textHeure, 8+Math.random()*4, {css:{rotation:rot},ease: Sine.easeInOut, onComplete: animateSpecRot} )
        }
    };

    this.animateSpec= function(){
        animateSpecRot();
    };



    this.refreshSpec = function()
    {
        text.style.height = param.size-50+"px";
        text.style.width = param.size-50+"px";

        textHeure.style.height = param.size+"px";
        textHeure.style.width = param.size+"px";

        bulleCenter.style.height = param.size-50+"px";
        bulleCenter.style.width = param.size-50+"px";
        bulleCenter.style.borderRadius = param.size-50+"px";
    }
}

BulleDayStep.prototype = Object.create(Bulle.prototype);
BulleDayStep.prototype.constructor = Bulle;