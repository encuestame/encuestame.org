<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="page-haeder">
    <h1><spring:message code="features"/></h1>
</div>
<br/>
<br/>
<div class="row-fluid">
    <div class="tabbable tabs-left">
        <ul class="nav nav-tabs" id="tab">
            <li class="active"><a data-toggle="tab" href="#survey"><spring:message code="features.title.survey"/></a></li>
            <li><a data-toggle="tab" href="#tweetpoll"><spring:message code="features.title.tweetpoll"/></a></li>
            <li><a data-toggle="tab" href="#poll"><spring:message code="features.title.poll"/></a></li>
            <li><a data-toggle="tab" href="#social"> <spring:message code="features.title.social.networks"/></a></li>
            <li><a data-toggle="tab" href="#not"><spring:message code="features.title.notification"/></a></li>
            <li><a data-toggle="tab" href="#profile"><spring:message code="features.title.profile"/></a></li>
            <li><a data-toggle="tab" href="#admon"><spring:message code="features.title.administration"/></a></li>
            <li><a data-toggle="tab" href="#install"><spring:message code="features.title.installation"/></a></li>
            <li><a data-toggle="tab" href="#locations"><spring:message code="features.title.location"/></a></li>
            <li><a data-toggle="tab" href="#project"><spring:message code="features.title.projects"/></a></li>
            <li><a data-toggle="tab" href="#search"><spring:message code="features.title.search"/></a></li>
            <li><a data-toggle="tab" href="#rest"><spring:message code="features.title.rest.api"/></a></li>
            <li><a data-toggle="tab" href="#hashtag"><spring:message code="features.title.rest.hashTag"/></a></li>
            <li><a data-toggle="tab" href="#mobile"><spring:message code="features.title.rest.mobile"/></a></li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div id="survey" class="tab-pane fade">
                <h3><spring:message code="features.title.survey"/></h3>
                <p> <spring:message code="features.survey"/></p>
            </div>
            <div id="tweetpoll" class="tab-pane fade">
                <h3><spring:message code="features.title.tweetpoll"/></h3>
                <p> <spring:message code="features.tweetpoll"/></p>
            </div>
             <div id="poll" class="tab-pane fade">
                <h3><spring:message code="features.title.poll"/></h3>
                <p> <spring:message code="features.poll"/></p>
            </div>
            <div id="social" class="tab-pane fade">
                <h3><spring:message code="features.title.social.networks"/></h3>
               <p> <spring:message code="features.social.networks"/></p>
            </div>
            <div id="not" class="tab-pane fade">
                <h3><spring:message code="features.title.notification"/></h3>
                 <p> <spring:message code="features.notification"/></p>
            </div>
            <div id="profile" class="tab-pane fade">
               <h3><spring:message code="features.title.profile"/></h3>
                <p> <spring:message code="features.profile"/></p>
            </div>
            <div id="admon" class="tab-pane fade">
                 <h3><spring:message code="features.title.administration"/></h3>
                 <p> <spring:message code="features.administration"/></p>
            </div>
            <div id="install" class="tab-pane fade">
                 <h3><spring:message code="features.title.installation"/></h3>
                 <p> <spring:message code="features.installation"/></p>
            </div>
            <div id="locations" class="tab-pane fade">
                 <h3><spring:message code="features.title.location"/></h3>
                 <p> <spring:message code="features.location"/></p>
            </div>
            <div id="project" class="tab-pane fade">
                   <h3><spring:message code="features.title.projects"/></h3>
               <p> <spring:message code="features.projects"/></p>
            </div>
            <div id="search" class="tab-pane fade">
                 <h3><spring:message code="features.title.search"/></h3>
                 <p> <spring:message code="features.search"/></p>
            </div>
            <div id="rest" class="tab-pane fade">
                    <h3><spring:message code="features.title.rest.api"/></h3>
                    <p> <spring:message code="features.rest.api"/></p>
            </div>
             <div id="hashtag" class="tab-pane fade">
               <h3><spring:message code="features.title.rest.hashTag"/></h3>
               <p> <spring:message code="features.hashTag"/></p>
            </div>
            <div id="mobile" class="tab-pane fade">
               <h3><spring:message code="features.title.rest.mobile"/></h3>
               <p> <spring:message code="features.mobile"/></p>
            </div>
        </div>
    </div>
</div>