const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  blogCategory: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    defaultValue: 'unknown',
  }
}, {
  timestamps: true,
  versionKey: false,
})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;