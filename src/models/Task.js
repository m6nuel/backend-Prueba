const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Task', {
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false,
    });
  };