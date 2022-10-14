import React from 'react';
import { get } from '../plugins/http';

const SinglePost = ({ post, postRemoved }) => {

  async function remove() {
    const res = await get(`delete/${post._id}`);
    console.log('res', res);
    postRemoved(post._id);
  }

  return (
    <div className='post'>
      <img src={post.image} alt="" />
      <div>

        <h4>{post.title}</h4>
        <p>{post.username}</p>
        <p>{post.description}</p>
      </div>
      <button onClick={remove}>delete</button>
    </div>
  )
}

export default SinglePost;
