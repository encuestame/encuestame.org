<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div id="mobile-index">
    <div data-role="page">

        <div data-role="header">
            <h1><spring:message code="download" /></h1>
            <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        </div>
        <!-- /header -->

        <div data-role="content">
            <%@ include file="/WEB-INF/jsp/includes/about.jsp"%>
        </div>
        <!-- /content -->

        <div data-role="footer">
            <h4>&copy; Encuestame 2012</h4>
        </div>
        <!-- /footer -->
    </div>
    <!-- /page -->
</div>
