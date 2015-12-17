'use strict';
animeApp.controller('AnimeController', ['$log', 'animeData', AnimeController]);

function AnimeController($log, animeData) {
  $log.info('This is the controller');

  var self = this;
  self.all=[];
  self.addAnime = addAnime;
  self.getAnimes = getAnimes;
  self.updateAnime = updateAnime;
  self.deleteAnime = deleteAnime;

  getAnimes();

  function addAnime() {
    animeData.addAnime(self.newAnime)
    .then(function(res) {
      getAnimes()
    })
    .catch(function(res) {
      $log.error('failer', res);
    })
    self.newAnime = {};
    self.newAnime.episodesWatched = 0;
    self.newAnime.episodesLeft = newAnime.totalEpisodes;
  }

  function getAnimes() {
    animeData.getAll()
      .$promise
      .then(function(res) {
        self.all = res.animes;
        $log.log(self)
      })
      .catch(function(res) {
        $log.error('failer', res);
      })
  }

  function updateAnime(anime) {

  }

  function deleteAnime(anime) {
    animeData.deleteAnime(anime)
      .$promise
      .then(function(res) {
        getAnimes()
      })
      .catch(function(res) {
        $log.error('failer', res);
      })
  }

}
