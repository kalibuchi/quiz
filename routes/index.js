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


/* GET listado de preguntas. */
router.get('/quizes/', controller.list);

/* GET preguntas. */
router.get('/quizes/:quizId(\\d+)', controller.question);

/* GET respuestas. */
router.get('/quizes/:quizId(\\d+)/answer', controller.answer);




module.exports = router;
