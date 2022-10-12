import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { get, post } from "./plugins/http";
import PostsPage from './pages/posts-page.jsx';
import CreatePostPage from './pages/create-post-page';


function App() {

  return (
    <>
      <h3>Posts page</h3>
      <div className='main'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PostsPage />} />
            <Route path='/createPost' element={<CreatePostPage />} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
