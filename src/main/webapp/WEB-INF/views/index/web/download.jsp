<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="row-fluid">
    <p>
    <div class="page-haeder">
        <h1><spring:message code="download"/></h1>
    </div>
    <br/>
    <br/>
    </p>

    <div class="row-fluid">
        <div class="span2">
            <h4><spring:message code="downloads.last"/> <img src="http://amplicate.com/media/27080901/rss_icon.gif"/></h4>
            <div id="download" class="download"></div>
        </div>
        <div class="span10">
            <div class="well">
                <!--Body content-->
                <p>Encuestame is downloadble from SourceForge and Google Code</p>
                 <p>
                <h3>SourceForge</h3>
                <br />
                <div class="alert alert-info">
                    <strong>
                        <a href="http://sourceforge.net/projects/encuestame/files/">
                                 http://sourceforge.net/projects/encuestame/files/</a>
                    </strong>
                </div>
            </p>
             <p>
                <h3>Google Code</h3>
                <br />
                <div class="alert alert-info">
                     <strong>
                        <a href="http://code.google.com/p/encuestame/downloads/list">
                                 http://code.google.com/p/encuestame/downloads/list</a>
                    </strong>
                </div>
            </p>
            </div>
        </div>


    </div>