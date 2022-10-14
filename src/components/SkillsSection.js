import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/images/left-arrow.svg";
import arrow2 from "../assets/images/right-arrow.svg";

export const SkillsSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} centerMode={true} className="owl-carousel owl-theme skill-slider">
                            <div className="skill-item">
                                <h5 className="skill-header">Primary Programming Languages</h5>
                                <ul className="skill-list">
                                    <li><span>Java</span></li>
                                    <li><span>Python</span></li>
                                    <li><span>C++</span></li>
                                </ul>
                            </div>
                            <div className="skill-item">
                                <h5 className="skill-header">Secondary Programming Languages</h5>
                                <ul className="skill-list">
                                    <li><span>JavaScript</span></li>
                                    <li><span>SQL</span></li>
                                    <li><span>HTML (markup language)</span></li>
                                </ul>
                            </div>
                            <div className="skill-item">
                                <h5 className="skill-header">Tools</h5>
                                <ul className="skill-list">
                                    <li><span>Git</span></li>
                                    <li><span>Docker</span></li>
                                    <li><span>Postman</span></li>
                                </ul>
                            </div>
                            <div className="skill-item">
                                <h5 className="skill-header">Concepts</h5>
                                <ul className="skill-list">
                                    <li><span>RESTful APIs</span></li>
                                    <li><span>Object-Oriented Programming</span></li>
                                    <li><span>Software Development Methodologies (Agile, Waterfall)</span></li>
                                </ul>
                            </div>
                            <div className="skill-item">
                                <h5 className="skill-header">Soft Skills</h5>
                                <ul className="skill-list">
                                    <li><span>Conflict Resolution</span></li>
                                    <li><span>Written and verbal communication</span></li>
                                    <li><span>Team-building</span></li>
                                </ul>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}