'use strict';
module.exports = (sequelize, DataTypes) => {
  var emergency = sequelize.define('emergency', {
    userId: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    relationship: DataTypes.STRING,
    phone: DataTypes.STRING,
    allergies: DataTypes.STRING,
    diet: DataTypes.TEXT
  }, {});
  emergency.associate = function(models) {
    // associations can be defined here
  };
  return emergency;
};