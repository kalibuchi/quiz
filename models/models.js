var path = require('path');

var Sequelize = require('sequelize');

var sequelize = new Sequelize(null, null, null,
	{dialect: 'sqlite', storage: 'quiz.sqlite' });


var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

module.exports.Quiz = Quiz;


sequelize.sync().then(function() {
	
	Quiz.count().then(function(count){
		if (!count) {
			
			Quiz.create({
				pregunta: 'Capital de Italia',
				respuesta: 'Roma'
			}).then(function(){
				console.log('Creada BDD inicial');
			});
			
		}
	});
	
});
