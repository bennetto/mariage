function JourJ(param) {

    /* Variable*/
    var self = this;

/* public */
    var aide;
    var bulles = [];
    var lines = [];
    var svgContainer;

    this.init = function() {
        bulles = [];
        lines = [];
        var bMairie = new BulleDayStep({text:"Mairie",heure:"15h30",size:200,background:"#028c7e",positionLine:1});
        bulles.push(bMairie);
        bMairie.getElement().onclick =  function() {
            clickBulle({
                    nom: "Mairie"
                });
        };


        var bEglise = new BulleDayStep({text:"Eglise",heure:"16h30",size:200,background:"#028c7e",positionLine:3});
        bulles.push(bEglise);
        bEglise.getElement().onclick =  function() {
            clickBulle({
                nom: "Eglise"
            });
        };

        var bVinHonneur = new BulleDayStep({text:"Vin d'honeur",heure:"18h30",size:200,background:"#028c7e",positionLine:5});
        bulles.push(bVinHonneur);
        bVinHonneur.getElement().onclick =  function() {
            clickBulle({
                nom: "Vin d'honneur"
            });
        };

        var bSoiree = new BulleDayStep({text:"Soirée de mariage",heure:"23h30",size:200,background:"#028c7e",positionLine:7});
        bulles.push(bSoiree);
        bSoiree.getElement().onclick =  function() {
            clickBulle({
                nom: "Soirée de mariage"
            });
        };

        var bDodo = new BulleDayStep({text:"Dodo (Hotels)",heure:"Au plus tard :D",size:200,background:"#724823",positionLine:9});
        bulles.push(bDodo);
        bDodo.getElement().onclick =  function() {
            clickBulle({
                nom: "Dodo (Hotels)"
            });
        };

        var bBrunch = new BulleDayStep({text:"Brunch",heure:"11h30",size:200,background:"#724823",positionLine:11});
        bulles.push(bBrunch);
        bBrunch.getElement().onclick =  function() {
            clickBulle({
                nom: "Brunch"
            });
        };


        var line1 = new Line(bMairie,bEglise,{size:5,color:"#028c7e"});
        lines.push(line1);

        var line2 = new Line(bEglise,bVinHonneur,{size:5,color:"#028c7e"});
        lines.push(line2);

        var line3 = new Line(bVinHonneur,bSoiree,{size:5,color:"#028c7e"});
        lines.push(line3);

        var line4 = new Line(bSoiree,bDodo,{size:5,color:"#028c7e"});
        lines.push(line4);

        var line5 = new Line(bDodo,bBrunch,{size:5,color:"#028c7e"});
        lines.push(line5);

        svgContainer = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svgContainer.style.height = "100%";
        svgContainer.style.width = "100%";
        svgContainer.style.position = "absolute";
        workspace.appendChild(svgContainer);

        lines.forEach(function(line){
            svgContainer.appendChild(line.getElement());
            line.init();
        });

        bulles.forEach(function(bulle){
            workspace.appendChild(bulle.getElement());
            bulle.goToInit();

        });


        aide = document.createElement("div");
        aide.className = "aide";
        aide.innerText="Pour plus d'information cliquez sur une bulle";
        workspace.appendChild(aide);







    };


    var clickBulle = function(param){
        var jDetail =  new JourJDetail(param);

        jDetail.print();
    };

    this.close = function() {

        if(aide) {
            workspace.removeChild(aide);
            aide = null;
        }

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

                    //remove svgContainer
                    if(workspace.children[i] == svgContainer) {
                        workspace.removeChild(svgContainer);
                    }
                }
            });
        });
    };

    this.getElement = function(){
        return element;

    };
}