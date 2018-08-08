'use strict';
module.exports = (sequelize, DataTypes) => {
  var usertype = sequelize.define('usertype', {
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  usertype.associate = function(models) {
    // associations can be defined here
  };
  return usertype;
};