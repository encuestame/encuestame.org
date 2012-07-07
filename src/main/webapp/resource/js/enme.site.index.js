google.load("feeds", "1");
var createItem = function(container, value, extra) {
    var div = jQuery("<div></div>").addClass("rss-item");
    if (extra) {
        div.addClass("rss-item-extra");
    }
    var title = jQuery("<h5></h5>");
    // title.html(value.title);
    var a = jQuery("<a></a>").addClass("rss-link");
    a.attr("href", value.link);
    a.html(value.title);
    a.shorten();
    title.append(a);
    div.append(title);
    var content = jQuery("<div></div>").addClass("rss-snipet");
    content.html(value.contentSnippet);
    content.jTruncate({
        length : 60,
        minTrail : 0,
        moreText : "[see all]",
        lessText : "[hide]",
        ellipsisText : "...",
        moreAni : "fast",
        lessAni : 1000
    });
    div.append(content);
    //console.debug("item", value);
    container.append(div);
};

/*
 *
 */
function initialize() {
    var feed = new google.feeds.Feed(
            "https://github.com/encuestame/encuestame/commits/development.atom");
    feed.load(function(result) {
        if (!result.error) {
            var container = jQuery("#commits");
            // console.debug("container", container);
            // console.debug("result.feed.entries", result.feed.entries);
            jQuery.each(result.feed.entries, function(index, value) {
                createItem(container, value, true);
            });
        }
    });
    feed.setNumEntries(5);
    feed.includeHistoricalEntries();

    // http://www.facebook.com/feeds/page.php?id=80467777529&format=rss20
    var facebook = new google.feeds.Feed(
            "http://www.facebook.com/feeds/page.php?id=80467777529&format=rss20");
    facebook.load(function(result) {
        if (!result.error) {
            var container = jQuery("#facebook");
            // console.debug("facebook", container);
            // console.debug("result.feed.entries", result.feed.entries);
            jQuery.each(result.feed.entries, function(index, value) {
                createItem(container, value);
            });
        }
    });
    facebook.setNumEntries(5);

    var wiki = new google.feeds.Feed(
            "http://wiki.encuestame.org/createrssfeed.action?types=page&pageSubTypes=comment&pageSubTypes=attachment&types=blogpost&blogpostSubTypes=comment&blogpostSubTypes=attachment&types=mail&spaces=conf_all&title=Encuestame+Wiki+RSS+Feed&labelString%3D&excludedSpaceKeys%3D&sort=modified&maxResults=10&timeSpan=5&showContent=true&confirm=Create+RSS+Feed&os_authType=basic&os_username=rss&os_password=rss");
    wiki.load(function(result) {
        if (!result.error) {
            var container = jQuery("#wiki");
            // console.debug("wiki", container);
            // console.debug("result.feed.entries", result.feed.entries);
            jQuery.each(result.feed.entries, function(index, value) {
                createItem(container, value);
            });
        }
    });
    wiki.setNumEntries(5);

    // http://issues.encuestame.org/activity?maxResults=5&streams=
    var issues = new google.feeds.Feed(
            "http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=encuestame");
    issues.load(function(result) {
        if (!result.error) {
            var container = jQuery("#issues");
            //console.debug("issues", container);
            //console.debug("result.feed.entries", result.feed.entries);
            jQuery.each(result.feed.entries, function(index, value) {
                createItem(container, value);
            });
        }
    });
    issues.setNumEntries(5);
}
google.setOnLoadCallback(initialize);