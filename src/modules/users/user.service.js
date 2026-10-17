import { Op } from "sequelize";
import User from "./user.model.js";

const UserService = {
  getAllUsers: async () => {
    User.sync();
    return User.findAll();
  },
  createUser: async (body) => {
    const { name, email, password, role } = body;

    const userFound = await User.findOne({ where: { email } });

    if (userFound) {
      throw new Error("Email already exists");
    }

    const newUser = User.build({ name, email, password, role });
    return await newUser.save();
  },
  createOrUpdateUser: async (userId, body) => {
    const { name, email, password, role } = body;

    const createdOrUpdatedUser = await User.upsert(
      { name, email, password, role },
      { where: { id: userId }, validate: false },
    );
    return createdOrUpdatedUser;
  },
  findByEmail: async (userEmail) => {
    const foundUser = await User.findOne({
      where: { email: { [Op.like]: userEmail } },
    });

    if (!foundUser) throw new Error("User not found");

    return foundUser;
  },
  findById: async (userId) => {
    const foundUser = await User.findByPk(userId, {
      attributes: { exclude: "role" },
    });

    if (!foundUser) throw new Error("User not found");

    return foundUser;
  },
};

export default UserService;
