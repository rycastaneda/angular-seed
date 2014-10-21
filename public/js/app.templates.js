angular.module('templates-default', ['home/template.tpl.html']);

angular.module("home/template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/template.tpl.html",
    "<html></html>");
}]);
