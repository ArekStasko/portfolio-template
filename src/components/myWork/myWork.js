import BucketIcon from '../../assets/bit_bucket_icon.png'
import ExternalIcon from '../../assets/external_link_icon.png'
import First from "../../assets/first.png"
import Second from "../../assets/second.png"
import Third from "../../assets/third.png"
import Fourth from "../../assets/fourth.png"
import Fifth from "../../assets/fifth.png"
import Sixth from "../../assets/sixth.png"

const MyWork = () => {

    return(
        <>
        <div className="mywork-conteiner">
        <div className="mywork_text-wrapper">
          <h2 className="text_main-title" id="portfolio">&#47;&#47;My works</h2>
          <h2 className="text_sub-title">Portfolio</h2>
          <p className="text_paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="mywork_baner-wrapper">
          <div className="mywork_baner-element">
          <img className="baner_img" src={First} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>

          <div className="mywork_baner-element">
          <img className="baner_img" src={Second} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>

          <div className="mywork_baner-element">
            <img className="baner_img" src={Third} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>

          <div className="mywork_baner-element">
            <img className="baner_img" src={Fourth} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>

          <div className="mywork_baner-element">
            <img className="baner_img" src={Fifth} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>

          <div className="mywork_lastbaner-element">
            <img className="baner_img" src={Sixth} alt="circle" />
            <div className="icon-wrapper">
              <img
                className="banner_icon"
                src={BucketIcon}
                alt="circle"
              />
              <img
                className="banner_icon"
                src={ExternalIcon}
                alt="circle"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="myworks_circle-element"></div>
</>

    )
}

export default MyWork