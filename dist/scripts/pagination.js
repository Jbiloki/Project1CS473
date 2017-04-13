(function(window) {
    'use strict';
    var $ = window.jQuery;
    var App = window.App || {};

    var Pagination = function(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }

    };

    Pagination.prototype.pagination = function() {

        var pageSize = 5;
        var elementCount = $('.page-list').size();
        var pageCount = Math.ceil(elementCount / pageSize); //round-off to nearest

        console.log('pageCount', $('.page-list').length);

        for (var i = 0; i < pageCount; i++) {
            $('#pagination').append('<li><a href="#">' + (i + 1) + '</a></li>');
        }

        $('#pagination li').first().find('a').addClass('current')

        var showPage = function(page) {
            $('[class="page-list"]').hide();
            $('[class="page-list"]').each(function(n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        };

        $('.page-list').load(function() {
            event.preventDefault();
            console.log('ready!');
            showPage(1);
        });
        showPage(1);

        $('#pagination li a').click(function() {
            event.preventDefault();
            $('#pagination li a').removeClass('current');
            $(this).addClass('current');
            showPage(parseInt($(this).text()));
        });
    }
    App.Pagination = Pagination;
    window.App = App;
})(window);
