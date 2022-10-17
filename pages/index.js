import React from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Newcourses from '../components/Newcourses';
import Post from '../components/Post';
import Featuredcourses from '../components/Featuredcourses';
import Cards from '../components/Cards';
import Courses from '../components/Courses';
import Videobanner from '../components/Videobanner';
import Eswiper from '../components/Eswiper';
import FeaturedSlider from '../components/FeaturedSlider';



const index = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <Newcourses/>
      <Featuredcourses/>
       {/* <Post/>
      <Courses/> */}
      <Cards/>
      <Videobanner/>
  <Eswiper/>
  <FeaturedSlider/>
      
    </div>
  )
}

export default index