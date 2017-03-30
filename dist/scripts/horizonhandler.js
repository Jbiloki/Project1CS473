(function(window){
    'use strict';
    var App = window.App || {};
    var horizon = Horizon();
    var $ = window.jQuery;
    const chat = horizon('messages');

    function CreateDB(){
      horizon.onReady(function() {
          console.log("Database Connection Established.");
      });
    }
    CreateDB.prototype.createMessage = function(text, postName) {
        let message = {
          text: text,
          datetime: new Date(),
          author: postName
        }
        chat.store(message);
    }

    CreateDB.prototype.getMessage = function(){
      chat.fetch().subscribe(
        (items) => {
          items.forEach((item) => {
            console.log(item);
          })
        },

        (err) => {
          console.log(err);
        })
    }
    horizon.connect();
    App.CreateDB = CreateDB;
    window.App = App;
})(window);
