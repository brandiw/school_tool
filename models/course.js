'use strict';
module.exports = (sequelize, DataTypes) => {
  var course = sequelize.define('course', {
    name: DataTypes.STRING,
    cohort: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    location: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  course.associate = function(models) {
    models.course.belongsToMany(models.user, {through: "enrollment"});
    models.course.belongsTo(models.user, {as: 'teacher', foreignKey: 'teacherId'});
  };
  return course;
};
