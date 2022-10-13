import React, { useRef } from 'react'
import { post } from '../plugins/http';

const SearchBar = () => {
  const inpRef = useRef();

  const filter = async () => {
    const username = inpRef.current.value;
    const res = await post(`filter`, { username });
    console.log('res-filter', res);

    inpRef.current.value = '';
  }

  return (
    <div>
      <input ref={inpRef} type="text" placeholder='username' />
      <button onClick={filter} >search</button>
    </div>
  )
}

export default SearchBar;
