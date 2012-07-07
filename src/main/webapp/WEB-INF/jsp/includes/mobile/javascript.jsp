<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<script>
    jQuery(document).bind("mobileinit", function() {
        jQuery.mobile.ajaxEnabled = false;
    });
</script>
<script src="<c:url value="/resources/js/mobile.core.js" />"></script>
<!-- Development
<script src="<c:url value="/resources/js/jquery-1.7.1.js" />"></script>
<script src="<c:url value="/resources/js/jquery.mobile-1.0.1.js" />"></script>
 -->
<%@ include file="/WEB-INF/jsp/includes/analytics.jsp"%>

