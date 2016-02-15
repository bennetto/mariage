var Utils = new function (){



    this.post = function(url,data,callback){

        var xhr = new XMLHttpRequest();

        xhr.open("POST", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if(callback)
                    callback(xhr.status == 200,xhr.response);
            }
        };
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);

    };

    this.get = function(url,callback){

        var xhr = new XMLHttpRequest();

        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if(callback)
                    callback(xhr.status == 200,xhr.response);
            }
        };
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

    };

    var FilLoaded = [];

    this.loadHtmlSync = function(url) {

        var htmlFile = FilLoaded[url];
        if(htmlFile)
        {
            return htmlFile;

        }else {

            var xhr = new XMLHttpRequest();

            xhr.open("GET", url, false);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send(null);

            if ( xhr.status == 200) {

                var parser = new DOMParser();
                var doc = parser.parseFromString(xhr.responseText, "text/html");
                var el = doc.querySelector("body");

                FilLoaded[url] = el.firstChild;

                return el.firstChild;
            }


        }
    };


    this.loadHtml = function(url,callback) {


        var htmlFile = FilLoaded[url];
        if(htmlFile)
        {
            callback(htmlFile);

        }else {

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {

                    var parser = new DOMParser();
                    var doc = parser.parseFromString(xhr.responseText, "text/html");
                    var el = doc.querySelector("body");

                    FilLoaded[url] = el.firstChild;
                    callback(el.firstChild);
                }
            };

            xhr.open("GET", url, true);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send();
        }
    };


}();