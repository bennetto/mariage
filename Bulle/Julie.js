function Julie(_positionX,_positionY,_maxMove,temps){
    var self = this;

    bulle.call(this,_positionX,_positionY,_maxMove,temps);


   var el =  this.getElement();
    this.setImage("Image/julie.jpg");
    this.setTitre("Julie");
}

Ben.prototype = Object.create(bulle.prototype);
Ben.prototype.constructor = bulle;