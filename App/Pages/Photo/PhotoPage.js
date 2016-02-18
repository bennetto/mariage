function PhotoPage(param) {

    /* Variable*/
    var self = this;

    /* public */

    var bNoPage;
    this.init = function() {

        ga('send', 'pageview', {
            page: '/photo',
            title: 'Photo'
        });

        gbulles = [];
        bNoPage = new BulleNoPage({text:"Après le mariage il y aura ici une zone de partage de photos.",size:400,background:"#028c7e"});
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