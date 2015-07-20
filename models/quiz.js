

// Define el modelo (tabla) 'quiz'


module.exports = function(sequelize, DataTypes) {
	return sequelize.define('quiz', {
		pregunta: DataTypes.STRING,
		respuesta: DataTypes.STRING
	});
};


