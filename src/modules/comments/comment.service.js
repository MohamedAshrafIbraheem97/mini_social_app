import { Op, where } from "sequelize";
import Post from "../posts/post.model.js";
import User from "../users/user.model.js";
import Comment from "./comment.model.js";

// Create a bulk of Comments. (0.5 Grade)
// o URL: POST /comments
export const createBulkComments = async (comments) => {
  await Promise.all(
    comments.map(async (comment) => {
      const isPostFound = await Post.findByPk(comment.postId);
      if (!isPostFound)
        throw new Error(`Post with id: ${comment.postId} not found`);
      const isUserFound = await User.findByPk(comment.userId);
      if (!isUserFound)
        throw new Error(`User with id: ${comment.userId} not found`);
    }),
  );

  return await Comment.bulkCreate(comments);
};

// Update the content of a specific comment by its ID. (Ensure that only the owner of the comment can perform this
// action) (The user id that wants to perform this action will be given in the body). (0.5 Grade)
// o URL: PATCH /comments/:commentId
// o Inputfrom the body:{“userId”:3,“content”:”updated”}

export const updateComment = async (commentId, body, loggedInUserId) => {
  const { content, userId } = body;

  if (userId !== Number(loggedInUserId))
    throw new Error("You're not the owner of the comment");

  const comment = await Comment.findByPk(commentId);
  if (!comment) throw new Error("Comment not found");

  return await comment.update(
    { content },
    {
      where: {
        id: commentId,
      },
    },
  );
};

// find a comment for a specific post, user, and content. If the comment exists, return it, otherwise, create a new
// comment with the given details. (0.5 Grade)
// o URL: POST /comments/find-or-create
export const findOrCreate = async (body) => {
  const { userId, postId, content } = body;

  const post = Post.findByPk(postId);
  if (!post) throw new Error("Post not found");
  const user = User.findByPk(userId);
  if (!user) throw new Error("User not found");

  const comment = await Comment.findOrCreate({
    where: {
      postId: postId,
      userId: userId,
    },
    defaults: {
      content,
    },
  });

  return comment;
};

// Retrieve all comments that contain a specific word in their content and return the number of comments matched
// (use find and count). (0.5 Grade)
// o URL: GET /comments/search => (for example /comments/search?word=the)
export const searchComments = async (searchParam, page = 1, limit = 3) => {
  const offset = (page - 1) * limit;

  const comments = await Comment.findAndCountAll({
    where: {
      content: {
        [Op.substring]: searchParam,
      },
    },
    offset: offset,
    limit: limit,
  });

  return {
    totalComments: comments.count,
    currentPage: page,
    totalPages: Math.ceil(comments.count / limit),
    comments,
  };
};
// Retrieve the 3 most recent comments for a specific post, ordered by creation date. (0.5 Grade)
// o URL: GET /comments/newest/:postId

export const recentComments = async (postId) => {
  const comments = await Comment.findAll({
    where: {
      postId: {
        [Op.eq]: postId,
      },
    },
    limit: 3,
    order: [["createdAt", "DESC"]],
  });

  return comments;
};

// Get Specific Comment By PK with User and Post Information. (0.5 Grade)
// o URL: GET /comments/details/:id
export const getCommentById = async (commentId) => {
  const comments = await Comment.findByPk(commentId, {
    include: [{ model: User }, { model: Post }],
  });

  return comments;
};
