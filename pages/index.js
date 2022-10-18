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
      <div className="container md:px-20 md:mb-8">
          <Eswiper/>
      </div>
      {/* <Newcourses/>
      <Featuredcourses/> */}
       {/* <Post/>
      <Courses/> */}
      {/* <Cards/> */}
      <div className="container md:mb-8" >
          <Videobanner/>
      </div>
  
      <div className="container md:px-20 md:mt-8">
          <FeaturedSlider/>
      </div>
  
      
    </div>
  )
}

export default index