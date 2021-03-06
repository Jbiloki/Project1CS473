(function(window) {
    'use strict';
    // Get a reference to the namespace, if it exists
    var App = window.App || {};
    // Connect to the Horizon server after Horizon has been loaded via <script> tag
    var horizon = Horizon();
    // Import jQuery
    var $ = window.jQuery;
    var pageLoaded;
    // Get access to the messages collection
    const chat = horizon('messages');

    // Database constructor
    function CreateDB(selector) {
        this.pageLoaded = false;
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        // Print error if selector is invalid
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
        // Print ready message to console when server is ready
        horizon.onReady(function() {
            console.log("Database Connection Established.");
        });
        /*        chat.watch().subscribe((items) => {
                    items.forEach((item) => {
                        console.log(item);
                        var rowElement = new row(item);
                        this.$formElement.append(rowElement.$formElement);
                    })
                });
                */
        chat.order("descending");
    }

    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        var month = date.getMonth() + 1;
        return "&nbsp; &nbsp;Time: " + strTime + "&nbsp; &nbsp; Date: " + month + "/" + date.getDate() + "/" + date.getFullYear();
    }

    // Handler to process submits to database
    CreateDB.prototype.submitHandler = function() {

        var imgur = $("#img_link")[0];
        var imgurTxt = $('[id="img_link"]').val()
        console.log(imgur);
        console.log(imgurTxt);

        // When submit button is pressed, check if the user provides an image link
        // if not, create a new object with name, location, text, and img_link set to null
        // otherwise, create new object with above values AND image link
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            if ($('[id="img_link"]').val() == '') {
                createMessage('https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png', $('[id="storyInput"]').val(), $('[id="name"]').val(), $('[id="location"]').val())
            } else {
                createMessage($('[id="img_link"]').val(), $('[id="storyInput"]').val(), $('[id="name"]').val(), $('[id="location"]').val())
            }


            // clear/rest form after submit
            $("form").trigger("reset");
            $('[id="name"]').focus();

        });
    }

    CreateDB.prototype.correctName = function() {
        this.$formElement.on('input', '[id="name"]', function(event) {
            event.target.setCustomValidity('') //to prevent the valid prompt from showing up when reentering a link
            var name = event.target.value;

            console.log(name);

            if (nameValidation(name)) {
                console.log('true');
                event.target.setCustomValidity('');
            } else {
                console.log('false');
                event.target.setCustomValidity('Name must be in the form of John or John Smith with no numbers or special characters');
            }
        });
    };

    CreateDB.prototype.correctLocation = function() {
        this.$formElement.on('input', '[id="location"]', function(event) {
            event.target.setCustomValidity('') //to prevent the valid prompt from showing up when reentering a link
            var location = event.target.value;

            console.log(location);

            if (locationValidation(location)) {
                console.log('true');
                event.target.setCustomValidity('');
            } else {
                console.log('false');
                event.target.setCustomValidity('City must be in the form of Fullerton, CA or Fullerton with no numbers or special characters');
            }
        });
    };



    // On input, check if imgur link is valid. Prompt user if invalid input.
    CreateDB.prototype.correctImgur = function() {
        this.$formElement.on('input', '[id="img_link"]', function(event) {
            //to prevent the valid prompt from showing up when reentering a link
            event.target.setCustomValidity('')
            var img_link = event.target.value;

            console.log(img_link);

            if (imgurValidation(img_link) || img_link == '') {
                event.target.setCustomValidity('');
            } else {
                event.target.setCustomValidity('Please enter a valid imgur link, make sure it has a valid image extension');
            }
        });
    };

    function nameValidation(name) {
        return /^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/.test(name);
    };

    function locationValidation(location) {
        return /^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*(?:[,][ ][A-Z]{2})?$/.test(location);
    };

    // Validate imgur link input
    function imgurValidation(imgur_link) {
        return /.*imgur\.com\/.+\.(png|jpg|jpeg|apng|tiff|pdf|xcf)$/.test(imgur_link);
    };

    function row(item) {

        var $div0 = $('<div></div>', {
            'class': 'page-list'
        });

        var $div1 = $('<div></div>', {
            'class': 'section'
        });
        var $div2 = $('<div></div>', {
            'class': 'container'
        });
        var $div3 = $('<div></div>', {
            'class': 'row'
        });
        var $div4 = $('<div></div>', {
            'class': 'col-md-12'
        });
        var $ul = $('<ul></ul>', {
            'class': 'media-list'
        });
        var $li = $('<li></li>', {
            'class': 'media'
        });
        var $a = $('<a></a>', {
            'class': 'pull-left',
            'href': '#'
        });
        var $img = $('<img></img>', {
            'class': 'img-circle media-object',
            'src': 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png',
            'height': '64',
            'width': '64'
        });
        var $div5 = $('<div></div>', {
            'class': 'media-body'
        });
        var $h4name = $('<h4></h4>', {
            'class': 'media-heading',
        });
        var $ploct = $('<p></p>', {});

        var $div6 = $('<div></div>', {
            'class': 'btn-link btn-link panel panel-primary remove_heading'
        });
        var $div7 = $('<div></div>', {
            'class': 'panel-heading'
        });
        var $div8 = $('<h3></h3>', {
            'class': 'panel-title text-center text-primary'
        });
        var $i = $('<i></i>', {
            'class': 'fa fa-fw fa-space-shuttle fa-spin'
        });
        var $div9 = $('<div></div>', {
            'class': 'panel-body'
        });
        var $mainImage = $('<img></img>', {
            'class': 'detail-image',
            'src': item.avatarURL,
            'alt': 'Responsive image'
        });

        var $center = $('<center></center>');
        var $text = $('<p></p>', {});
        var name = item.author;
        var text = item.text;
        var picture = item.avatarURL;
        var location = item.location;
        var dateTime = item.datetime;
        $text.append(name);
        $h4name.append(name);
        $ploct.append(location + ' ' + dateTime);

        dateTime = formatDate(dateTime);

        //forming the message
        $a.append($img);
        $div5.append($h4name);
        $div5.append("Location: ", item.location, " ", dateTime);
        $li.append($a);
        $li.append($div5);
        //1
        $ul.append($li);

        $div8.append($i);
        $div8.append('Sighting');
        $div9.append(text);
        $div9.append($('<br></br><hr><br></br>'));
        console.log(item.avatarURL);
        if (item.avatarURL == 'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png') {
            $img.attr('src', 'https://unsplash.imgix.net/photo-1422222948315-28aadb7a2cb8?w=1024&amp;q=50&amp;fm=jpg&amp;s=cfeadbd7a991e58b553bee29a7eeca55');
        } else {
            $img.append(picture);
            $center.append($mainImage);
            $div9.append($center);
        }
        $div7.append($div8);

        $div6.append($div7);
        //2
        $div6.append($div9);

        $div4.append($ul);
        $div4.append($div6);

        $div3.append($div4);
        $div2.append($div3);
        $div1.append($div2);
        $div0.append($div1);
        this.$formElement = $div0;

    }

    // Create a new 'message' object
    function createMessage(avatar, text, postName, place) {
        let message = {
            text: text,
            avatarURL: avatar,
            datetime: new Date(),
            author: postName,
            location: place
        }
        chat.store(message);

    };

    // Print messages to the console
    CreateDB.prototype.getMessage = function() {
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

    CreateDB.prototype.loadPage = function() {
        chat.fetch().subscribe(
            (items) => {
                items.forEach((item) => {
                    var rowElement = new row(item);
                    this.$formElement.append(rowElement.$formElement);
                })
            },
            (err) => {
                console.log(err);
            });
        this.pageLoaded = true;
    }
    CreateDB.prototype.displayRow = function(cb) {
        //console.log("Before", this.pageLoaded);
        chat.order("datetime", "ascending").watch().subscribe(allChannels => {
            //console.log(allChannels);
            if (this.pageLoaded === true) {
                var check = Object.keys(allChannels).length - 1;
                var last = allChannels[check];
                var rowElement = new row(last);
                //console.log(allChannels);
                //console.log(check);
                //console.log(last);
                this.$formElement.append(rowElement.$formElement);
            } else {
                chat.order("datetime", "ascending").fetch().subscribe(
                    (items) => {
                        items.forEach((item) => {
                            var rowElement = new row(item);
                            this.pageLoaded = true;
                            this.$formElement.append(rowElement.$formElement);
                        });
                        cb(this.$formElement);

                    });
            }
            (err) => {
                console.log(err);
            };

        })
        console.log(this.pageLoaded);
    }


    // Remove all messages from the database, return to default
    CreateDB.prototype.resetDataBase = function() {
        chat.fetch().subscribe(
            (items) => {
                items.forEach((item) => {
                    chat.remove(item);
                })
            })
    }
    // Establish a Horizon connection
    horizon.connect();
    // Attach module code to the namespace
    App.CreateDB = CreateDB;
    window.App = App;
})(window);
