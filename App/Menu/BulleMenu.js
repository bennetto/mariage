function BulleMenu(param) {

    Bulle.call(this,param);

    /* private */
    var self = this;
    var animateActivate =  false;
    param.position = {x:0,y:0};
    param.offsetPosition = {x:0,y:0};

    /* construction de la  bulle */
    var bulleContainer = self.getElement();

    bulleContainer.className = "bulle-menu";
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
            param.position = {x:2/10,y:0};
        }else if(param.positionMenu == 2)
        {
            param.position = {x:3/10,y:0};
        }else if(param.positionMenu == 3)
        {
            param.position = {x:7/10,y:0};
        }else if(param.positionMenu == 4)
        {
            param.position = {x:8/10,y:0};
        }
        self.refresh(true);
        self.stopAnimate();
    };

    this.goTo = function(){
        param.scale = 0.8;
        param.offsetPosition = {x:50+self.getSizeScale()/2,y:150+self.getSizeScale()/2};
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

    this.refreshSpec = function()
    {
        text.style.height = param.size+"px";
        text.style.width = param.size+"px";
    }

}

BulleMenu.prototype = Object.create(Bulle.prototype);
BulleMenu.prototype.constructor = Bulle;