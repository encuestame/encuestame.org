<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div id="mobile-index">
    <div data-role="page">

        <div data-role="header">
            <h1><spring:message code="source" /></h1>
            <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        </div>
        <!-- /header -->

        <div data-role="content">
           <h5>
                <spring:message code="source.subtitle"></spring:message>
            </h5>
            <p>
                <spring:message code="source.trisubtitle"></spring:message>
            </p>
            <p>
            <div>
                <ul>
                    <li>
                        <a href="http://sourceforge.net/projects/encuestame/files/">Source Force Mirror</a>
                    </li>
                    <li><a
                        href="http://code.google.com/p/encuestame/downloads/list">Google Code Mirror</a>
                    </li>
                    <li><a href="https://github.com/encuestame/encuestame">Github Mirror</a>
                    </li>
                </ul>
            </div>
            </p>
        </div>
        <!-- /content -->

        <div data-role="footer">
            <h4>&copy; Encuestame 2012</h4>
        </div>
        <!-- /footer -->
    </div>
    <!-- /page -->
</div>
