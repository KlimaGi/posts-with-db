import React, { useRef } from 'react';
import { post } from '../plugins/http';

const CreateDetailedPostForm = () => {
  const postRefs = {
    titleRef: useRef(),
    descriptionRef: useRef(),
    photoRef: useRef(),
    usernameRef: useRef(),
    cityRef: useRef(),
  }

  async function confirmData() {
    const postData = {
      title: postRefs.titleRef.current.value,
      description: postRefs.descriptionRef.current.value,
      photo: postRefs.photoRef.current.value,
      username: postRefs.usernameRef.current.value,
      city: postRefs.cityRef.current.value,
    };
    const data = await post('createPost', postData);
    console.log('data-res', data);
  }

  return (

    <form className='d-flex fd-column'>
      <input ref={postRefs.titleRef} className='input' type="text" placeholder='title' />
      <input ref={postRefs.descriptionRef} className='input' type="text" placeholder='description' />
      <input ref={postRefs.photoRef} className='input' type="text" placeholder='photo' />
      <input ref={postRefs.usernameRef} className='input' type="text" placeholder='username' />
      <select ref={postRefs.cityRef} className='input' type="text" placeholder='city'>
        <option value='vilnius'>Vilnius</option>
        <option value='kaunas'>Kaunas</option>
        <option value='klaipeda'>Klaipeda</option>
        <option value='trakai'>Trakai</option>
        <option value='marijampole'>Marijampole</option>
        <option value='panevezys'>Panevezys</option>
      </select>

      <button onClick={confirmData} className='button'>add post</button>
    </form>


  )
}

export default CreateDetailedPostForm;
