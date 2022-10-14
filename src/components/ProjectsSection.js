import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectImage1 from "../assets/images/project-image1.jpg";
import projectImage2 from "../assets/images/project-image2.jpg";
import projectImage3 from "../assets/images/project-image3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ProjectsSection = () => {

  const projects = [
    {
      title: "Rubik's Cube Solver",
      description: "Project Description",
      imgUrl: projectImage1,
    },
    {
    	title: "Sorting Algorithm Visualizer",
    	description: "Project Description",
    	imgUrl: projectImage2,
    },
    {
    	title: "Java Problems",
    	description: "Project Description",
    	imgUrl: projectImage3,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <ProjectCard
                      	key={0}
                      	{...projects[0]}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ProjectCard
                      	key={0}
                      	{...projects[1]}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ProjectCard
                      	key={0}
                      	{...projects[2]}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}