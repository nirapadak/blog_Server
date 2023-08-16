const Blog = require('../models/blog');

exports.blog = async (req, res) => {
  try {
    const { title, description, image, blogCategory, author } = req.body;
    if (!title) {
      return res.json({ error: "title must be provided"})
    }
    if (!description) {
      return res.json({ error: "description must be required" });
    }
    if (!image) {
      return res.json({ error: "image must be provided" });
    }
    if (!blogCategory) {
      return res.json({ error: "blogCategory must be provided" });
    }
    if (!author) { 
      return res.json({ error: "author must be provided" });
    }

    const blog = await new Blog({
      title,
      description,
      image,
      blogCategory,
      author
    }).save();


    res.json({
      blog: {
        name: blog.name,
        description: blog.description,
        image: blog.image,
        blogCategory: blog.blogCategory,
        author: blog.author,
      }
    })

  } catch (error) {
    return res.json({ error: error.message });
  }
}



exports.update = async (req, res) => {
    try {
        const { title, description, image, blogCategory, author} = req.body;
        console.log(req.params)
        const blog = await Blog.findByIdAndUpdate(req.params.blogId,
            {
              title,
              description,
              image,
              blogCategory,
              author,

            },
            { new: true }
        );
        res.json(blog);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err.message);
    }
};



exports.remove = async (req, res) => {
  try {
    const removed = await Blog.findByIdAndDelete(req.params.blogId);
    res.json({
      "msg": "success",
    })
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}


exports.list = async (req, res) => {
  try {
    const all = await Blog.find({});
    res.json(all);
  } catch (error) {
    return res.json({ error: error.message });
  }
}

exports.blogFindOne = async (req, res) => {
  try {
    const blogOne = await Blog.findOne(req.params.BlogId);
    res.json({
      blogOne: blogOne,
    });
  } catch (error) {
    return res.json({ error: error.message });
  }
}