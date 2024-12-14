import {Container, Row, Col} from "react-bootstrap";
import Photo from "../assets/img/Photo.png";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";
export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const [index,setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "MERN stack Expertise" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta);
        return () => {clearInterval(ticker) }
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1):fullText.substring(0,text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex +1);
        }
    }

    return(
        <section className = "banner" id ="home">
            <Container>
                <Row className = "aligh-items-center">
                    <Col xs = {12} md = {6} xl = {7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className = {isVisible ? "animate__animated animate__fadeIn":""}>
                            <span className = "tagline">Welcome to Solomon's Full Stack Wonderland!</span>
                           <h1>
                            {`Hi! I'm Solomon Yalew `} 
                           <span 
                           className = "txt-rotate" 
                           dataPeriod = '1000'
                            data-rotate = '["Web Developer","Web Designer","UI/UX Designer"]'>
                                <span className = "wrap">{text}</span>
                                </span>
                                </h1>
                                <p>
                                As a passionate and innovative Full Stack Website Developer, I bring dreams to life through the seamless integration of cutting-edge technologies. My expertise spans the realms of React for dynamic user interfaces, Node.js for robust backend development, Sass and Bootstrap for stunning and responsive designs, and MySQL for powerful data management.
                                </p>
                                <button onClick = {() => console.log('connect')}>Let's Connect<ArrowRightCircle size = {25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs = {12} md = {6} xl = {5}>
                    <TrackVisibility>
                    {({isVisible}) =>
                    <div className= {isVisible ? "animate__animated animate__zoomIn":""}>
                        <img src = {Photo} alt = "me"/>
                    </div>
                    }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}