<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div id="mobile-index">

   <!-- Start of first page -->
<div data-role="page" id="features">

    <div data-role="header">
        <h1><spring:message code="features"/></h1>
         <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
    </div><!-- /header -->

    <div data-role="content">
       <ul data-role="listview" data-filter="true" data-theme="a" data-dividertheme="b" data-inset="true">
            <li><a href="#survey"> <spring:message code="features.title.survey"/></a></li>
            <li><a href="#tweetpoll"> <spring:message code="features.title.tweetpoll"/></a></li>
            <li><a href="#poll"> <spring:message code="features.title.poll"/></a></li>
            <li><a href="#social"> <spring:message code="features.title.social.networks"/></a></li>
            <li><a href="#not"> <spring:message code="features.title.notification"/></a></li>
            <li><a href="#profile"> <spring:message code="features.title.profile"/></a></li>
            <li><a href="#admon"> <spring:message code="features.title.administration"/></a></li>
            <li><a href="#install"> <spring:message code="features.title.installation"/></a></li>
            <li><a href="#loc"> <spring:message code="features.title.location"/></a></li>
            <li><a href="#pro"> <spring:message code="features.title.projects"/></a></li>
            <li><a href="#search"> <spring:message code="features.title.search"/></a></li>
            <li><a href="#api"> <spring:message code="features.title.rest.api"/></a></li>
            <li><a href="#hash"> <spring:message code="features.title.rest.hashTag"/></a></li>
        </ul>
    </div><!-- /content -->

</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="survey" data-position="fixed">

    <div data-role="header">
        <h1><spring:message code="features.title.survey"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.survey"/>
        </p>
        <p>
            <a href="#features" data-role="button" data-icon="arrow-l">
              <spring:message code="features"/>
            </a>
            <a href="#tweetpoll" data-role="button" data-icon="arrow-r">
               <spring:message code="features.title.tweetpoll"/>
            </a>
        </p>
    </div><!-- /content -->
</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="tweetpoll">

    <div data-role="header">
        <h1><spring:message code="features.title.tweetpoll"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.tweetpoll"/>
        </p>
        <p>
             <a href="#survey" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.survey"/>
            </a>
            <a href="#poll" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.poll"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->




<!-- Start of second page -->
<div data-role="page" id="poll">

    <div data-role="header">
        <h1><spring:message code="features.title.poll"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.poll"/>
        </p>
        <p>
             <a href="#survey" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.tweetpoll"/>
            </a>
            <a href="#social" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.social.networks"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->



<!-- Start of second page -->
<div data-role="page" id="social">

    <div data-role="header">
        <h1><spring:message code="features.title.social.networks"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.social.networks"/>
        </p>
        <p>
             <a href="#survey" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.poll"/>
            </a>
            <a href="#not" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.notification"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="not">

    <div data-role="header">
        <h1><spring:message code="features.title.notification"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.notification"/>
        </p>
        <p>
             <a href="#social" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.social.networks"/>
            </a>
            <a href="#profile" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.profile"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="profile">

    <div data-role="header">
        <h1><spring:message code="features.title.profile"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.profile"/>
        </p>
        <p>
             <a href="#social" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.notification"/>
            </a>
            <a href="#admon" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.administration"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->



<!-- Start of second page -->
<div data-role="page" id="admon">

    <div data-role="header">
        <h1><spring:message code="features.title.administration"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.administration"/>
        </p>
        <p>
             <a href="#social" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.profile"/>
            </a>
            <a href="#install" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.installation"/>
            </a>
        </p>
    </div><!-- /content -->


</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="install">

    <div data-role="header">
        <h1><spring:message code="features.title.installation"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.installation"/>
        </p>
        <p>
             <a href="#admon" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.administration"/>
            </a>
            <a href="#loc" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.location"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->



<!-- Start of second page -->
<div data-role="page" id="loc">

    <div data-role="header">
        <h1><spring:message code="features.title.location"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.location"/>
        </p>
        <p>
             <a href="#install" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.installation"/>
            </a>
            <a href="#pro" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.projects"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->



<!-- Start of second page -->
<div data-role="page" id="pro">

    <div data-role="header">
        <h1><spring:message code="features.title.projects"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.projects"/>
        </p>
        <p>
             <a href="#loc" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.location"/>
            </a>
            <a href="#search" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.search"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->

<!-- Start of second page -->
<div data-role="page" id="search">

    <div data-role="header">
        <h1><spring:message code="features.title.search"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.search"/>
        </p>
        <p>
             <a href="#pro" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.projects"/>
            </a>
            <a href="#api" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.rest.api"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->


<!-- Start of second page -->
<div data-role="page" id="api">

    <div data-role="header">
        <h1><spring:message code="features.title.rest.api"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.rest.api"/>
        </p>
        <p>
             <a href="#search" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.search"/>
            </a>
            <a href="#hash" data-role="button" data-icon="arrow-r">
                <spring:message code="features.title.rest.hashTag"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->

<!-- Start of second page -->
<div data-role="page" id="hash">

    <div data-role="header">
        <h1><spring:message code="features.title.rest.hashTag"/></h1>
        <a href='index' rel="external" class='ui tn-right'  data-icon='arrow-l'>Home</a>
        <a href='#features' class='ui tn-left' data-icon='arrow-l'>Back</a>
    </div><!-- /header -->

    <div data-role="content">
        <p>
            <spring:message code="features.hashTag"/>
        </p>
        <p>
             <a href="#api" data-role="button" data-icon="arrow-l">
                <spring:message code="features.title.rest.api"/>
            </a>
            <a href="#features" data-role="button" data-icon="arrow-r">
                <spring:message code="features"/>
            </a>
        </p>
    </div><!-- /content -->

</div><!-- /page -->

</div>