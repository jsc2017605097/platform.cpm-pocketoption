!function(e,t){if((!/\bMSIE/i.test(navigator.userAgent)||e.opera)&&!function(){var t=e.navigator.userAgent,n=new RegExp("version/(\\d+(\\.\\d+)?)","i"),i=new RegExp("(?:opera|opr)[\\s/](\\d+(\\.\\d+)?)","i");function o(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}var r=o(n);if(/msie|trident/i.test(t))return!0;if(/opera|opr/i.test(t)){var a=r||o(i);return""!==a&&a<12}return!1}()&&(n=e.navigator.userAgent,!/(Mobile.+Firefox)|(iPhone.+FxiOS)/.test(n))){var n,i,o,r,a={BALANCER:"//balancer-cloud.livetex.ru"};if("undefined"!=typeof LiveTex&&void 0!==LiveTex.liveTexID&&(e.liveTexID=LiveTex.liveTexID),e.LTX_VERSION="1.2.36",/Opera Mini/.test(navigator.userAgent))return!1;void 0===e.LiveTex&&(e.LiveTex={}),!0!==e.LiveTex.is_init?(e.LiveTex.is_init=!0,i=function(){function t(){n.onreadystatechange=s,n.onload=s,document.body.removeChild(n)}var n=document.createElement("script");n.onreadystatechange=function(){"complete"!==n.readyState&&"loaded"!==n.readyState||t()};var i=a.BALANCER+"/get-client/?site_id="+liveTexID.toString()+"&version="+LTX_VERSION+"&target=path&rnd="+d(),o=e.__LIVETEX_CUSTOM_WIDGET_URL__;n.onload=t,n.src=o||i,document.body.appendChild(n)},o=new XMLHttpRequest,r=a.BALANCER+"/get-client/?site_id="+liveTexID.toString()+"&version="+LTX_VERSION+"&target=settings_path&rnd="+d(),o.overrideMimeType("application/json"),o.open("GET",r,!0),o.onload=function(){e.LiveTex.envSettings=JSON.parse(o.responseText),i()},o.send(null)):"undefined"!=typeof console&&void 0!==console.error&&console.error("LiveTex script loaded two or more times. Load the script only once, please.")}function d(){return Math.random().toString(36).substr(2)}function s(){}}(window);