function JourJ(param) {

    /* Variable*/
    var self = this;

    /* Récupération du template html */
    var importHtml = document.querySelector('#jourj-file');
    var element = importHtml.import.querySelector('.jourj').cloneNode(true);



/* public */
    this.getElement = function(){
        return element;

    };
}