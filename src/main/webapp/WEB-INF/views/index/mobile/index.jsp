<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div id="mobile-index">
    <div data-role="page" id="home">

        <div data-role="header">
            <h1>
                <spring:message code="welcome" />
            </h1>
        </div>
        <!-- /header -->

        <div data-role="content">
            <h1>
                <img src="<c:url value="/resources/img/logo_encuestame-small.png" />"/>
            </h1>
            <p>
                <spring:message code="welcome.detail" />
            </p>
            <ul data-role="listview" data-theme="a" data-dividertheme="b"
                data-inset="true">
                <li><a href="features" rel="external"> <spring:message
                            code="features" />
                </a>
                </li>
                <li><a href="source" rel="external"> <spring:message
                            code="source" />
                </a>
                </li>
                <li><a href="download" rel="external"> <spring:message
                            code="download" />
                </a>
                </li>
                <li><a href="screenshots" rel="external"> <spring:message
                            code="screenshots" />
                </a>
                </li>
                <li><a href="contributors" rel="external"> <spring:message
                            code="contributors" />
                </a>
                </li>
                <li><a href="about" rel="external"> <spring:message
                            code="about" />
                </a>
                </li>
            </ul>
            <div>
                <a
                    href="http://www.facebook.com/pages/encuestame/80467777529?bookmark_t=page"><img
                    src="<c:url value="/resources/img/social/facebook.png" />">
                </a> <a href="http://twitter.com/encuestame"><img
                    src="<c:url value="/resources/img/social/twitter.png" />">
                </a>
            </div>
            <ul data-role="listview" data-theme="a" data-dividertheme="b" data-inset="true">
                <li><a href="#lang"> Change Language</a>
                </li>
            </ul>
        </div>
        <!-- /content -->

        <div data-role="footer">
            <h4>&copy; Encuestame 2012</h4>
        </div>
        <!-- /footer -->
    </div>
    <!-- /page -->

    <!-- Start of second page -->

<!-- Start of second page -->
    <div data-role="page" id="lang" data-position="fixed">

        <div data-role="header">
            <h1>Change your language</h1>
            <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
            <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
        </div><!-- /header -->

        <div data-role="content">
            <ul data-role="listview" data-theme="a" data-dividertheme="b"
                    data-inset="true">
                    <li><a href="index?lang=es"rel="external">
                            Español</a>
                    </li>
                    <li><a href="index?lang=en" rel="external">
                            English</a>
                    </li>
                </ul>
        </div><!-- /content -->
    </div><!-- /page -->

    <!-- /page -->
</div>
