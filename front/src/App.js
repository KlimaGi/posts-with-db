import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from './pages/posts-page.jsx';
import IndexPage from './pages/index-page';
import LoginPage from './pages/login-page';

function App() {

  return (
    <>
      <h3>Posts page</h3>
      <div className='main'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/login' element={<LoginPage />} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
