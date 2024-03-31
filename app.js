$(document).ready(function() {
    $.getJSON('sites.json', function(data) {
        var sites = data.sites;
        var container = $('.container');

        sites.forEach(function(site) {
            var link = $('<div class="link"><img src="' + site.image + '" alt="' + site.name + '"><p>' + site.name + '</p></div>');
            link.appendTo(container);
            link.wrap('<a href="' + site.link + '" target="_blank"></a>');
        });
    });
});
