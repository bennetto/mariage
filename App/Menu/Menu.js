function Menu(param) {

    /* Variable*/
    var self = this;

    /* R�cup�ration du template html */
    var importHtml = document.querySelector('#menu-file');
    var element = importHtml.import.querySelector('.menu').cloneNode(true);

    /* IHM */



    /* Function pulic */
    this.init = function(){


    };

    this.getElement = function(){
        return element;

    };


    /* Function priv� */

}