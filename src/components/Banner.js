import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProfileCard from "./ProfileCard/ProfileCard.jsx";
import avatarUrl from '../assets/img/jer.png'; 
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer", "Systems Analyst", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Jer's Portfolio</span>
                <h1>{`Hi! I'm Jeremia Paulus`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Systems Analyst", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>A forward-thinking and motivated undergraduate student with excellent problem-solving, critical thinking, and clear communication. Recognized for the ability to effectively interact with varied teams and adapt to changing situations in order to achieve common objectives. I'm passionate about leveraging technology to develop clever, practical solutions that improve how things function. Highly proactive and detail-oriented, dedicated to producing high-quality solutions and increasing operational efficiency.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <ProfileCard
                    name="Jeremia Paulus"
                    title="Software Engineer"
                    handle="jeremia.jmp"
                    status="Online"
                    avatarUrl="../assets/img/jer.png"
                    showUserInfo={true}
                    enableTilt={true}
                  />

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
