(function(root) {
    "use strict";
    var Backbone = require("backbone");
    Backbone.$ = (root.jQuery || root.$ || require("jquery"));
    module.exports = Backbone;
})(this);