// ==UserScript==
// @name         Trump Thread Style
// @version      1.1.2
// @namespace    TTS
// @description  MAGA theme for trump general threads on 4chan
// @license      nignog license
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/G0P/trump-thread-style/master/script.meta.js
// @downloadURL  https://raw.githubusercontent.com/G0P/trump-thread-style/master/script.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==
