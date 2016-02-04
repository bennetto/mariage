function VousNousPage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNoPage;
    this.init = function() {

        ga('send',"VousNous");

        gbulles = [];
        bNoPage = new BulleNoPage({text:"ICI ce trouvera un arbre généalogique et qui sait peux-être autre chose.",size:400,background:"#028c7e"});
        workspace.appendChild(bNoPage.getElement());
        bNoPage.goToInit();
    };
    this.close = function() {
        if(bNoPage)
            bNoPage.goToOut(function(){
                for(var i= 0;i < workspace.children.length;i++)
                {
                    if(workspace.children[i] == bNoPage.getElement()) {
                        workspace.removeChild(bNoPage.getElement());
                    }
                }
            });
    };

    this.getElement = function(){
        return element;

    };
}