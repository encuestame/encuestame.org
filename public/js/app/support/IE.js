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
 *  @module IE
 *  @namespace Support
 *  @class Feed
 */
define(["jquery"],function($){

    var _MIN_IE_SUPPORTED = 8.0;

    var IE = function () {

        // Returns the version of Internet Explorer or a -1
        // (indicating the use of another browser).
        this.getInternetExplorerVersion = function ()  {
            var rv = -1; // Return value assumes failure.
            if (navigator.appName == 'Microsoft Internet Explorer') {
              var ua = navigator.userAgent;
              var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
              if (re.exec(ua) !== null)
                rv = parseFloat( RegExp.$1 );
              }
              return rv;
        };

       /// check if is a IE version and it's compatible with the defined minimum version
       this.checkVersion = function() {
          var msg = "You're not using Internet Explorer.";
          var ver = this.getInternetExplorerVersion();
          if ( ver > -1 )
          {
            return (ver >= _MIN_IE_SUPPORTED);
          } else {
            return true;
          }
        };

    };

    return IE;
});


