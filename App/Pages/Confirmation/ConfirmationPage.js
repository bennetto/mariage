
function ConfirmationPage(param) {

    /* Variable*/
    var self = this;


    /* Récupération du template html */

    var element = Utils.loadHtmlSync("./App/Pages/Confirmation/ConfirmationPage.html");

    var panelLeft = element.querySelector('.panel-left');
    //right
    var panelHome = element.querySelector('.panel-home');
    var panelAdd = element.querySelector('.panel-add');
    var panelEnd = element.querySelector('.panel-end');


    var btnBack = element.querySelector(".back-button");
    var btnHome = element.querySelector(".btn-home");
    var btnAdd = element.querySelector("#btn-add");
    btnAdd.onclick = function(){
        addPersonne();
        self.goToAdd();
    };

    var btnEndAdd = element.querySelector("#btn-add-end");
    btnEndAdd.onclick = function(){
        self.goToEnd();
    };

    btnEndAdd.style.display = "none";

    var callBackFct;


    var addPersonne = function(){
        btnEndAdd.style.display = "block";

        var nom = document.getElementById("value-nom");
        var prenom = document.getElementById("value-prenom");
        var isvient = document.getElementById("value-info");
        var info = document.getElementById("value-info");



        personnes.push({
            nom:nom.value,
            prenom:prenom.value,
            isVient:isvient.checked,
            info:info.value
        });
    };

    /* INIT */

    this.init = function(){

        element.appendAfter(workspace);


        var tInit = new TimelineLite();

        var widthLeft = panelLeft.offsetWidth;
        var widthRight = panelHome.offsetWidth;

        /* initialisation position */
        tInit .set(panelLeft,{x:-widthLeft})
            .set(panelHome,{x:widthRight})
            .set(panelAdd,{x:widthRight})
            .set(panelEnd,{x:widthRight});
    };

    var currentPanelRight;

    var personnes;
    this.print = function(callback){
        btnEndAdd.style.display = "none";
        
        currentPanelRight = panelHome;
        callBackFct = callback;
        ga('send','contact');

        personnes = [];

        var tl = new TimelineLite();
        tl .to(panelLeft,1,{x:0,ease: Power2.easeInOut},"-=1")
            .to(currentPanelRight,1,{x:0,ease: Power2.easeInOut},"-=1");
    };

    var cleatValueAdd = function(){

        var nom = document.getElementById("value-nom");
        var prenom = document.getElementById("value-prenom");
        var isvient = document.getElementById("value-info");
        var info = document.getElementById("value-info");

        nom.value = "";
        prenom.value = "";
        isvient.checked = false;
        info.value = "";
    };

    this.goToAdd = function(){
        var widthRight = currentPanelRight.offsetWidth;

        var nbPersonne = personnes.length+1;

        document.getElementById("title-panel-add").innerText = "Personne numéros"+nbPersonne;


        var tl = new TimelineLite();
        tl .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut,onComplete:function(){
                cleatValueAdd();
        }})
            .to(panelAdd,1,{x:0,ease: Power2.easeInOut});

        currentPanelRight = panelAdd;
    };

    this.goToEnd = function(){
        var widthRight = currentPanelRight.offsetWidth;

        var tl = new TimelineLite();
        tl .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut})
            .to(panelEnd,1,{x:0,ease: Power2.easeInOut});

        currentPanelRight = panelEnd;
    };

    this.close = function(){
        var widthLeft = panelLeft.offsetWidth;
        var widthRight = currentPanelRight.offsetWidth;

        var tl = new TimelineLite();

        tl .to(panelLeft,1,{x:-widthLeft,ease: Power2.easeInOut},"-=1")
            .to(currentPanelRight,1,{x:widthRight,ease: Power2.easeInOut,onComplete:endClose},"-=1")

    };

    btnBack.onclick = self.close;
    btnHome.onclick = self.goToAdd;




    var endClose = function(){

        if(callBackFct)
            callBackFct();

    };

    this.getElement = function(){
        return element;
    }
}