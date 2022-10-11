import headerImage from "../assets/images/header-image.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";
import 'animate.css';

export const IntroPage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [letterSpeed, setLetterSpeed] = useState(100);
  const [index, setIndex] = useState(1);
  const professionList = [ "Software Engineer", "Student", "Hobbyist" ];
  const wordSpeed = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letterSpeed);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % professionList.length;
    let profession = professionList[i];
    let nextProfession = isDeleting ? profession.substring(0, text.length - 1) : profession.substring(0, text.length + 1);

    setText(nextProfession);

    if (isDeleting) {
      setLetterSpeed(prevLetterSpeed => prevLetterSpeed / 2);
    }

    if (!isDeleting && nextProfession === profession) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setLetterSpeed(wordSpeed);
    } else if (isDeleting && nextProfession === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setLetterSpeed(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="intro-page" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jakob. I am a... `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Student", "Hobbyist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}