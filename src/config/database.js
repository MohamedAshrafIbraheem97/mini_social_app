import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_URI,
    dialect: "mysql",
  },
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync({ alter: false, force: false });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

export default sequelize;
