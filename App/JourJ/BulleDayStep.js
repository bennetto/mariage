function BulleDayStep(param) {

    Bulle.call(this,param);
    /* private */
    var self = this;

    /* construction de la  bulle */
    var bulleContainer = self.getElement();

    bulleContainer.className = "bulle-day-step";
    bulleContainer.style.backgroundColor = param.background;

    var text = document.createElement('p');
    text.className = "bulle-text";
    text.innerText = param.text;

    text.style.color = "white";


    bulleContainer.appendChild(text);

    /* public */
    this.goToInit = function(){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:param.positionLine/10,y:4/2};

        self.refresh();
        self.goToTimeLine();
    };

    this.goToOut = function(callback){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:param.positionLine/10,y:4/2};

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

        var y = Math.random()*2/4 + 1/4;

        param.position = {x:param.positionLine/10,y:y};

        self.refresh(true);

        self.animate();
    };

    this.refreshSpec = function()
    {
        text.style.height = param.size+"px";
        text.style.width = param.size+"px";
    }
}

BulleDayStep.prototype = Object.create(Bulle.prototype);
BulleDayStep.prototype.constructor = Bulle;