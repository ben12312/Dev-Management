'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsToMany(models.Developer, { through: "DevProjects", foreignKey: "projectId" })
    }

    formatedDay() {
      return `${this.time_line} Day`
    }
  };
  Project.init({
    project_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Project Name can not be empty'
        }
      }
    },
    time_line: {
      type: DataTypes.INTEGER
    },
    importance: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Importance level can not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};