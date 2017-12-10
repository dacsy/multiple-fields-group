
angular.module('app', ["angucomplete-alt"])
    .directive('multipleFieldsGroup', function ($templateCache) {
        var emptyObject = {};
        return {
            restrict: 'EA',
            template: $templateCache('multiple-fields-group-tpl.html'),
            scope: {
                objects: '=',
                emptyObject: "=",
                minimumGroup: "=",
                maximumGroup: "="
            },
            transclude: true,
            controller: function () {
            },
            link: function (scope, element) {
                if (!scope.emptyObject) {
                    scope.emptyObject = emptyObject;
                }
                scope.addRow = function () {
                    if (scope.objects.length)
                        scope.objects.push(angular.copy(scope.emptyObject));
                };
                scope.addTopRow = function () {
                    scope.objects.splice(0, 0, angular.copy(scope.emptyObject));
                }
                scope.removeThisItem = function (person, index) {
                    scope.objects.splice(index, 1);
                }
            }
        };
    })