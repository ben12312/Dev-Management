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
  };
  Project.init({
    project_name: {
      type: DataTypes.STRING,
      notEmpty: {
        msg: 'Project Name can not be empty'
      }
    },
    time_line: {
      type: DataTypes.INTEGER,
      notNull: {
        msg: 'Time Line should be filled'
      }
    },
    importance: {
      type: DataTypes.STRING,
      notEmpty: {
        msg: 'Importance level can not be empty'
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};