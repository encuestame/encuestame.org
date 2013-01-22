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
 *  @module Support
 *  @namespace Support
 *  @class Feed
 */
define(["jquery", "foundation"],function($){

    var Feed = function (url, callback, params) {

       this.call = function() {
          var default_params = {
                  url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=?&q=' + encodeURIComponent(url),
                  dataType: 'json',
                  success: function(data) {
                      callback(data.responseData.feed);
                 }
          };
          $.merge(default_params, params || {});
     			$.ajax(default_params);
      	};
    };

    return Feed;
});


