function JourJ(param) {

    /* Variable*/
    var self = this;

/* public */
    var aide;
    var bulles = [];
    var lines = [];
    var svgContainer;

    this.init = function() {

        //google analitic
        //ga('send',"JourJ");

        ga('send', 'pageview', {
            page: '/JourJ',
            title: 'JourJ'
        });

        bulles = [];
        lines = [];
        var bMairie = new BulleDayStep({text:"Mairie",heure:"15h30",size:200,background:"#028c7e",positionLine:1});
        bulles.push(bMairie);
        bMairie.getElement().onclick =  function() {
            clickBulle({
                    nom: "Passage devant le maire !",
                id:"descritption-mairie",
                nomHtmlFile:"Mairie",
                latLng:{lat: 47.335986, lng: 5.005116}
                });
        };


        var bEglise = new BulleDayStep({text:"Eglise",heure:"16h30",size:200,background:"#028c7e",positionLine:3});
        bulles.push(bEglise);
        bEglise.getElement().onclick =  function() {
            clickBulle({
                nom: "Cérémonie religieuse",
                id:"descritption-eglise",
                nomHtmlFile:"Eglise",
                latLng:{lat: 47.335742, lng: 5.003973}
            });
        };





        var bSoiree = new BulleDayStep({text:"Réception",heure:"18h30",size:200,background:"#028c7e",positionLine:5});
        bulles.push(bSoiree);
        bSoiree.getElement().onclick =  function() {
            clickBulle({
                nom: "Réception",
                id:"descritption-soiree",
                nomHtmlFile:"Soiree",
                latLng:{lat: 47.293900, lng: 4.810942}
            });
        };

        var bDodo = new BulleDayStep({text:"Dodo (Hotels)",heure:"Au plus tard :D",size:200,background:"#724823",positionLine:7});
        bulles.push(bDodo);
        bDodo.getElement().onclick =  function() {
            clickBulle({
                nom: "Dodo (Hotels)",
                id:"descritption-dodo",
                nomHtmlFile:"Dodo",
                image:"./Assets/Detail/ChatChienDort.jpg"
            });
        };

        var bBrunch = new BulleDayStep({text:"Brunch",heure:"11h30",size:200,background:"#724823",positionLine:9});
        bulles.push(bBrunch);
        bBrunch.getElement().onclick =  function() {
            clickBulle({
                nom: "Brunch",
                id:"descritption-brunch",
                nomHtmlFile:"Brunch",
                latLng:{lat: 47.293900, lng: 4.810942}
            });
        };


        var line1 = new Line(bMairie,bEglise,{size:5,color:"#028c7e"});
        lines.push(line1);

        var line2 = new Line(bEglise,bSoiree,{size:5,color:"#028c7e"});
        lines.push(line2);

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
        aide.textContent = "Pour plus d'information cliquez sur une bulle";
        workspace.appendChild(aide);

    };


    var clickBulle = function(param){

        bulles.forEach(function(bulle){
           bulle.stopAnimate(true);
        });

        lines.forEach(function(line){
            line.remove();
        });

        descriptionMap.print(param,function(){

            ga('send', 'pageview', {
                page: '/JourJ',
                title: 'JourJ'
            });

            lines.forEach(function(line){
                line.init();
            });

            bulles.forEach(function(bulle){
                bulle.animate();
            });



        });
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


    this.refresh = function(){
        bulles.forEach(function(bulle){
            bulle.refresh();

        });
    };

    this.getElement = function(){
        return element;

    };
}