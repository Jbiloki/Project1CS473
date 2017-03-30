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
      chat.watch().subscribe((docs) => {console.log(docs)});
    }
    CreateDB.prototype.createMessage = function(avatar,text, postName, place) {
        const image = new Image();
        image.src = avatar;
        let message = {
          text: text,
          avatarURL: image.src,
          datetime: new Date(),
          author: postName,
          location: place
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

    CreateDB.prototype.removeMessage = function(){
    }

    CreateDB.prototype.resetDataBase = function(){
      chat.fetch().subscribe(
        (items) => {
          items.forEach((item ) => {
            chat.remove(item);
          })
        })
    }
    horizon.connect();
    App.CreateDB = CreateDB;
    window.App = App;
})(window);
