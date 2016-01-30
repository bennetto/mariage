function JourJ(param) {

    /* Variable*/
    var self = this;

/* public */

    var bulles = [];
    var lines = [];

    this.init = function() {
        bulles = [];
        lines = [];
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
        lines.push(line1);

        var line2 = new Line(bEglise,bVinHonneur,{size:3,color:"#028c7e"});
        lines.push(line2);

        var line3 = new Line(bVinHonneur,bSoiree,{size:3,color:"#028c7e"});
        lines.push(line3);

        var line4 = new Line(bSoiree,bBrunch,{size:3,color:"#028c7e"});
        lines.push(line4);

        lines.forEach(function(line){
            workspace.appendChild(line.getElement());
            line.init();
        });

        bulles.forEach(function(bulle){
            workspace.appendChild(bulle.getElement());
            bulle.goToInit();
        });

    };
    this.close = function() {

        bulles.forEach(function(bulle){
            bulle.goToOut(function(){
                for(var i=0;i < workspace.children.length;i++)
                {

                //remove bulle
                    if(workspace.children[i] == bulle.getElement()) {
                        workspace.removeChild(bulle.getElement());
                    }

                //remove line
                    lines.forEach(function(line) {
                        if(workspace.children[i] == line.getElement()) {
                            line.remove();
                            workspace.removeChild(line.getElement());
                        }
                    });
                }
            });
        });
    };

    this.getElement = function(){
        return element;

    };
}