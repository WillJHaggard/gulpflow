$(function() {
    var Mustache = require('mustache'); // browserify, I believe

    $.getJSON('js/data.json', function() {
        var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);

    }); // getJSON

}); // function