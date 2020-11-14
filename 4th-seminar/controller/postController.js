const {
  Post,
  User,
  Like
} = require('../models');
const ut = require('../modules/util');
const sc = require('../modules/statusCode');
const rm = require('../modules/responseMessage');

module.exports = {
  createPost: async (req, res) => {
    const {
      userId,
      title,
      contents
    } = req.body;
    try {
      const user = await User.findOne({
        where: {
          id: userId
        }
      });
      const post = await Post.create({
        title,
        contents
      });
      await user.addPost(post);
      return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
    } catch (err) {
      console.log(err);
      return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
    }
  },
  readAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({});
      console.log(JSON.stringify(posts, null, 2));
      return res.status(sc.OK).send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
    } catch (err) {
      console.log(err);
      return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_USER_ALL_FAIL));
    }
  },
  createLike: async (req, res) => {
    const PostId = Number.parseInt(req.params.postId);
    const UserId = req.body.userId;
    try {
      const like = await Like.create({
        UserId,
        PostId
      });
      return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_LIKE_SUCCESS, like));
    } catch (err) {
      console.log(err);
      return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_LIKE_FAIL));
    }
  }
}