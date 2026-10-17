import * as CommentService from "./comment.service.js";
export const createBulkComments = async (req, res) => {
  try {
    const comments = await CommentService.createBulkComments(req.body.comments);
    return res
      .status(201)
      .json({ message: "Comments created successfully", comments });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const comment = await CommentService.updateComment(
      req.params.commentId,
      req.body,
      req.headers["logged-in-user"],
    );

    return res
      .status(200)
      .json({ message: "Comment updated successfully", comment });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const findOrCreate = async (req, res) => {
  try {
    const commnet = await CommentService.findOrCreate(req.body);
    res.status(200).json({ message: commnet });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const searchComments = async (req, res) => {
  try {
    const commnet = await CommentService.searchComments(
      req.query.word,
      Number(req.query.page),
      Number(req.query.limit),
    );

    res.status(200).json({ message: commnet });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const recentComments = async (req, res) => {
  try {
    const commnet = await CommentService.recentComments(req.params.postId);

    res.status(200).json({ message: commnet });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const getCommentById = async (req, res) => {
  try {
    const commnet = await CommentService.getCommentById(req.params.id);

    res.status(200).json({ message: commnet });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
