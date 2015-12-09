'use strict';

aniApp.factory('animeData', ['$resource'], animeDataFactory);

function animeDataFactory($resource) {
  var Anime = $resource('/anime/:id', {id: '@id'});
  return {
    getAll: function() {
      return Anime.get();
    },
    addAnime: function(aniData) {
      return new Anime(aniData).$save();
    },
    updateAnime: function(aniData) {
      return Anime.update({id: ani._id})
    },
    deleteAnime: function(ani) {
      return Anime.delete({id: ani._id})
    }
  };
}
