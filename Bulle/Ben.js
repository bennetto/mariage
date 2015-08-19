function Ben(_positionX,_positionY,_maxMove,temps){
    var self = this;

    bulle.call(this,_positionX,_positionY,_maxMove,temps);


   var el =  this.getElement();
    this.setImage("Image/Ben.JPG");
    this.setTitre("Ben");
}

Ben.prototype = Object.create(bulle.prototype);
Ben.prototype.constructor = bulle;