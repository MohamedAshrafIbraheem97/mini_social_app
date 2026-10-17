import * as PostService from "./post.service.js";
export const createPost = async (req, res) => {
  try {
    const post = await PostService.createPost(req.body);
    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
// Delete a post by its id (Ensure that only the owner of the post can perform this action) (0.5 Grade)
// o URL: DELETE /posts/:postId
export const deletePost = async (req, res) => {
  try {
    const post = await PostService.deletePost(
      req.params.postId,
      req.headers["user-id"],
    );
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllPostsDetails = async (req, res) => {
  try {
    const posts = await PostService.allPostsDetails();
    return res
      .status(200)
      .json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const getAllPostsWithCommentCount = async (req, res) => {
  try {
    const posts = await PostService.allPostsWithCommentCount();
    return res
      .status(200)
      .json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
