var Notif = function ()
{

    var self = this;

    var element = document.createElement("div");
    element.className = "notif";
    element.style.display = "none";

    var textDiv = document.createElement("div");
    textDiv.className = "notif-text";

    element.appendChild(textDiv);
    workspace.appendChild(element);

    TweenLite.set(element,{y:-150});

    this.print = function(text,temps){

        textDiv.innerText = text;
        textDiv.textContent = text;
        element.style.display = "block";

        TweenLite.to(element,1,{y:0});

        if(temps)
        {
            setTimeout(function(){
                self.close();
            },temps);
        }
    };

    this.close = function(){
        TweenLite.to(element,1,{y:-150,onComplete:function(){
            element.style.display = "none";
        }});

    };


};