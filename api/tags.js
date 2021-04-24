const express = require('express');
const { getAlltags, getAllPosts, getPostsByTagName } = require('../db');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    next();
  });
  


  tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    const { tagName } = req.params;
    console.log(tagName, 'this is the tagname')

    try {
      const postsWithTags = await getPostsByTagName(tagName)
  

      if (req.user) {
        userTaggedPosts = postsWithTags.filter((post) => {
          return req.user && post.author.id === req.user.id
        })
      } else {
        userTaggedPosts = postsWithTags.filter((post) => {
          return post.active
        })
      }

      res.send({posts: postsWithTags})
      // send out an object to the client { posts: // the posts }
    } catch ({ name, message }) {
      // forward the name and message to the error handler
      next({ name: PostsWithTagsError, message })
    }
  });
module.exports = tagsRouter;