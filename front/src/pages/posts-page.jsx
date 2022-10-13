import React, { useState, useEffect } from 'react';
import SearchBar from '../components/search-bar';
import SinglePost from '../components/single-post';
import { post } from '../plugins/http.js';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      const res = await post('filter', { username: "" });
      setPosts(res.posts);
    };
    allPosts();
  }, [])

  return (
    <div className='container fd-column'>
      <SearchBar setPosts={setPosts} />
      <div>
        {posts.map(post => <SinglePost key={post._id} post={post} />)}

      </div>

    </div>
  )
}

export default PostsPage;
