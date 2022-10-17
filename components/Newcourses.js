import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';


import {faUmbrella, faShieldHeart, faPersonDrowning, faPeopleGroup, faRocket, faPeopleRobbery} from "@fortawesome/free-solid-svg-icons";


const Newcourses = () => {
  return (
    <div>
           
          {/* <div className="container my-8 px-6 md:px-16 mx-auto"> 
              <section className="text-gray-800 text-center ">                  
                <span> <h2 className="text-left text-4xl md:pl-8 mb-8 font-cursive text-orange-500"> Шинэ хичээлүүд </h2> </span>                
                    <div className="flex justify-center items-ceneter "> 

                    <button className="text-[#f97316] hover:border border-[#f97316] rounded-full px-2 hover:shadow-lg shadow-gray-200 hidden md:block w-11 h-10" id="prev-btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    


                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full max-w-6xl ">
                <Link href="/design">
                    <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(249,115,22,0.25)] rounded-t-xl shadow-gray-200">      
                      <img className="rounded-lg shadow-lg w-full h-48 mx-auto" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" alt="avatar" />
                      <h5 className="text-xl font-light m-4">DESIGN</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#f97316] font-bold text-lg"> 400+ </strong> Видео хичээл</p>
                    </a>        
                </Link>

                <Link href="/lifestyle">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(111,148,252,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#6f94fc] md:py-12">      
                      <FontAwesomeIcon icon={faShieldHeart} style={{ fontSize: 60, color: "#6f94fc" }} />            
                      <h5 className="text-xl font-light m-4">LIFE STYLE</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#6f94fc] font-bold text-lg"> 50+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                <Link href="/spinnig">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(197,161,255,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#c5a1ff] md:py-12">      
                      <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: 60, color: "#c5a1ff" }} />           
                      <h5 className="text-xl font-light m-4">SPINNIG</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#c5a1ff] font-bold text-lg"> 80+ </strong> Видео хичээл</p>
                  </a>     
                </Link>

                <Link href="/yoga">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(255,184,66,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#ffb842] md:py-12">      
                      <FontAwesomeIcon icon={faPersonDrowning} style={{ fontSize: 60, color: "#ffb842" }} />            
                      <h5 className="text-xl font-light m-4">YOGA</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#ffb842] font-bold text-lg"> 600+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                
                        </div>            

                     
                    <button className="flex flex-center text-[#f97316] hover:border border-[#f97316] rounded-full px-2 hover:shadow-lg shadow-gray-200 hidden md:block w-11 h-10" id="next-btn" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                    
                 

            



                    </div>
                </section>
            </div> */}
          
    {/* <section className="text-gray-800 text-center">
              <div className="flex flex-grow justify-between">
                <span> <h2 className="text-4xl md:pl-8 mb-8 font-cursive text-orange-500"> Шинэ хичээлүүд </h2> </span>   
                <span> <h2 className="text-md text-light mt-6 font-cursive text-blue-500 underline">
                      <Link href="/categories"> Бүх шинэ хичээл </Link> </h2>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-8xl">
                <Link href="/design">
                    <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(249,115,22,0.25)] rounded-t-xl shadow-gray-200">      
                      <img className="rounded-lg shadow-lg w-full h-48 mx-auto" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" alt="avatar" />
                      <h5 className="text-xl font-light m-4">DESIGN</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#f97316] font-bold text-lg"> 400+ </strong> Видео хичээл</p>
                    </a>        
                </Link>

                <Link href="/lifestyle">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(111,148,252,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#6f94fc] md:py-12">      
                      <FontAwesomeIcon icon={faShieldHeart} style={{ fontSize: 60, color: "#6f94fc" }} />            
                      <h5 className="text-xl font-light m-4">LIFE STYLE</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#6f94fc] font-bold text-lg"> 50+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                <Link href="/spinnig">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(197,161,255,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#c5a1ff] md:py-12">      
                      <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: 60, color: "#c5a1ff" }} />           
                      <h5 className="text-xl font-light m-4">SPINNIG</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#c5a1ff] font-bold text-lg"> 80+ </strong> Видео хичээл</p>
                  </a>     
                </Link>

                <Link href="/yoga">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(255,184,66,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#ffb842] md:py-12">      
                      <FontAwesomeIcon icon={faPersonDrowning} style={{ fontSize: 60, color: "#ffb842" }} />            
                      <h5 className="text-xl font-light m-4">YOGA</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#ffb842] font-bold text-lg"> 600+ </strong> Видео хичээл</p>
                  </a>      
                </Link>

                <Link href="/marketing">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(117,215,114,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#75d772] md:py-12">      
                      <FontAwesomeIcon icon={faRocket} style={{ fontSize: 60, color: "#75d772" }} />            
                      <h5 className="text-xl font-light m-4">MARKETING</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#75d772] font-bold text-lg"> 40+ </strong> Видео хичээл</p>
                  </a>        
                </Link>

                <Link href="/dance">
                  <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(250,113,131,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#fa7183] md:py-12">      
                      <FontAwesomeIcon icon={faPeopleRobbery} style={{ fontSize: 60, color: "#fa7183" }} />            
                      <h5 className="text-xl font-light m-4">DANCE</h5>
                      <p className="md:mb-6 text-md font-light"> <strong className="text-[#fa7183] font-bold text-lg"> 100+ </strong> Видео хичээл</p>
                  </a>        
                </Link> 

              </div>
            </section> */}
    </div>
  )
}

export default Newcourses