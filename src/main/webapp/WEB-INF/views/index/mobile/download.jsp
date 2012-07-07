<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div id="mobile-index">
    <div data-role="page">

        <div data-role="header">
            <h1><spring:message code="download" /></h1>
            <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        </div>
        <!-- /header -->

        <div data-role="content">
            <!--Body content-->
                <p>Encuestame is downloadble from SourceForge and Google Code</p>
                 <p>
                <h3>SourceForge</h3>
                <div class="alert alert-info">
                    <strong>
                        <a href="http://sourceforge.net/projects/encuestame/files/"><spring:message code="download" /></a>
                    </strong>
                </div>
            </p>
             <p>
                <h3>Google Code</h3>
                <div class="alert alert-info">
                     <strong>
                        <a href="http://code.google.com/p/encuestame/downloads/list"><spring:message code="download" /></a>
                    </strong>
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
