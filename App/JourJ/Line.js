function Line(bulle1,bulle2,param){

var self = this;



    var element = document.createElementNS('http://www.w3.org/2000/svg','svg');
    element.style.height = "100%";
    element.style.width = "100%";
    element.style.position = "absolute";


/*
 <svg style="height: 100%;width: 100%;position: absolute;"><path stroke="#028c7e" stroke-width="4" fill="none" d="M 100 350 q 150 -300 300 0"></path>



 </svg>
 */
    //<path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />


    var path = document.createElementNS("http://www.w3.org/2000/svg",'path');
    path.setAttribute('stroke', param.color);
    path.setAttribute('stroke-width', param.size);
    path.setAttribute('fill', "none");
    path.setAttribute("stroke-dasharray","20,10");
    path.style.opacity = "0.2"


    element.appendChild(path);


    function refresh() {
        if(activate) {
            requestAnimationFrame(refresh);

            var positionBulle1 = bulle1.getPosition();
            var positionBulle2 = bulle2.getPosition();

            path.setAttribute('d',"M "+positionBulle1.x+" "+positionBulle1.y+" "+positionBulle2.x+" "+positionBulle2.y+" ");
        }
    }


    var activate = false;
    this.init = function(){

        activate = true;
        refresh();

    };

    this.remove = function(){
        activate = false;
    };

    this.getElement = function(){
       return element;
    };

}