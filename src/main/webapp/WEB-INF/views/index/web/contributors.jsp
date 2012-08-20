<%@ include file="/WEB-INF/jsp/includes/taglibs.jsp"%>
<div class="page-haeder">
    <h1>
        <spring:message code="contributors" />
    </h1>
</div>
<br />
<br />
<article class="row-fluid">

    <section class="web-contributor-item">
        <h3>
            Diana Paola Morales
        </h3>
        <div class="container">
            <div class="image">
                 <img src="http://www.gravatar.com/avatar/172ee6b7fe9935425f680f338888299f"/>
            </div>
            <div class="bio">
                <blockquote><spring:message code="contributors.dmorales" /></blockquote>
                <div>
					<a href='https://www.ohloh.net/accounts/29308?ref=Detailed' target='_top'>
					<img alt='Ohloh profile for dianmorales' border='0' height='35' src='https://www.ohloh.net/accounts/29308/widgets/account_detailed.gif' width='191' />
					</a>
                   <a class="linkedin-profileinsider-inline" 
                      href="http://at.linkedin.com/in/dianmorales" target="_blank">
                      <img src="<c:url value="/resources/img/social/linkedin.gif"/>"/>
                    </a>    					
					<a href="https://twitter.com/dianmora" class="twitter-follow-button" data-size="large" data-dnt="true" data-show-count="false">Follow @dianmora</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>				        
                </div>                
            </div>
        </div>
        <div class="link">
           <a href="http://about.me/dianmorales" target="_blank">
                   <spring:message code="contributors.about.me" />
           </a>          
        </div>
    </section>

    <section class="web-contributor-item">
        <h3>
            Juan Carlos Picado
        </h3>
        <div class="container">
            <div class="image">
                <img src="http://www.gravatar.com/avatar/c676605ff39f9c7a43f5518a8ce54e12"/>
            </div>
            <div class="bio">
                <blockquote><spring:message code="contributors.jpicado" /></blockquote>
                <div>
	                <a href='https://www.ohloh.net/accounts/129650?ref=Detailed' target='_top'>
					<img alt='Ohloh profile for Juan Picado' border='0' height='35' src='https://www.ohloh.net/accounts/129650/widgets/account_detailed.gif' width='191' />
					</a>
                    <a class="linkedin-profileinsider-inline" 
                       href="http://at.linkedin.com/in/jotadeveloper" target="_blank">
                       <img src="<c:url value="/resources/img/social/linkedin.gif"/>"/>
                     </a>					
					<a href="https://twitter.com/jotadeveloper" class="twitter-follow-button" data-show-count="false" data-lang="es" data-size="large" data-dnt="true">Seguir a @jotadeveloper</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
				</div>
            </div>
        </div>
        <div class="link">
           <a href="http://about.me/jotadeveloper" target="_blank">
                   <spring:message code="contributors.about.me" />
           </a>
        </div>
    </section>

    <section class="web-contributor-item">
        <h3>Francisco Moli</h3>
        <div class="container">
            <div class="image">
                <img src="http://www.gravatar.com/avatar/5a217f0256f0950866ca955c043587aa"/>
            </div>
            <div class="bio">
                <blockquote><spring:message code="contributors.moli" /></blockquote>
            </div>
        </div>
        <div class="link">
           <a href="http://about.me/jotadeveloper" target="_blank">
                <spring:message code="contributors.about.me" />
           </a>
        </div>
    </section>

     <section class="web-contributor-item">
        <h3>
            Dámaris Suárez Corrales 
        </h3>
        <div class="container">
            <div class="image">
                <img src="http://www.gravatar.com/avatar/ba2891924b910f1a2449b8b1e573fa3a"/>
            </div>
            <div class="bio">
                <blockquote><spring:message code="contributors.damaris" /></blockquote>
            </div>
        </div>
        <div class="link">
           <a href="#" target="_blank">
              <spring:message code="contributors.about.me" />
           </a>
        </div>
    </section>

     <section class="web-contributor-item">
        <h3>
            David Perez López
        </h3>
        <div class="container">
            <div class="image">
                <img src="http://www.gravatar.com/avatar/bc48e9719bb1f4d7ff9a9dd99a50eb98"/>
            </div>
            <div class="bio">
               <blockquote> <spring:message code="contributors.dperez" /></blockquote>
            </div>
        </div>
        <div class="link">
           <a href="#" target="_blank">
               <spring:message code="contributors.about.me" />
           </a>
        </div>
    </section>
</article>