function JourJ(param) {

    /* Variable*/
    var self = this;

/* public */

    var bulles = [];

    this.init = function() {
        gbulles = [];
        var bMairie = new BulleDayStep({text:"Mairie",size:150,background:"#028c7e",positionLine:1});
        workspace.appendChild(bMairie.getElement());
        bMairie.goToInit();
        bulles.push(bMairie);

        var bEglise = new BulleDayStep({text:"Eglise",size:150,background:"#028c7e",positionLine:3});
        workspace.appendChild(bEglise.getElement());
        bEglise.goToInit();
        bulles.push(bEglise);


        var bVinHonneur = new BulleDayStep({text:"Vin d'honeur",size:150,background:"#028c7e",positionLine:5});
        workspace.appendChild(bVinHonneur.getElement());
        bVinHonneur.goToInit();
        bulles.push(bVinHonneur);

        var bSoiree = new BulleDayStep({text:"Soirée de mariage",size:150,background:"#028c7e",positionLine:7});
        workspace.appendChild(bSoiree.getElement());
        bSoiree.goToInit();
        bulles.push(bSoiree);

        var bBrunch = new BulleDayStep({text:"Brunch",size:150,background:"#028c7e",positionLine:9});
        workspace.appendChild(bBrunch.getElement());
        bBrunch.goToInit();
        bulles.push(bBrunch);


    };
    this.close = function() {

        bulles.forEach(function(bulle){
            bulle.goToOut(function(){
                for(var i= 0;i < workspace.children.length;i++)
                {
                    if(workspace.children[i] == bulle.getElement()) {
                        workspace.removeChild(bulle.getElement());
                    }
                }
            });
        });
    };

    this.getElement = function(){
        return element;

    };
}