import { Row, Container, Col, Image } from 'react-bootstrap';
import './about.css'

const About = () => {
    return (
        <Container>
            <h2>About Me</h2>
            <Row>              
                <Col>
                    <div id="imageDiv">
                        <Image src="https://avatars.githubusercontent.com/u/8111944?v=4" className="rounded" />
                    </div>          
                </Col>
                <Col>
                    <div id="textDiv">
                        <p>
                            Hi! My name is Will. I'm a Software Engineer and Microsoft Data Platform MVP based in Auckland, New Zealand.
                        </p>
                        <p>
                            I spend most of my time coding projects in C# and JavaScript and deploying them to Azure.
                        </p>
                        <p>
                            I also blog on Dev.to and Medium. I have spoken at a variety of conferences and meetups around the world and I organize the Auckland Connected Systems User Group.
                        </p>
                    </div>                 
                </Col>
            </Row>
        </Container>
    )
}

export default About;