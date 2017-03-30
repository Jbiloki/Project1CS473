(function(window) {
    'use strict';
    var App = window.App;
    var FORM_SELECTOR = '[data-sighting-post="form"]';
    var DataBase = App.CreateDB;
    var Data = new DataBase(FORM_SELECTOR);

    Data.submitHandler();

})(window);
