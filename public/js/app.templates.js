angular.module('templates-default', ['client/home/template.tpl.html']);

angular.module("client/home/template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("client/home/template.tpl.html",
    "<html></html>");
}]);
