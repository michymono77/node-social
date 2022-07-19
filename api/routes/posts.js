const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
// create a post

router.post("/", async(req, res)=>{
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch(err) {
    res.status(500).json(err)
  }
})
// update a post
router.put("/:id", async(req, res)=>{
  try{
    const post = await Post.findById(req.params.id);
    if(post.userId == req.body.userId){
      await post.updateOne({$set:req.body});
      res.status(200).json("post updated");
    } else{
      res.status(403).json("you can update only your post");
    }
  }
  catch{
    res.status(500).json(err);
  }
})
// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been unliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get timeline posts (following users' posts and the user's post)
router.get("/timeline/all", async (req, res) => {
  try {
    console.log(req.body.userId);
    const currentUser = await User.findById(req.body.userId);
    console.log(currentUser);
    const userPosts = await Post.find({ userId: currentUser._id });
    console.log(userPosts);
    //The Promise.all() method takes an iterable of promises as an input,
    // and returns a single Promise that resolves to an array of the results of the input promises.
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err.message);
  }
});



module.exports = router;