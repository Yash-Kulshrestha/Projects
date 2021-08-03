import React from "react";
import Section from "./Section";
import Progress from "./Progress";
import Education from "./Education";
import About from "./About";

function App() {
  return (
    <div>
      <button class="ham-menu"><i class="bi mobile-nav-toggle d-xl-none bi-list"></i>
      </button>
      <header id="header">
        <div className="AvatarContainer">
          <img
            className="circle-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4-g7aI873shWllh91pix_Fo3OBDRbjdBlg&usqp=CAU"
            alt="avatar_img"
          />
          <p>Yash Kulshrestha</p>
          <div className="social">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>

        <nav className="navbar">
          <ul className="nav-menu">
            <li>
              <a href="#Home" className="up">
                <i className="bi bi-house"></i> Home
              </a>
            </li>
            <li className="animation">
              <a href="#About">
                <i className="bi bi-file-person"></i> About
              </a>
            </li>

            <li>
              <a href="#Contact">
                <i className="bi bi-telephone"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="section">
        <div id="Home">

          <div id="home-text">
            <h1>Yash Kulshrestha</h1>
            <p>I am</p>
            <div className="animated-text">
              <div className="line"> Designer</div>
              <div className="line"> Freelancer</div>
              <div className="line"> Developer</div>
              <div className="line"> Photographer</div>
            </div>
          </div>
        </div>
        <div id="About">
          <Section title="About" />
          <div className="container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4-g7aI873shWllh91pix_Fo3OBDRbjdBlg&usqp=CAU"
              alt="avatar_img"
            />
            <div>
              <h3>UI/UX Designer & Web Developer.</h3>
              <p>
                Hi! I am Yash Kulshrestha, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019. I enjoy creating beautifully designed, intuitive and functional websites.
                For over past 2 years, I have worked for some of the wonderful clients to create some award wonderful works.
              </p>
              <div className="details">
                <div className="column">
                  <ul>
                    <About title="Birthday" data="3 Jan 2000" />
                    <About title="Website:" data="IN progress" />
                    <About title="Phone:" data="+91 9455554968" />
                    <About title="City:" data="Lucknow,UP,India" />
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <About title="Age:" data="21" />
                    <About title="Degree:" data="Btech" />
                    <About title="Email:" data="utkarshkulshrestha2000@gmail.com" />
                    <About title="Freelance:" data="Available" />


                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <Section title="Skills" />
            <div className="container">
              <div className="content-items">
                <Progress title="HTML" width="100%" />
                <Progress title="CSS" width="100%" />
                <Progress title="Javascript" width="100%" />
              </div>
              <div className="content-items">
                <Progress title="React JS" width="80%" />
                <Progress title="Wordpress" width="80%" />
                <Progress title="Photoshop" width="75%" />
              </div>
            </div>
          </div>
        </div>
        <div id="Resume" className="resume">
          <Section title="Resume" />
          <div className="container">
            <div className="column">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Yash Kulshrestha</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </em>
                </p>
                <ul>
                  <li>Lucknow, Uttar Pradesh, India</li>
                  <li>+91 9455554968</li>
                  <li>utkarshkulshrestha2000@gmail.comc</li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h3 className="resume-title">Education</h3>
              <Education
                title="Bachelor of Technology"
                duration="2018 - 2022"
                inst="Galgotias University, Greater Noida ,UP"
                description="Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              />
              <Education
                title="className 12"
                duration="2017 - 2018"
                inst="Lucknow Public School Rajajipuram, Lucknow,UP"
                description="Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              />
              <Education
                title="className 10"
                duration="2015 - 2016"
                inst="Lucknow Public School Rajajipuram, Lucknow,UP"
                description="Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
              />
            </div>
          </div>
        </div>
        <div className="contact" id="Contact">
          <Section title="Contact" />
          <div className="container">
            <div className="column">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>E-2149 Rajajipuram,Lucknow,UP</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>utkarshkulshrestha2000@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9455554968</p>
                </div>

                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9669656836413!2d80.87404531489649!3d26.841002983158535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe5d7cb3ddfd%3A0xd1812c44db190d8b!2sE-2149%2C%20Block%20E%2C%20Rajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh%20226017!5e0!3m2!1sen!2sin!4v1622285663468!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="column">
              <form></form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
