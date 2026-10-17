import { col, fn } from "sequelize";
import Comment from "../comments/comment.model.js";
import User from "../users/user.model.js";
import Post from "./post.model.js";

export const createPost = async (body) => {
  const { title, content, userId } = body;
  const isUserFound = await User.findByPk(userId);

  if (!isUserFound) throw new Error("User not found");

  const post = new Post({ title, content, userId });
  return await post.save();
};
export const deletePost = async (postId, reqHeaders) => {
  const userId = Number(reqHeaders);
  const post = await Post.findByPk(postId);
  if (!post) throw new Error("Post not found");

  if (post.userId !== userId)
    throw new Error("You are not the owner of the post");

  return await post.destroy();
};
// Retrieve all posts, including the details of the user who created each post and the associated comments. (Show
// only for the post the “id, title”, and for user “id, name”, and for the comments “id, content”) (0.5 Grade)
// o URL: GET /posts/details
export const allPostsDetails = async () => {
  const posts = await Post.findAll({
    attributes: ["id", "title"],
    include: [
      { model: User, attributes: ["id", "name"] },
      { model: Comment, attributes: ["id", "content"] },
    ],
  });

  return posts;
};

// Retrieve all posts and count the number of comments associated with each post. (0.5 Grade)
// o URL: GET /posts/comment-count

export const allPostsWithCommentCount = async () => {
  const posts = await Post.findAll({
    attributes: [
      "id",
      "title",
      [fn("COUNT", col("Comments.id")), "commentCount"],
    ],
    include: {
      model: Comment,
      as: "Comments",
      attributes: [],
    },
    group: ["post.id"],
  });

  return posts;
};
