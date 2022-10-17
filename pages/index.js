import React from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Newcourses from '../components/Newcourses';
import Post from '../components/Post';
import Topcourses from '../components/Topcourses';
import Cards from '../components/Cards';
import Courses from '../components/Courses';
import Videobanner from '../components/Videobanner';



const index = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <Newcourses/>
      <Topcourses/>
       {/* <Post/>
      <Courses/> */}
      <Cards/>
      <Videobanner/>
  
      
    </div>
  )
}

export default index