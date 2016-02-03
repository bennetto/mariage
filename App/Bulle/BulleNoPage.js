function BulleNoPage(param) {

    Bulle.call(this,param);
    /* private */
    var self = this;

    /* construction de la  bulle */
    var bulleContainer = self.getElement();

    bulleContainer.className = "bulle-no-page";
    bulleContainer.style.backgroundColor = param.background;

    var text = document.createElement('p');
    text.className = "bulle-text";
    text.innerText = param.text;
    text.textContent = param.text;

    text.style.color = "white";

    bulleContainer.appendChild(text);

    /* public */
    this.goToInit = function(){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:1/2,y:4/2};

        self.refresh();
        self.goToCenter();
    };

    this.goToCenter = function(){
        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:1/2,y:1/2};

        self.refresh(true);

        self.animate();
    };

    this.goToOut = function(callback){

        param.scale = 1;
        param.offsetPosition = {x:0,y:0};

        param.position = {x:1/2,y:4/2};

        self.refresh(true,function(){
            self.stopAnimate();
            if(callback)
                callback();
        });
    };

    this.refreshSpec = function()
    {
        text.style.height = param.size+"px";
        text.style.width = param.size+"px";
    }
}

BulleNoPage.prototype = Object.create(Bulle.prototype);
BulleNoPage.prototype.constructor = Bulle;