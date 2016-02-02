
window.onload = function() {



    if(!window.requestAnimationFrame)
        window.requestAnimationFrame = (function() {

            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
                    window.setTimeout(callback, 1000 / 30);
                };

        })();




    //GLobal variable
    workspace = document.getElementById("workspace");
    head = document.getElementsByName("head");
    GlobalNavigation = new Navigation();


};


