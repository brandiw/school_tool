'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    preferredname: DataTypes.STRING,
    usertypeId: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    portfolio: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};