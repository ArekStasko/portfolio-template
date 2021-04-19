import contactPhoto from "../../assets/contact-photo.png"

const Contact = () => {

    return(
        <>
        <div className="main_contact-conteiner" id="contact">
          <div className="contact_form-wrapper">
            <div className="form_description-wrapper">
              <h2 className="form_main-title">&#47;&#47;Contact me</h2>
              <p className="form_paragraph">
                If you are willing to work with me, contact me. I can join your
                conference to serve you with my engeneering experience.
              </p>
            </div>

            <div className="contact_form">
              <form>
                <input type="email" placeholder="Your e-mail" />
                <input type="text" placeholder="Your name" />
                <textarea
                  placeholder="How can i help you? Please, put here your message/request"
                ></textarea>
              </form>
              <div className="form_button">Send</div>
            </div>
          </div>

          <div className="contact_description-wrapper">
            <div className="start_data-wrapper">
              <div className="description_data-info">
                <img
                  className="description_contact-photo"
                  src={contactPhoto}
                  alt="contact"
                />

                <div className="contact_text">
                  <p>john_doe@gmail.com</p>
                  <p>+ 32 123 345 567</p>
                </div>
              </div>     
                <div className="description_image-wrapper"></div>             
            </div>

            <div className="description_main-info">
              <p>autor: John Doe</p>
              <p>username: @johndoe</p>
              <p>description: University Graduate | Software Engineer</p>
              <p>homepage: johndoe.github.pl</p>
              <p>repository type: Open-source</p>
              <p>url: github.com/johndoe</p>
            </div>
          </div>
        </div>
      
      <div className="contact_circleSecond-element"></div>
      <script src="app.js"></script>
</>
    )
}

export default Contact