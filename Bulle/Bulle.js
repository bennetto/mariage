
function bulle(_positionX,_positionY,_maxMove,temps){

    var self = this;
    var container = document.createElement("div");
    container.className="bulle"
    var size = 70;
    var sizeBig =600;
    var scale = 1;
    var position = {};
    position.x= _positionX;
    position.y= _positionY;

    var move = {};
    move.x = 0;
    move.y=0;

    var maxMove = _maxMove;

    var tempsTransitionBulle = temps; // en second

    var bulleMode = true;
    //content little
    var littleContent = document.createElement("div");
    littleContent.className = "littleContent";
    var image = document.createElement("img");
    littleContent.appendChild(image);
    var text = document.createElement("p");
    littleContent.appendChild(text);

    this.setImage = function(source){
        image.src = source;
    };
    this.setTitre = function(_titre){
        text.innerHTML = _titre;
    };

    //BigContent
    var bigContent = document.createElement("div").className = "bigContent";

    //Container
    container.style.position = "absolute";
    container.style.backgroundColor = "turquoise";

    container.style.height = size+"px";
    container.style.width = size+"px";
    container.style.borderRadius = size+"px";

    container.style.left = position.x+'px';
    container.style.top = position.y+'px';

    container.appendChild(littleContent);

    var changeTempsTransform = function(tmp){

        container.style.WebkitTransition = '-webkit-transform '+tmp+'s ease-in-out,left '+1+'s ease-in-out,top '+1+'s ease-in-out,height '+1+'s ease-in-out,width '+1+'s ease-in-out,border-radius '+1+'s ease-in-out';
    };
    changeTempsTransform(tempsTransitionBulle);

    container.addEventListener('click',function(){
        bulleMode = !bulleMode;
        if(bulleMode){
            container.style.height = size+"px";
            container.style.width = size+"px";
            container.style.borderRadius = size+"px";

            container.style.left = position.x - size/2+'px';
            container.style.top = position.y - size/2+'px';


        }else{
            sizeBig = window.innerHeight-200;

            container.style.height = sizeBig+"px";
            container.style.width = sizeBig+"px";
            container.style.borderRadius = sizeBig+"px";

            container.style.left = (window.innerWidth -sizeBig) /2+'px';
            container.style.top = (window.innerHeight - sizeBig)/2+'px';
        }
        refresh();
    });




    var refresh = function(){
        if(bulleMode) {
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
}