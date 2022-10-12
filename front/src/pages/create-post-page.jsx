import React from 'react'

const CreatePostPage = () => {
  return (
    <div className='d-flex fd-column'>
      <h5>Create post</h5>

      <input type="text" placeholder='title' />
      <input type="text" placeholder='image' />
      <input type="text" placeholder='username' />
      <input type="text" placeholder='description' />

      <button>Add post</button>
    </div>
  )
}

export default CreatePostPage;
