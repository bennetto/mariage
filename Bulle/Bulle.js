
function bulle(param){

    /* Variable*/
    var self = this;

    var container = document.createElement("div");
    container.className="bulle";
    container.style.backgroundColor = "turquoise";
    container.style.position = "absolute";
    var size = 70;
    var scale = 1;
    var position = {};
    position.x= param._positionX;
    position.y= param._positionY;

    var move = {};
    move.x = 0;
    move.y=0;

    var maxMove = param._maxMove;
    var tempsTransitionBulle = param.temps; // en second
    var bulleMustMove = true;




    /*Private function */
    var changeTempsTransform = function(tmp){

        container.style.WebkitTransition = '-webkit-transform '+tmp+'s ease-in-out,left '+1+'s ease-in-out,top '+1+'s ease-in-out,height '+1+'s ease-in-out,width '+1+'s ease-in-out,border-radius '+1+'s ease-in-out';
    };


    var refresh = function(){

        if(bulleMustMove) {
            //calculate move on X
            move.x = (Math.ceil(Math.random() * maxMove * 2) - maxMove);
            if (move.x < 0)
                move.x = 0;
            else if (move.x > window.innerWidth)
                move.x = window.innerWidth;
            //calculate move on y
            move.y = (Math.ceil(Math.random() * maxMove * 2) - maxMove);
            if (move.y < 0)
                move.y = 0;
            else if (move.y > window.innerHeight)
                move.y = window.innerHeight;
            container.style.WebkitTransform = 'translate(' + move.x + 'px,' + move.y + 'px) scale('+scale+')';
        }else{
            container.style.WebkitTransform = 'translate(' + 0 + 'px,' + 0 + 'px) scale('+scale+')';
        }
        //write move

        //add event next move
    };

    var autoRefresh = function() {
        refresh();
        setTimeout(function(){
            window.requestAnimationFrame(autoRefresh,container);
        },tempsTransitionBulle*1000-200);
    };
    autoRefresh();

    window.requestAnimationFrame(refresh,container);


    /*Public Function*/
    this.getElement = function(){
        return container;
    };

    this.refresh = function(){
        refresh();
    };

    this.setSize = function(_size){
        size = _size;

        container.style.height = size+"px";
        container.style.width = size+"px";
        container.style.borderRadius = size+"px";

        container.style.left = position.x - size/2+'px';
        container.style.top = position.y - size/2+'px';
    };

    this.setPosition = function(_position){
        position  = _position;

    };

    this.hasMove = function(_bulleMustMove){
        bulleMustMove = _bulleMustMove;
    };



    /* Initialization*/
    this.setPosition(position);
    this.setSize(size);
    changeTempsTransform(tempsTransitionBulle);

}