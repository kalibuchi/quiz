

var models = require('../models/models');


module.exports = {};


module.exports.list = function(req, res, next) {
	
	models.Quiz.findAll().then(function(filas){
		// Escoge siempre la primera pregunta que venga de la capa de BDD
		res.render('list', {title: 'Pregunta', filas: filas});
	});
};

module.exports.question = function(req, res, next) {
	
	models.Quiz.findById(req.params.quizId).then(function(fila){
		res.render('question', {title: 'Pregunta', pregunta: fila.pregunta, numPregunta : req.params.quizId});
		
	});
	
// 	res.render('question', { title: 'Pregunta', pregunta: '¿Cuál es la capital de Italia?' });
};


module.exports.answer = function(req, res, next) {
	
	// FIXME: usar req.params.quizId

	models.Quiz.findById(req.params.quizId).then(function(fila){
		// Escoge siempre la primera pregunta que venga de la capa de BDD
		
		var ok = (req.query.respuesta === fila.respuesta);
		
		res.render('answer', { title: 'Respuesta', correcto: ok });
		
	});

};

