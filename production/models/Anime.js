var mongoose = require('mongoose');

var animeSchema = mongoose.Schema({
  title: String,
  totalEpisodes: Number,
  episodesWatched: Number,
  epsiodesLeft: Number
});

var Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;
