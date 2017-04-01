(function(window) {
    'use strict';
    var App = window.App;
    var FORM_SELECTOR = '[data-sighting-post="form"]';
    var DataBase = App.CreateDB;
    var Data = new DataBase(FORM_SELECTOR);

    Data.submitHandler();

})(window);


// sentences/ jokes to display in the cover image, feel free to add/remove any!
var sentences = [
    'Hello World!',
    'What is a martians favorite chocolate bar? ',
    'A Mars bar',
    'another joke?',
    'ok!',
    'What do aliens like to read?',
    'Comet books!',
    'haa!',
];

var interval = 1300;

var holder1 = $('.holder-1');
var currentIndex = 0;

function doIt() {
    holder1.html(sentences[currentIndex]);
    currentIndex = (currentIndex + 1) % sentences.length;
    setTimeout(doIt, interval);
}

doIt();
