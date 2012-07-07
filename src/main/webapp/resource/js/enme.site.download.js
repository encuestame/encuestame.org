google.load("feeds", "1");
moment.relativeTime = {
    future : "in %s",
    past : "%s ago",
    s : "seconds",
    m : "a minute",
    mm : "%d minutes",
    h : "an hour",
    hh : "%d hours",
    d : "a day",
    dd : "%d days",
    M : "a month",
    MM : "%d months",
    y : "a year",
    yy : "%d years"
};
var createItem = function(container, value, extra) {
    var div = jQuery("<div></div>").addClass("rss-item");
    if (extra) {
        div.addClass("rss-item-extra");
    }
    var title = jQuery("<h5></h5>");
    // title.html(value.title);
    var a = jQuery("<a></a>").addClass("rss-link");
    a.attr("href", value.link);

    // a.shorten();
    title.append(a);
    // "Sat, 21 Jan 2012 08:38:25 -0800"
    a.html(value.title);
    div.append(title);
    var content = jQuery("<div></div>").addClass("rss-snipet");
    var now = moment(value.publishedDate).fromNow();
    content.html(now);
    div.append(content);
    //console.debug("item", value);
    container.append(div);
};

/*
 *
 */
function initialize() {
    var feed = new google.feeds.Feed(
            "http://sourceforge.net/api/file/index/project-id/248649/mtime/desc/limit/20/rss");
    feed.load(function(result) {
        if (!result.error) {
            var container = jQuery("#download");
            // console.debug("container", container);
            // console.debug("result.feed.entries", result.feed.entries);
            jQuery.each(result.feed.entries, function(index, value) {
                createItem(container, value, false);
            });
        }
    });
    feed.setNumEntries(5);
    feed.includeHistoricalEntries();
}
google.setOnLoadCallback(initialize);