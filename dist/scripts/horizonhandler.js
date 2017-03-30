(function(window){
    'use strict';
    var App = window.App || {};
    var horizon = Horizon();
    var $ = window.jQuery;
    const chat = horizon('messages');

    function CreateDB(selector){
      if(!selector){
        throw new Error('No selector provided');
      }
      this.$formElement = $(selector);
      if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
      horizon.onReady(function() {
          console.log("Database Connection Established.");
      });
      console.log(selector);
      chat.watch().subscribe((docs) => {console.log(docs)});
    }

    CreateDB.prototype.submitHandler = function(){

      this.$formElement.on('submit', function(event)
    {
        event.preventDefault();
        if($('[id="img_link"]').val() == '')
        {
          createMessage(null, $('[id="storyInput"]').val(), $('[id="name"]').val(), $('[id="location"]').val())
        }
        else {
          createMessage($('[id="img_link"]').val(), $('[id="storyInput"]').val(), $('[id="name"]').val(), $('[id="location"]').val())
        }
    });
    }
    function createMessage(avatar,text, postName, place) {
        let message = {
          text: text,
          avatarURL: avatar,
          datetime: new Date(),
          author: postName,
          location: place
        }
        chat.store(message);
    };

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
