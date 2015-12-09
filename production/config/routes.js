const express         = require('express'),
      router          = express.Router(),
      bodyParser      = require('body-parser'),
      animeController = require('../controllers/animes.js');

router.route('/anime')
  .get(animeController.getAll)
  .post(animeController.createAnime);

router.route('/anime/:id')
  .get(animeController.getAnime)
  .patch(animeController.updateAnime)
  .delete(animeController.removeAnime);

module.exports = router;
