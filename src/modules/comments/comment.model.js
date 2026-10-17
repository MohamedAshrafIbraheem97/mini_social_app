import { DataTypes, Model } from "sequelize";
import User from "../users/user.model.js";
import Post from "../posts/post.model.js";
import sequelize from "../../config/database.js";

class Comment extends Model {}

Comment.init(
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
  },
);

User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Comment;
