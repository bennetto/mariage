function JourJ(param) {

    /* Variable*/
    var self = this;

/* public */

    var bulles = [];

    this.init = function() {
        gbulles = [];
        var bMairie = new BulleDayStep({text:"Mairie",heure:"15h30",size:200,background:"#028c7e",positionLine:1});
        bulles.push(bMairie);

        var bEglise = new BulleDayStep({text:"Eglise",heure:"16h30",size:200,background:"#028c7e",positionLine:3});
        bulles.push(bEglise);


        var bVinHonneur = new BulleDayStep({text:"Vin d'honeur",heure:"18h30",size:200,background:"#028c7e",positionLine:5});
        bulles.push(bVinHonneur);

        var bSoiree = new BulleDayStep({text:"Soirée de mariage",heure:"23h30",size:200,background:"#028c7e",positionLine:7});
        bulles.push(bSoiree);

        var bBrunch = new BulleDayStep({text:"Brunch",heure:"11h30",size:200,background:"#028c7e",positionLine:9});
        bulles.push(bBrunch);


        var line1 = new Line(bMairie,bEglise,{size:3,color:"#028c7e"});
        workspace.appendChild(line1.getElement());
        line1.init();

        var line2 = new Line(bEglise,bVinHonneur,{size:3,color:"#028c7e"});
        workspace.appendChild(line2.getElement());
        line2.init();

        var line3 = new Line(bVinHonneur,bSoiree,{size:3,color:"#028c7e"});
        workspace.appendChild(line3.getElement());
        line3.init();

        var line4 = new Line(bSoiree,bBrunch,{size:3,color:"#028c7e"});
        workspace.appendChild(line4.getElement());
        line4.init();


        bulles.forEach(function(bulle){
            workspace.appendChild(bulle.getElement());
            bulle.goToInit();
        });
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