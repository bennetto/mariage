function VousNousPage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNous;
    this.init = function() {

        ga('send',"VousNous");

        gbulles = [];

        bNous = new BullePersonne({size:200,background:"#028c7e",positionInit:{x:1/2,y:1/2},image:"nous.jpg"});
        workspace.appendChild(bNous.getElement());
        bNous.goToInit();
        bNous.goToIn();




    };
    this.close = function() {
        if(bNous)
            bNous.goToOut(function(){
                for(var i= 0;i < workspace.children.length;i++)
                {
                    if(workspace.children[i] == bNous.getElement()) {
                        workspace.removeChild(bNous.getElement());
                    }
                }
            });
    };

    this.refresh = function(){
        if(bNous && bNous.refresh)
        {
            bNous.refresh();
        }
    };

    this.getElement = function(){
        return element;

    };
}