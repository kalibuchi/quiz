var express = require('express');
var router = express.Router();

var controller = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/* GET credits. */
router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Créditos' });
});

/* GET preguntas. */
router.get('/quizes/question', controller.question);

/* GET respuestas. */
router.get('/quizes/answer', controller.answer);

module.exports = router;
