import React from 'react';
import './App.css';
import PostList from './elements/PostList'
import Header from './partials/Header'
import Footer from './partials/Footer'
import postsData from './postData'



const App = (props) => {
  return (
      <div className = 'App'>
          <Header />
          <PostList posts={postsData}/>
          <Footer/>
      </div>
  )
}



export default App;
