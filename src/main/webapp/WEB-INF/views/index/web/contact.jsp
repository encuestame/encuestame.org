<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="page-haeder">
    <h1>

    </h1>
</div>

<div class="row-fluid">

    <div class="span12">
        <form:form method="post" action="sendMessage" cssClass="form-horizontal">

            <fieldset>
                <legend><spring:message code="more.contact" /></legend>
                <div class="control-group">
                    <label class="control-label" for="input01">
                        <spring:message code="contact.email"/>
                    </label>
                    <div class="controls">
                        <form:input path="email" cssClass="input-xlarge" />
                        <p class="help-block">
                            <spring:message code="contact.email.message"/>
                        </p>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="input01">
                        <spring:message code="contact.name"/>
                    </label>
                    <div class="controls">
                        <form:input path="name" cssClass="input-xlarge" />
                        <p class="help-block">
                            <spring:message code="contact.name.message"/>
                        </p>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="input01">
                        <spring:message code="contact.comment"/>
                    </label>
                    <div class="controls">
                        <form:textarea path="comment" cssClass="input-xlarge"></form:textarea>
                        <p class="help-block">
                            <spring:message code="contact.comment.message"/>
                        </p>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn btn-primary" type="submit" disabled="disabled">
                          <spring:message code="contact.send"/>
                    </button>
                 </div>
            </fieldset>
        </form:form>
    </div>
     <div class="span12">
        <p>
            <spring:message code="contact.write"/> <a href="mailto:info@encuestame.org">info[AT]encuestame.org</a>
        </p>
     </div>

</div>
<!--/row-->