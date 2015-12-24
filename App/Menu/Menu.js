function Menu(param) {

    /* Variable*/
    var self = this;

    /* Récupération du template html */
    var importHtml = document.querySelector('#menu-file');
    var element = importHtml.import.querySelector('.menu').cloneNode(true);
    
    var bulleMenu = element.querySelector(".main-bulle");
    var ellipse1 = bulleMenu.getElementsByTagName("svg")[0].getElementsByTagName("ellipse")[0];
    var ellipse2 = bulleMenu.getElementsByTagName("svg")[0].getElementsByTagName("ellipse")[1];

    var contentMainBulle = bulleMenu.querySelector(".content-main-bulle");
    var textJu = bulleMenu.querySelector(".text-ju");
    var textBen = bulleMenu.querySelector(".text-ben");
    var imageBague = bulleMenu.querySelector(".image-bagues");

    var contentMenuSecret = element.querySelector(".content-menu-secret");
    var contentMenuContact = element.querySelector(".content-menu-contact");

    var textSecret = contentMenuSecret.querySelector(".text-secret");
    var textContact = contentMenuContact.querySelector(".text-contact");

    var workspaceBulle = element.querySelector(".workspace-bulle-menu");
    /* IHM */


    var bMenuJour;
    var bMenuVN;
    var bMenuList;
    var bMenuPhoto;
    /* Function pulic */
    this.init = function(){

    //    bulleMenu.onclick = click;





        /* vous + nous*/
        bMenuVN = new BulleMenu({text:"Vous + nous",size:200,background:"#028c7e",positionMenu:1});
        workspaceBulle.appendChild(bMenuVN.getElement());
        bMenuVN.goToInit();
        bMenuVN.getElement().onclick = function(){
            clickMenu(bMenuVN);
        };

        /* Jour j*/
        bMenuJour = new BulleMenu({text:"Jour J",size:200,background:"#028c7e",positionMenu:2});
        workspaceBulle.appendChild(bMenuJour.getElement());
        bMenuJour.goToInit();
        bMenuJour.getElement().onclick = function(){
            clickMenu(bMenuJour);
        };


        /*Liste mariage*/
        bMenuList = new BulleMenu({text:"Liste de mariage",size:200,background:"#724823",positionMenu:3});
        workspaceBulle.appendChild(bMenuList.getElement());
        bMenuList.goToInit();
        bMenuList.getElement().onclick = function(){
            clickMenu(bMenuList);
        };

        /*les photos*/
        bMenuPhoto = new BulleMenu({text:"Les photos",size:200,background:"#724823",positionMenu:4});
        workspaceBulle.appendChild(bMenuPhoto.getElement());
        bMenuPhoto.goToInit();
        bMenuPhoto.getElement().onclick = function(){
            clickMenu(bMenuPhoto);
        };


        self.firtsAnimate();
    };

    this.firtsAnimate = function(){

        var maxHeight = window.innerHeight;
        var centerHeight = maxHeight/2-250;


        bMenuJour.goToHome();
        bMenuVN.goToHome();
        bMenuList.goToHome();
        bMenuPhoto.goToHome();

        var tl = new TimelineLite();

        /* initialisation position */
        tl .set(ellipse1,{attr:{cy:maxHeight/2}})
            .set(ellipse2,{attr:{cy:maxHeight/2}})
            .set(bulleMenu,{x:0,y:-maxHeight,scale:0,opacity:0,ease: Power2.easeOut})
            .set(contentMainBulle,{y:maxHeight/2-250})
            .set(contentMenuSecret,{y:maxHeight-200})
            .set(contentMenuContact,{y:maxHeight-200})



            /*init main centent menu*/
            .set(textBen,TextBen.centerPosition)
            .set(textJu,TextJu.centerPosition)
            .set(imageBague,{y:150})

            .set(textContact,TextContact.centerPosition)
            .set(textSecret,TextSecret.centerPosition)

            /* animation */
            .to(bulleMenu,3,{x:0,y:0,scale:1,opacity:1,ease: Power2.easeOut})
    };

    var modeFullscrenne = true;

    var clickMenu = function(bMenu){

        bMenu.goTo();

        if(bMenuJour != bMenu )
        {
            bMenuJour.goToMenu();
        }
        if(bMenuList != bMenu )
        {
            bMenuList.goToMenu();
        }
        if(bMenuPhoto != bMenu )
        {
            bMenuPhoto.goToMenu();
        }
        if(bMenuVN != bMenu )
        {
            bMenuVN.goToMenu();
        }

        if(modeFullscrenne)
        {
            self.AnimateToMenu();
            modeFullscrenne = false;
        }else{

        }


    };



    this.AnimateToMenu = function(){

        var width = window.innerWidth;

        var hMiddle = 120;
        var ratio = 1-width/1920;
        var hcote =  80+ (ratio*20);

        var offset =  ((Math.pow(hMiddle-hcote,2) + Math.pow(width/2,2) )/(2*(hMiddle-hcote )))-hMiddle;

        var tl = new TimelineLite();

        tl.to(ellipse1,3,{attr:{cy:-offset,ry:offset+hMiddle,rx:offset+hMiddle},ease: Power2.easeInOut},"-=3")
            .to(ellipse2,3,{attr:{cy:-offset,ry:offset,rx:offset},ease: Power2.easeInOut},"-=3")

            /* Content main bulle */
            .to(contentMainBulle,3,{y:0,ease: Power2.easeInOut},"-=3")
            .to(textJu,3,fusionParam(TextJu.menuPosition,{ease: Power2.easeInOut}),"-=3")
            .to(textBen,3,fusionParam(TextBen.menuPosition,{ease: Power2.easeInOut}),"-=3")
            .to(imageBague,3,fusionParam(ImageBague.menuPosition,{ease: Power2.easeInOut}),"-=3")

            .to(contentMenuContact,3,{y:0,ease: Power2.easeInOut},"-=3")
            .to(contentMenuSecret,3,{y:0,ease: Power2.easeInOut},"-=3")
            .to(textContact,3,fusionParam(TextContact.menuPosition,{ease: Power2.easeInOut}),"-=3")
            .to(textSecret,3,fusionParam(TextSecret.menuPosition,{ease: Power2.easeInOut}),"-=3");


    };

    this.AnimateToFullScreen= function(){
        var maxHeight = window.innerHeight;

        var tl = new TimelineLite();

        tl.to(ellipse1,3,{attr:{cy:maxHeight/2,rx:237.5,ry:250},ease: Power2.easeOut})
            .to(ellipse2,3,{attr:{cy:maxHeight/2,rx:235,ry:225},ease: Power2.easeOut},"-=3")
            /* Content main bulle */
            .to(contentMainBulle,3,{y:maxHeight/2-250,ease: Power2.easeInOut},"-=3")
            .to(textJu,3,fusionParam(TextJu.centerPosition,{ease: Power2.easeInOut}),"-=3")
            .to(textBen,3,fusionParam(TextBen.centerPosition,{ease: Power2.easeInOut}),"-=3")
            .to(imageBague,3,fusionParam(ImageBague.centerPosition,{ease: Power2.easeInOut}),"-=3")

            .to(contentMenuContact,3,{y:maxHeight-200,ease: Power2.easeInOut},"-=3")
            .to(contentMenuSecret,3,{y:maxHeight-200,ease: Power2.easeInOut},"-=3")
            .to(textContact,3,fusionParam(TextContact.centerPosition,{ease: Power2.easeInOut}),"-=3")
            .to(textSecret,3,fusionParam(TextSecret.centerPosition,{ease: Power2.easeInOut}),"-=3");
    };

    this.getElement = function(){
        return element;

    };


    /* Function privé */



    /*element */
    var TextJu = {};
    TextJu.centerPosition = {fontSize:70,x:0,y:100};
    TextJu.menuPosition = {fontSize:40,y:10,x:-50};

    var TextBen = {};
    TextBen.centerPosition = {fontSize:70,y:280};
    TextBen.menuPosition = {fontSize:40,y:60};

    var ImageBague = {};
    ImageBague.centerPosition = {y:150,x:0,height:200,width:200};
    ImageBague.menuPosition = {y:-10,x:50,height:100,width:100};

    var TextSecret = {};
    TextSecret.centerPosition = {fontSize:30};
    TextSecret.menuPosition = {fontSize:20};

    var TextContact = {};
    TextContact.centerPosition = {fontSize:30};
    TextContact.menuPosition = {fontSize:20};

    function fusionParam(param,param2){
        var paramTotal = JSON.parse(JSON.stringify((param)));
        for (var attrname in param2) { paramTotal[attrname] = param2[attrname]; }
        return paramTotal;
    }

}