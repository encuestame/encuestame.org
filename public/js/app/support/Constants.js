/*
 * Copyright 2013 encuestame
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/***
 *  @author juanpicado19D0Tgm@ilDOTcom
 *  @version 2.0
 *  @module
 *  @namespace
 *  @class
 */
define(["jquery"],function($) {

    var _CONST = {
    	version : "1.146",
    	url_download : 'http://sourceforge.net/projects/encuestame/files/encuestame_beta/1.146/',
    	demo_url : "http://demo.encuestame.org",
    	github_repo : "http://github.com/encuestame",
    	rss : {
    		twitter : "http://api.twitter.com/1/statuses/user_timeline.json/",
    		download : "http://sourceforge.net/api/file/index/project-id/248649/mtime/desc/limit/20/rss",
    		facebook : "http://www.facebook.com/feeds/page.php?id=80467777529&format=rss20",
    		github : "https://github.com/encuestame/encuestame/commits/development.atom",
    		wiki : "http://wiki.encuestame.org/createrssfeed.action?types=page&types=blogpost&spaces=~juanpicado&spaces=RELEASE&title=Encuestame+Release+Feed&labelString%3D&excludedSpaceKeys%3D&sort=modified&maxResults=10&timeSpan=300&confirm=Create+RSS+Feed&showContent=false&os_authType=basic",

    	},
    	footer : {
    		facebook : "http://www.facebook.com/pages/encuestame/80467777529?bookmark_t=page",
    		twitter : 'http://www.twitter.com/encuestame',
    		ohloh : 'http://ohloh.net/p/encuestame',
    		source : 'http://sourceforge.net/projects/encuestame/'
    	}
    };
    return _CONST;
});