<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <a class="btn btn-navbar" data-toggle="collapse"
                data-target=".nav-collapse"> <span class="icon-bar"></span> <span
                class="icon-bar"></span> <span class="icon-bar"></span> </a> <a
                class="brand" href="<c:url value="/" />">
                    <span class="logo"></span>
                </a>
            <div class="nav-collapse">
                <ul class="nav pills">
                    <li class="<c:out value="${menu == 'home' ? 'active' : ''}"/>"><a href="<c:url value="/" />"><spring:message code="home"/></a></li>
                    <li class="<c:out value="${menu == 'features' ? 'active' : ''}"/>"><a href="<c:url value="/features" />"><spring:message code="features"/></a></li>
                    <li class="<c:out value="${menu == 'download' ? 'active' : ''}"/>"><a href="<c:url value="/download" />"><spring:message code="download"/></a></li>
                    <li class="<c:out value="${menu == 'screenshots' ? 'active' : ''}"/>"><a href="<c:url value="/screenshots" />"><spring:message code="screenshots"/></a></li>
                    <li class="<c:out value="${menu == 'contributors' ? 'active' : ''}"/>"><a href="<c:url value="/contributors" />"><spring:message code="contributors"/></a></li>
                    <li class="<c:out value="${menu == 'interest' ? 'active' : ''}"/> dropdown" id="menu1"><a class="dropdown-toggle"
                        data-toggle="dropdown" href="#menu1"> <spring:message code="more"/> <b
                            class="caret"></b> </a>
                        <ul class="dropdown-menu">
                        	<li><a href="https://groups.google.com/forum/?fromgroups&hl=es#!forum/encuestame" target="_blank">Forum</a>
                            <li><a href="http://code.encuestame.org"><spring:message code="more.browse"/></a></li>
                            <li><a href="http://stats.encuestame.org/git"><spring:message code="more.stats"/></a></li>
                            <li><a href="/source"><spring:message code="source"/></a></li>
                            <li><a href="http://ci.encuestame.org/"><spring:message code="more.inte"/></a></li>
                            <li><a href="http://issues.encuestame.org"><spring:message code="issues"/></a></li>
                            <li><a href="http://wiki.encuestame.org/dashboard.action"><spring:message code="wiki"/></a></li>
                            <li><a href="http://metrics.encuestame.org"><spring:message code="metrics"/></a></li>
                            <li><a href="contact"><spring:message code="more.contact"/></a></li>
                            <li><a href="/about"><spring:message code="about"/></a></li>
                            <li><a href="http://blog.encuestame.org">Blog</a></li>
                        </ul>
                    </li>
                </ul>
                <form action="http://wiki.encuestame.org/dosearchsite.action" class="navbar-search pull-left" method="get">
                   <input type="text" id="queryString" name="queryString" class="search-query" placeholder="<spring:message code="features.title.search"/>">
                </form>
            </div>
            <!--/.nav-collapse -->
        </div>
    </div>

</div>
