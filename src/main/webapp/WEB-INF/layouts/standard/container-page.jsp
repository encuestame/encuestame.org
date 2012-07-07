<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>encuestame open source social survey</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <%@ include file="/WEB-INF/jsp/includes/web/javascript.jsp" %>
    <%@ include file="/WEB-INF/jsp/includes/meta.jsp" %>
    <%@ include file="/WEB-INF/jsp/includes/web/css.jsp" %>
  </head>

  <body>

    <tiles:insertAttribute name="header" ignore="true" />

    <div class="container">
        <tiles:insertAttribute name="content" />
         <hr>
        <tiles:insertAttribute name="footer" />
    </div>
    <tiles:insertAttribute name="extra-js" ignore="true"/>
  </body>
</html>