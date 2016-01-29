function PhotoPage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNoPage;
    this.init = function() {
        gbulles = [];
        bNoPage = new BulleNoPage({text:"Aprés le mariage il y auras ICI une zone de partage de photo.",size:400,background:"#028c7e"});
        workspace.appendChild(bNoPage.getElement());
        bNoPage.goToInit();
    };
    this.close = function() {
        var bulle = bNoPage;
        bulle.goToOut(function(){
            for(var i= 0;i < workspace.children.length;i++)
            {
                if(workspace.children[i] == bulle.getElement()) {
                    workspace.removeChild(bulle.getElement());
                }
            }
        });
    };

    this.getElement = function(){
        return element;

    };
}