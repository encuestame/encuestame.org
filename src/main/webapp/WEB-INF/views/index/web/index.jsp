<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="hero-unit">
    <h1>
        <spring:message code="welcome" />
    </h1>

    <p>
        <spring:message code="welcome.detail" />
    </p>
    <p>
        <a class="btn btn-primary btn-small btn-info" href="features"><spring:message
                code="see" /> &raquo;</a>
    </p>
    <div class="row-fluid">
        <div class="span4">
            <h3>
                <spring:message code="quick" />
            </h3>
            <p>
            <ul>
                <li><a href="http://demo.encuestame.org" target="_blank"><spring:message
                            code="demo" />
                </a></li>
                <li><a href="http://blog.encuestame.org" target="_blank">Blog
                </a></li>
                
                <li><a
                    href="https://www.facebook.com/pages/encuestame/80467777529" target="_blank"><spring:message
                            code="rss.facebook" />
                </a></li>
                <li><a
                    href="http://twitter.com/encuestame" target="_blank">
                    Twitter
                </a></li>                
                <li><a href="http://issues.encuestame.org/browse/ENCUESTAME#selectedTab=com.atlassian.jira.plugin.system.project%3Aroadmap-panel" target="_blank"><spring:message
                            code="roadmap" />
                </a></li>
                <li><a href="contributors" target="_blank"><spring:message code="contributors" />
                </a></li>
                <li><a href="http://eepurl.com/jKaaf" target="_blank"><spring:message code="releases-mail-list" />
                </a></li>
            </ul>
            </p>
        </div>
        <div class="span4">
            <h3>
                <spring:message code="recomend" />
                !!
            </h3>
            <p>
            <div>
                <script>
                    !function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (!d.getElementById(id)) {
                            js = d.createElement(s);
                            js.id = id;
                            js.src = "//platform.twitter.com/widgets.js";
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, "script", "twitter-wjs");
                </script>
                <!-- Place this tag where you want the +1 button to render -->
                <g:plusone size="medium"></g:plusone>
            </div>
            <div id="fb-root"></div>
            <script>
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id))
                        return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=198574083529746";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            </script>
            <div class="fb-like"
                data-href="http://www.facebook.com/pages/encuestame/80467777529?bookmark_t=page"
                data-send="true" data-layout="button_count" data-width="200"
                data-show-faces="true" data-font="arial"></div>
            </p>
            <p>
            <div>
                <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.encuestame.org" data-text="Encuestame, the best open source survey and it's free !!" data-size="large" data-related="encuestame" data-hashtags="opensource,survey,free">Tweet</a>
                <a href="https://twitter.com/encuestame" class="twitter-follow-button" data-show-count="false">Follow @encuestame</a>                
            </div>
            <br />


            <!-- Place this render call where appropriate -->
            <script type="text/javascript">
                (function() {
                    var po = document.createElement('script');
                    po.type = 'text/javascript';
                    po.async = true;
                    po.src = 'https://apis.google.com/js/plusone.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(po, s);
                })();
            </script>
            </p>
        </div>
        <div class="span4">
            <p>
                <a class="btn btn-large btn-inverse"
                    href="https://github.com/encuestame/encuestame/zipball/release" target="_blank"><spring:message
                            code="get.source" /> &raquo;</a>
            </p>
            <p>
                <a class="btn btn-large btn-danger"
                    href="http://sourceforge.net/projects/encuestame/files/encuestame_beta/" target="_blank"><spring:message
                            code="get.download" /> &raquo;</a>
            </p>
        </div>
    </div>
</div>
<div class="row-fluid">
    <div class="span4">
        <h2>
            <spring:message code="rss.commits" />
        </h2>
        <p>
        <div id="commits"></div>
        </p>

    </div>
    <!--/span-->
    <div class="span8">
        <div class="row-fluid">
            <div class="span4">
                <h2>
                    <spring:message code="rss.twitter" />
                </h2>
                <p>
                <div id="issues"></div>
                </p>
            </div>
            <div class="span4">
                <h2>
                    <spring:message code="rss.wiki" />
                </h2>
                <p>
                <div id="wiki"></div>
                </p>

            </div>
            <div class="span4">
                <h2>
                    <spring:message code="rss.facebook" />
                </h2>
                <p>
                <div id="facebook"></div>
                </p>
            </div>
        </div>
    </div>
    <!--/span-->
</div>
<!--/row-->