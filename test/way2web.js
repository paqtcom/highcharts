(function(Way2web) {
    'use strict';

    /**
     * Call function if the dom is ready.
     */
    Way2web.onDomReady = function() {
        Way2web.Charts.init();
    };
})(window.Way2web = window.Way2web || {});

if (document.readyState != 'loading') {
    window.Way2web.onDomReady();
} else {
    document.addEventListener('DOMContentLoaded', window.Way2web.onDomReady);
}
