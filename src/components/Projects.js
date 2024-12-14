import { Tab, Container, Row, Col, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import Social from "../assets/img/Social_Media.png"
import Commerce from "../assets/img/E-commerce.png"
import Brana from "../assets/img/brana.png"
import Tbrr from "../assets/img/tbrr.png"
import Begena from "../assets/img/Begena.png"
import "animate.css"

export const Projects = () => {
    const projects = [
        {
            title: "Social Media",
            description: "is a dynamic social media platform built with cutting-edge technologies, including React for the frontend, Node.js and Express for the backend, and MySQL for database management. It offers users a seamless and engaging experience to connect, share, and interact with friends and communities.",
            imgUrl: Social,
            Link: "https://github.com/solomon-winner/mySocial-media.git"
          },
          {
            title: "E-commerce",
            description: "Suk is a state-of-the-art e-commerce platform designed and developed using React for the frontend and Node.js along with Express for the backend, powered by MySQL for seamless database management. Suk offers a comprehensive shopping experience where users can discover, explore, and purchase a wide range of products.",
            imgUrl: Commerce,
            Link: "https://github.com/solomon-winner/E-commerce.git"
          },
          {
            title: "Ethiopian tree based restoration registry",
            description: "Developed a comprehensive web application for the Prime Minister's Office of Ethiopia to manage data on deforested areas. The platform includes information about local inhabitants and tree species, leveraging React for the frontend and ArcGIS for advanced map management including a dashboard.",
            imgUrl: Commerce,
            Link: "https://ethtbrr.net/"
          },
          {
            title: "Ethiopian tree based restoration registry",
            description: "Developed a comprehensive web application for the Prime Minister's Office of Ethiopia to manage data on deforested areas. The platform includes information about local inhabitants and tree species, leveraging React for the frontend and ArcGIS for advanced map management including a dashboard.",
            imgUrl: Tbrr,
            Link: "https://ethtbrr.net/"
          },
          {
            title: "Brana",
            description: "Brana is a mobile bookstore application that enables users to browse, order, and receive books through a delivery service. The app's frontend is built with Flutter, the backend is powered by Node.js, and it utilizes MongoDB for data management.",
            imgUrl: Brana,
            Link: "https://github.com/solomon-winner/brana"
          },
          {
            title: "Begena",
            description: "Begena Designed and implemented a song management system to organize and store information about songs, albums, and artists. Built with TypeScript for the frontend, Node.js for the backend, and MongoDB as the database for efficient data handling.",
            imgUrl: Begena,
            Link: "https://github.com/solomon-winner/SongInfo"
          },
    ];

    return (
        <section className="project" id = "projects">
            <Container>
                <Row>
                    <Col size = {12}>
                      <TrackVisibility>
                      {({ isVisible}) => 
                      
                      <div className = {isVisible ? "animate__animated animate__fadeIn" : ""}>

                        <h2>Projects</h2>

                        <p>
                          These projects Show my skills and my hunger to know and improve my skills
                        </p>

                        <Tab.Container id = "projects-tabs" defaultActiveKey= "first">

                          <Nav variant = "pills" className = "nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">

                            <Nav.Item>

                              <Nav.Link eventKey = "first">Tab 1</Nav.Link>

                            </Nav.Item>

                            <Nav.Item>

                              <Nav.Link eventKey = "second">Tab 2</Nav.Link>

                            </Nav.Item>

                            <Nav.Item>

                              <Nav.Link eventKey = "third">Tab 3</Nav.Link>

                            </Nav.Item>

                          </Nav>

                          <Tab.Content id = "slideInUp" className = {isVisible ? "animate__animated animate__slideInUp" : ""}>

                            <Tab.Pane eventKey = "first">

                              <Row>

                                {
                                  projects.map((project, index) => {
                                    return (
                                      <ProjectCard
                                      key = {index}
                                      {...project}
                                      />
                                    )
                                  })
                                }

                              </Row>

                            </Tab.Pane>

                            <Tab.Pane eventKey = "second">

                              <p>
                              </p>

                            </Tab.Pane>

                         
                         <Tab.Pane eventKey="third">
                          <p></p>                   
                    </Tab.Pane>

                          </Tab.Content>

                        </Tab.Container>

                      </div>

                      }
                      </TrackVisibility>
                    </Col>
                </Row>
            </Container>

<img className = "background-image-right" src = {colorSharp2} alt = "back gound"/>

        </section>
    )
}