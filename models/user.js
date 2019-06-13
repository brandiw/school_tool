'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    preferredname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    usertypeId: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    image: DataTypes.TEXT,
    location: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });

  user.associate = function(models) {
    models.user.belongsTo(models.usertype);
    models.user.hasMany(models.course, {as: 'teacher',foreignKey: 'teacherId'});
    models.user.belongsToMany(models.course, {through: "enrollment"});
  }

  user.prototype.isValidPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password);
  }

  user.prototype.toJSON = function(){
    var user = this.get();
    delete user.password;
    return user;
  }
  return user;
};


