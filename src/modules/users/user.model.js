import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import { Role } from "../../utils/constants.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        checkPasswordLength(value) {
          if (value.length < 6) {
            throw new Error("Password length must be greater than 6 chars");
          }
        },
      },
    },
    role: {
      type: DataTypes.ENUM,
      values: [Role.ADMIN, Role.USER],
      defaultValue: "user",
      validate: {
        isIn: {
          args: [[Role.ADMIN, Role.USER]],
          msg: `Role should be ${Object.values(Role)}`,
        },
      },
    },
  },

  {
    timestamps: true,
    hooks: {
      beforeCreate(user) {
        if (user.name.length < 3) {
          throw new Error(
            "the name of the user must be greater than 2 characters.",
          );
        }
      },
    },
  },
);

export default User;
