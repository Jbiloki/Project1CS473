(function(){
    'use strict';
    var horizon = Horizon();
    horizon.onReady(function() {
        console.log("Database Connection Established,");
    });
    horizon.connect();
}());
