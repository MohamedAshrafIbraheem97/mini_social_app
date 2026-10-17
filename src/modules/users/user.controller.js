import userService from "./user.service.js";

const UserController = {
  getAll: async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json({ users });
  },
  createUser: async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createOrUpdateUser: async (req, res) => {
    try {
      const user = await userService.createOrUpdateUser(
        req.params.id,
        req.body,
      );
      res
        .status(201)
        .json({ message: "User created or updated successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Write an API endpoint to find a user by their email address. (0.5 Grade)
  // o URL: GET /users/by-email (for example /user/by-email?email=user1@gmail.com)
  findByEmail: async (req, res) => {
    try {
      if (!req.query.email) {
        throw new Error("Email not provided");
      }
      const user = await userService.findByEmail(req.query.email);

      res.status(200).json({ message: "User found successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  // Retrieve a user by their PK, excluding the “role” field from the response. (0.5 Grade)
  // o URL: GET /user/:id
  findByID: async (req, res) => {
    try {
      const user = await userService.findById(req.params.id);

      res.status(200).json({ message: "User found successfully", user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
export default UserController;
