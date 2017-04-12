(function(window) {
    'use strict';
    var App = window.App;
    var FORM_SELECTOR = '[data-sighting-post="form"]';
    var DataBase = App.CreateDB;
    var Data = new DataBase(FORM_SELECTOR);

    Data.submitHandler();
    Data.correctImgur();
    Data.displayRow();

})(window);


// sentences/ jokes to display in the cover image, feel free to add/remove any!
var sentences = [
    'Hello Earthlings!',
    'What is a martians favorite chocolate bar? ',
    'A Mars bar',
    'another joke?',
    'ok!',
    'What do aliens like to read?',
    'Comet books!',
    'haa!',
    'What is an aliens favorite place on a computer?',
    'The space bar!',
    'I love this job <3',
    'What did the alien say to the cat?',
    'Take me to your litter!',
    'hahaha, this is fun!',
    'Where did the alien park his space ship?',
    'A parking meteor!',
    'Have you ever heard the joke about the flying spaceship?',
    'Nevermind, its over your head...',
    'hehe',
    'What do aliens serve there food on?',
    'FLYING SAUCERS!!!',
    'Oh my god Im so good',
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
