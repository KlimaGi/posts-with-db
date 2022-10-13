import React from 'react'

const SinglePost = ({ post }) => {
  return (
    <div className='post'>
      <img src={post.image} alt="" />
      <div>

        <h4>{post.title}</h4>
        <p>{post.username}</p>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default SinglePost;
