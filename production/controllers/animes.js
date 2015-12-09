var Anime = require('../models/Anime');

function getAll(req, res) {
  Anime.find(function(err, animes) {
    if (err) res.json({message: 'There is no anime'});
    res.json({animes: animes});
  });
}

function createAnime(req, res) {
  var anime = new Anime(req.body);
  anime.save(function(err) {
    if (err) res.json({message: err + '. Could not add anime'});
    res.json({anime: anime})
  });
}

function getAnime(req, res) {
  var id = req.params.id;
  Anime.findById({_id: id}, function (err, anime) {
    if (err) res.json({message: err + '. Could not get anime'});
    res.json({anime: anime});
  });
}

function updateAnime(req, res) {
  var id = req.params.id;
  Anime.findById({_id: id}, function (err, anime) {
    if (err) res.json({message: err + '. Could not editanime'});
    if (req.body) anime.episodesWatched +=1
    if (req.body) anime.episodesLeft -=1;
    anime.save(function (err) {
      if (err) res.json({message: err + '. Could not edit anime'});
      res.json({message: 'Anime episodes updates',anime: anime});
    });
  });
}

function removeAnime(req, res) {
  var id = req.params.id;
  Anime.remove({_id: id}, function(err){
    if (err) res.json({message: err + '. Could not delete anime'});
    res.json({message: 'Anime deleted'})
  });
}

module.exports = {
  getAll: getAll,
  createAnime: createAnime,
  updateAnime: updateAnime,
  removeAnime: removeAnime
}
