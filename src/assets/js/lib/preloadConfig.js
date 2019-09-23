import AOS from 'aos';
var QueryLoader2 = require("queryloader2");

var loader = QueryLoader2(document.querySelector("body"), {
    barColor: "#00156B",
    backgroundColor: "#fff",
    percentage: false,
    barHeight: 1,
    minimumTime: 200,
    fadeOutTime: 1000,
    onComplete: function () {
        AOS.init();
    }
});