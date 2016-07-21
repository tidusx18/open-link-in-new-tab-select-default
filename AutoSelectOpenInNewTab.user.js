// ==UserScript==
// @name         Auto Select Open Link In New Tab ("_BLANK")
// @version      1.0.0
// @description  When adding or editing a link, the "Open in new tab" option will be automatically selected by default.
// @author       Daniel Victoriano
// @match        https://fiu.blackboard.com/*
// ==/UserScript==

(function() {
    'use strict';

var selectOption = document.querySelector('#targetlist option[value="_blank"]').selected = true;

})();