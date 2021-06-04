const { Sequelize } = require(".");

module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("customer", {
    // Giving the Customer model structure
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      notEmpty: true,
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      notEmpty: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      // defaultValue: "1111-11-11",
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    phone: {
      type: DataTypes.STRING(20),
      // defaultValue: "1111111111",
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(30),
      // defaultValue: "",
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    mileage: {
      type: DataTypes.STRING(20),
      // defaultValue: "",
      allowNull: true,
    },
  });

  return Customer;
};
