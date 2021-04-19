import React, { useRef } from 'react'
import Navbar from '../components/navbar/navbar'
import MainSection from '../components/mainSection/mainSection'
import AboutMe from '../components/aboutMe/aboutMe'
import Tools from '../components/tools/tools'
import MyWork from '../components/myWork/myWork'
import BlogPosts from '../components/blogPosts/blogPosts'
import Contact from '../components/contact/contact'

const MainPage = () => {

const refPost = useRef(null)
const refContact = useRef(null)
const refSection = useRef(null)
const refWork = useRef(null)
const refAbout = useRef(null)
const refTools = useRef(null)


    return(
        <div>
            <Navbar {...{refPost, refSection, refTools, refWork, refAbout, refContact}} />
            
            <div ref={refSection}>
            <MainSection />
            </div>

            <div ref={refAbout}>
            <AboutMe />
            </div>

            <div ref={refTools}>
            <Tools />
            </div>

            <div ref={refWork}>
            <MyWork />
            </div>

            <div ref={refPost}>
            <BlogPosts />
            </div>

            <div ref={refContact}>
            <Contact />
            </div>
        </div>
    )
}

export default MainPage