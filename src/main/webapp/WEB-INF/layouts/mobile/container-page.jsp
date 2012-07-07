<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>

<!doctype html>
<!-- Conditional comment for mobile ie7 blogs.msdn.com/b/iemobile/ -->
<!--[if IEMobile 7 ]>    <html class="no-js iem7" lang="en"> <![endif]-->
<!--[if (gt IEMobile 7)|!(IEMobile)]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
<title>Welcome to Encuestame</title>
<%@ include file="/WEB-INF/jsp/includes/mobile/meta.jsp"%>
<%@ include file="/WEB-INF/jsp/includes/mobile/css.jsp"%>
<meta http-equiv="cleartype" content="on">
</head>
<body>
<!--     <div data-role="page" id="myPage"> -->
<!--         <header> -->
<%--             <tiles:insertAttribute name="header" ignore="true" /> --%>
<!--         </header> -->
<!--         <div data-role="content" id="myContent"> -->
<%--             <tiles:insertAttribute name="content" ignore="true" /> --%>
<!--         </div> -->
<%--         <tiles:insertAttribute name="extra-js" ignore="true" /> --%>
<!--         <footer> -->
<%--             <tiles:insertAttribute name="footer" ignore="true" /> --%>
<!--         </footer> -->
<!--     </div> -->
    <!--! end of #container -->

     <tiles:insertAttribute name="content" ignore="true" />

    <!-- scripts concatenated and minified via ant build script -->
    <%@ include file="/WEB-INF/jsp/includes/mobile/javascript.jsp"%>
    <!-- end concatenated and minified scripts-->
    <!-- <script src="https://getfirebug.com/firebug-lite.js"></script> -->
</body>
</html>
