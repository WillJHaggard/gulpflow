$(function() {
    var Mustache = require('mustache'); // browserify

    $.getJSON('js/data.json', function() {
        var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);

    }); // getJSON

}); // function