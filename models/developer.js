'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.belongsToMany(models.Project, { through: "DevProjects", foreignKey: "devId" })
    }
    // Instance Method
    addNameWithCompany() {
      return `${this.name} IO-dev`
    }
  };
  Developer.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name can not be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Email can not be empty'
        },
        isEmail: {
          msg: 'Need to fill with email format'
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Phone number can not be empty'
        }
      }
    },
    git_username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Git username can not be empty'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Gender username can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please type your password'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Select the role`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};