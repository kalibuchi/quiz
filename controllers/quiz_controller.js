

module.exports = {};



module.exports.question = function(req, res, next) {
	res.render('question', { title: 'Pregunta', pregunta: '¿Cuál es la capital de Italia?' });
};


module.exports.answer = function(req, res, next) {
	
	var ok = (req.query.respuesta === 'Roma');
	
	res.render('answer', { title: 'Respuesta', correcto: ok });
};

