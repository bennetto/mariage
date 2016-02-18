function VousNousPage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNous;
    var bJulie;


    this.init = function() {


        ga('send', 'pageview', {
            page: '/nous',
            title: 'Nous'
        });

        gbulles = [];

        bNous = new BullePersonne({size:200,background:"#028c7e",positionInit:{x:1/2,y:1/2},image:"nous.jpg"});
        gbulles.push(bNous);


      //  bJulie = new BullePersonne({size:200,background:"#028c7e",positionInit:{x:3/4,y:1/2},image:"Julie.JPG"});
       // gbulles.push(bJulie);

        gbulles.forEach(function(bulle){
            workspace.appendChild(bulle.getElement());
            bulle.goToInit();
            bulle.goToIn();
        });




    };
    this.close = function() {

        gbulles.forEach(function(bulle){
            if(bulle)
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

    this.refresh = function(){
        gbulles.forEach(function(bulle){
            if(bulle && bulle.refresh)
            {
                bulle.refresh();
            }
        });

    };

    this.getElement = function(){
        return element;

    };
}