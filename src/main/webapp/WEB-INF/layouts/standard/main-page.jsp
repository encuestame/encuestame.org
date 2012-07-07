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
<%@ include file="/WEB-INF/jsp/includes/web/javascript.jsp"%>
<%@ include file="/WEB-INF/jsp/includes/meta.jsp"%>
<%@ include file="/WEB-INF/jsp/includes/web/css.jsp"%>
</head>

<body>
	<a href="https://github.com/encuestame/encuestame"><img
		style="position: absolute; top: 0; right: 0; border: 0; z-index: 9999;" 
		src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
		alt="Fork me on GitHub"></a>
	<tiles:insertAttribute name="header" ignore="true" />

    <div class="container">
        <tiles:insertAttribute name="content" />
        <hr>
        <tiles:insertAttribute name="footer" />
    </div>

    <tiles:insertAttribute name="extra-js" ignore="true" />
</body>
</html>