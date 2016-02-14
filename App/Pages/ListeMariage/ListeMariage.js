function ListeMariage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNoPage;
    var img = document.createElement("img");
    img.src="Assets/VOYAGE_NOCES_Final.png";
    img.style.width ="100%";
    img.style.position = "absolute";
    img.style.zIndex = "0";

    this.init = function() {

        ga('send',"Listemariage");

        gbulles = [];
        bNoPage = new BulleNoPage({text:"En guise de cadeau de mariage nous organiserons une cagnotte enfin de partir en voyage de noces à l'autre bout du monde!",size:400,background:"#028c7e"});

        var maxHeight = window.innerHeight;
        img.style.top = maxHeight +"px";
        workspace.appendChild(img);
        workspace.appendChild(bNoPage.getElement());
        bNoPage.goToInit();

        TweenLite.to(img,2,{css: {top: "0"}})

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


        if(img){
            var maxHeight = window.innerHeight;
            TweenLite.to(img,2,{css: {top: maxHeight+"px"},onComplete:function(){
                workspace.removeChild(img);
                img = null;
            }});
        }
    };
    this.refresh = function(){
        if(bNoPage && bNoPage.refresh)
        {
            bNoPage.refresh();
        }
    };


    this.getElement = function(){
        return element;

    };
}