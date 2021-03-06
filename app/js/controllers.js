'use strict';

var emojiApp = angular.module('emojiApp', []);

emojiApp.controller('EmojiListCtrl', function($scope, $http, $interval) {
  $http.get('https://api.github.com/emojis').success(function(data) {
    var restructuredJson = [];
    for(var emoji in data) {
      var normalizedName = emoji.replace("_", " ");
      restructuredJson.push({name: normalizedName, link: data[emoji]});
    }
    $scope.emojis = restructuredJson;
    $scope.changingEmoji = randomEmoji();
    $interval( function() { $scope.changingEmoji = randomEmoji(); }, 1000);
  });
  
  function randomEmoji() {
    return $scope.emojis[(Math.floor(Math.random() * $scope.emojis.length))];
  }
});
