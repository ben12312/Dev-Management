'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DevProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DevProject.belongsTo(models.Project, { foreignKey: "projectId" })

      DevProject.belongsTo(models.Developer, { foreignKey: "devId" })

    }
  };
  DevProject.init({
    devId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    position: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please type your Position'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'DevProject',
  });
  return DevProject;
};