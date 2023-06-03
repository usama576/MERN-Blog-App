const express = require("express");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
const { default: mongoose } = require("mongoose");

//Router Object
const router = express.Router();

//Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await blogModel.find().populate("user");
    if (!blogs) {
      return res.status(200).send({
        success: false,
        mesasge: "No blog found",
        error,
      });
    }
    return res.status(200).send({
      success: true,
      blogsCount: blogs.length,
      message: "All blog lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      mesasge: "Error while getting blogs",
      error,
    });
  }
});

//Post || creat blog
router.post("/create-blog", async (req, res) => {
  try {
    const { title, cat, description, image, user } = req.body;
    //Validation
    if (!title || !cat || !description || !image || !user) {
      return res.status(400).send({
        success: false,
        message: "Please provide all feilds",
      });
    }
    const existingUser = await userModel.findById(user);
    //validation
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }
    const newBlog = new blogModel({ title, cat, description, image, user });

    await newBlog.save();
    existingUser.blogs.push(newBlog);
    await existingUser.save();

    await newBlog.save();
    res.status(201).send({
      success: true,
      message: "Blog Created",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while creating blog",
      error,
    });
  }
});

//Get/Read single blog
router.get("/get-blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id).populate("user");
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this id",
      });
    }
    res.status(200).send({
      success: true,
      message: "Blog Found",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in getting single blog",
      error,
    });
  }
});

//Update Blog
router.put("/update-blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, cat, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      mesasge: "Blog Updated",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating blog",
      error,
    });
  }
});

//Delete Blog
router.delete("/delete-blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findByIdAndDelete(id).populate("user");
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog does not exists",
      });
    }
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    res.status(200).send({
      success: true,
      message: "Blog Deleted",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in deleting blog",
      error,
    });
  }
});

//Get User Blogs
router.get("/user-blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id).populate("blogs");
    const result = user.blogs;
    if (!result) {
      return res.status(200).send({
        success: false,
        message: "No blogs found",
      });
    }
    res.status(200).send({
      success: true,
      mesasge: "blogs found",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "Error in getting user blog",
      error,
    });
  }
});

module.exports = router;
