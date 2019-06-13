'use strict';
module.exports = (sequelize, DataTypes) => {
  var usertype = sequelize.define('usertype', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  usertype.associate = function(models) {
    models.usertype.hasMany(models.user);
  };
  return usertype;
};
