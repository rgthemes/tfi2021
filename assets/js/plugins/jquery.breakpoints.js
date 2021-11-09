/*!
* BreakPointsJQ v1.0.0
* By Fayearth - https://github.com/fayearth
* Licensed under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
!function(t){"use strict";function e(){var n=window.getComputedStyle(document.body,":after").getPropertyValue("content");return'"'===n.charAt(0)&&(n=n.substring(1,n.length-1)),n}function n(){var n=e();n!==r&&(t(document).trigger("breakpointchange",[n]),r=n)}var r=null;t.fn.getBreakpoint=function(){return e()||null},t(function(){t(window).on("load orientationchange resize",n).trigger("resize")})}(jQuery);
