window.onload = function() {

    Utils.get("http://api.dev.benetjulie.love/mariage/confirmation/",function(isOk,response){


        var confObj = JSON.parse(response);

        confObj.forEach(function(group){

            var divGroup = groupTemplate.cloneNode(true);

            createGlobalGroup(divGroup,group);
            createPersonnes(divGroup,group);


            groupList.appendChild(divGroup);
        });


    });



    var createGlobalGroup = function(parentdiv,obj){
        var mail = parentdiv.getElementsByClassName("group-mail")[0];
        mail.innerText = obj.mail;
        mail.textContent = obj.mail;

        var mot = parentdiv.getElementsByClassName("group-mot")[0];
        mot.innerText = obj.mot;
        mot.textContent = obj.mot;
    };

    var createPersonnes = function(parentdiv,group) {

        var personneList = parentdiv.getElementsByClassName("group-list-personne")[0];
        var personne = parentdiv.getElementsByClassName("container-personne")[0];
        personneList.removeChild(personne);

        group.personnes.forEach(function (pers) {
            var persDiv = personne.cloneNode(true);


            var nom = persDiv.getElementsByClassName("group-nom")[0];
            nom.innerText = pers.prenom + " " + pers.nom;
            nom.textContent = pers.prenom + " " + pers.nom;

            var vient = persDiv.getElementsByClassName("group-vient")[0];
            vient.innerText = "mariage : "+pers.isVient + ", brunch : " + pers.isvientBrunch;
            vient.textContent = "mariage : "+pers.isVient + ", brunch : " + pers.isvientBrunch;

            var info = persDiv.getElementsByClassName("group-info")[0];
            info.innerText = pers.info;
            info.textContent = pers.info;

            personneList.appendChild(persDiv);

        });
    };



    //GLobal variable
    groupList = document.getElementsByClassName("group-list")[0];
    groupTemplate =   groupList.getElementsByClassName("group")[0];
    groupList.removeChild(groupTemplate);


    head = document.getElementsByName("head");
};
