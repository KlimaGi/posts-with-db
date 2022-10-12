import React from 'react';
import SearchBar from '../components/search-bar';
import Posts from '../components/posts';

const PostsPage = () => {


  return (
    <div className='container fd-column'>
      <SearchBar />
      <Posts />
    </div>
  )
}

export default PostsPage;
