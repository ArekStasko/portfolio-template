import React from 'react'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Navbar = ({refPost, refSection, refTools, refWork, refAbout, refContact}) => {

  const navList = [
    {'name': 'Start', 'ref': refSection},
    {'name': 'About', 'ref': refAbout},
    {'name': 'Tools', 'ref': refTools},
    {'name': 'Work', 'ref': refWork},
    {'name': 'Posts', 'ref': refPost},
    {'name': 'Contact', 'ref': refContact},
    
]

    return(
        <div class="navbar_main-wrapper">
      <h1 class="navbar_main-text">A.S.</h1>
      <div class="navbar_burger-element">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="navbar_element-wrapper">

        {/*Navbar links*/}

        <ul class="navbar_link-list">
        {
                navList.map((el)=>{
                    return <li key={el.name} onClick={()=>scrollToRef(el.ref)}>{el.name}</li>
                })
        }
        </ul>
        <div class="navbar_line-element"></div>

        {/*Navbar icons*/}

        <ul class="navbar_link-list">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-linkedin-in"></i>
        </ul>

        {/*End of navbar element wrapper*/}

      </div>

      {/*End of navbar main wrapper*/}

    </div>




    )
}

export default Navbar