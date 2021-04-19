import SecondPhoto from "../../assets/second_blog-photo.png"
import FirstPhoto from "../../assets/first_blog-photo.png"

const BlogPosts = () => {


    return(
        <div className="main_posts-conteiner" id="blog">
        <div className="posts_text-wrapper">
          <h2 className="text_title">&#47;&#47;Blog posts</h2>
          <h2 className="text_subtitle">Hints and tips</h2>
        </div>

        <div className="blog_posts-wrapper">
          <div className="post_main-wrapper">
            <img
              className="post_image"
              src={SecondPhoto}
              alt="circle"
            />
            <div className="post_text">
              <div className="post_header-wrapper">
                <h2 className="post_main-title">&#47;&#47;Title 01</h2>
                <p className="header_date">author, 01.09.2020</p>
              </div>
              <h2 className="post_subtitle">Secondary Title</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>

              <div className="button-element">
                <p>Read more</p>
                <div></div>
              </div>
            </div>

          </div>

          <div className="blog_posts-wrapper">
            <div className="post_main-wrapper">
              <img
                className="post_image"
                src={FirstPhoto}
                alt="circle"
              />
              <div className="post_text">
                <div className="post_header-wrapper">
                  <h2 className="post_main-title">&#47;&#47;Title 01</h2>
                  <p className="header_date">author, 01.09.2020</p>
                </div>
                <h2 className="post_subtitle">Secondary Title</h2>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>

                <div className="button-element">
                  <p>Read more</p>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_circle-element"></div>
      </div>
    )
}

export default BlogPosts