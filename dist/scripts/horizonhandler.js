(function(){
    'use strict';
    var horizon = Horizon();
    horizon.onReady(function() {
        document.querySelector('h1').innerHTML = 'App works!';
    });
    horizon.connect();
}());
