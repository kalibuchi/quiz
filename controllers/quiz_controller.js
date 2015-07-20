

var models = require('../models/models');


module.exports = {};



module.exports.question = function(req, res, next) {
	
	models.Quiz.findAll().then(function(filas){
		// Escoge siempre la primera pregunta que venga de la capa de BDD
		res.render('question', {title: 'Pregunta', pregunta: filas[0].pregunta});
		
	});
	
// 	res.render('question', { title: 'Pregunta', pregunta: '¿Cuál es la capital de Italia?' });
};


module.exports.answer = function(req, res, next) {
	

	models.Quiz.findAll().then(function(filas){
		// Escoge siempre la primera pregunta que venga de la capa de BDD
		
		var ok = (req.query.respuesta === filas[0].respuesta);
		
		res.render('answer', { title: 'Respuesta', correcto: ok });
		
	});

};

