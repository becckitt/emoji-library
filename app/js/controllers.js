'use strict';

var emojiApp = angular.module('emojiApp', []);

emojiApp.controller('EmojiListCtrl', function($scope, $http) {
  $http.get('https://api.github.com/emojis').success(function(data) {
    var restructuredJson = [];
    for(var emoji in data) {
      restructuredJson.push({name: emoji, link: data[emoji]});
    }
    $scope.emojis = restructuredJson;
  });
});
