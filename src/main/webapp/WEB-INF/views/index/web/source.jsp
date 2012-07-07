<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>

<div class="row-fluid">

    <h2>
        <spring:message code="source" />
    </h2>

    <div class="row">
        <p>
        <div class="span12">
            <h5>
                <spring:message code="source.subtitle"></spring:message>
            </h5>
            <p>
                <spring:message code="source.trisubtitle"></spring:message>
            </p>
            <p>
            <div>
                <ul>
                    <li>
                        <a href="http://sourceforge.net/projects/encuestame/files/">
                            http://sourceforge.net/projects/encuestame/files/
                        </a>
                    </li>
                    <li><a
                        href="http://code.google.com/p/encuestame/downloads/list">http://code.google.com/p/encuestame/downloads/list</a>
                    </li>
                    <li><a href="https://github.com/encuestame/encuestame">https://github.com/encuestame/encuestame</a>
                    </li>
                </ul>
            </div>
            </p>
        </div>
        </p>
    </div>

    <h2>
        <spring:message code="source.repo" />
    </h2>

    <div class="row">
        <div class="span12">
            <p>
            <h3>SourceForce</h3>
            <br />
            <div class="alert alert-info">
                <strong>git://encuestame.git.sourceforge.net/gitroot/encuestame/encuestame
                    (read-only)</strong>
            </div>
            </p>
            <p>
            <h3>Git Hub</h3>
            <br />
            <div class="alert alert-info">
                <strong>git clone
                    git://github.com/encuestame/encuestame.git</strong>
            </div>
            </p>
            <p>
            <h3>Google Code</h3>
            <br />
            <div class="alert alert-info">
                <strong>git clone
                    https://juanpicado19@code.google.com/p/encuestame/</strong>
            </div>
            </p>
            <p>
            <h3>Bitbucket</h3>
            <br />
            <div class="alert alert-info">
                <strong>git clone
                    https://bitbucket.org/juanpicado/encuestame.git</strong>
            </div>
            </p>
        </div>
    </div>

</div>
<!--/row-->