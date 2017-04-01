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
      chat.watch().subscribe((docs) => {console.log(docs)
          row(docs);
      });
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
        
        // clear/rest form after submit
        $("form").trigger("reset");

    });


    }

    function row(dbObject){
      chat.fetch().subscribe(
        (items) => {
          items.forEach((item ) => {
            var $div1 = $('<div></div>', {'class': 'section'});
            var $div2 = $('<div></div>', {'class': 'container'});
            var $div3 = $('<div></div>', {'class': 'row'});
            var $div4 = $('<div></div>', {'class': 'col-md-12'});
            var $ul = $('<ul></ul>', {'class': 'media-list'});
            var $li = $('<li></li>', {'class': 'media'});
            var $a = $('<a></a>', {'class': 'pull-left', 'href' : '#'});
            var $img = $('<img></img>', {'class': 'img-circle media-object', 'src' : 'https://unsplash.imgix.net/photo-1422222948315-28aadb7a2cb8?w=1024&amp;q=50&amp;fm=jpg&amp;s=cfeadbd7a991e58b553bee29a7eeca55', 'height' : '64', 'width' : '64' });
            var $div5 = $('<div></div>', {'class': 'media-body'});
            var $h4name = $('<h4></h4>', {'class': 'media-heading', });
            var $ploct = $('<p></p>', {});
            var $div6 = $('<div></div>', {'class': 'btn-link btn-link panel panel-primary remove_heading'});
            var $div7 = $('<div></div>', {'class': 'panel-heading'});
            var $div8 = $('<h3></h3>', {'class': 'panel-title text-center text-primary'});
            var $i = $('<i></i>', {'class' : 'fa fa-fw fa-space-shuttle fa-spin'});
            var $div9 = $('<div></div>', {'class': 'panel-body'});
            var $text = $('<p></p>', {});
            var name = item.author;
            var text = item.text;
            var picture = item.avatarURL;
            var location = item.location;
            var dateTime = item.datetime;
            $text.append(name);
            $h4name.append(name);
            $ploct.append(location + ' ' + dateTime);
            $i.append('Sighting');
            $img.append(picture);
        })
      })
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
