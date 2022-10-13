import React from 'react';
import SearchBar from '../components/search-bar';
import SinglePost from '../components/single-post';

const PostsPage = () => {


  return (
    <div className='container fd-column'>
      <SearchBar />
      <div>
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>

    </div>
  )
}

export default PostsPage;
