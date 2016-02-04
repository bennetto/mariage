function NoSItePage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNoPage;
    this.init = function() {

        //google analitic

        ga('send','SiteEnConstruction');

        gbulles = [];
        bNoPage = new BulleNoPage({text:"Site du mariage de\nBen&Julie \nen cours de construction. \n\nIl ouvrira le 8 février. ",size:400,background:"#028c7e"});
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