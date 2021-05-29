import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import './mainHeader.css';

const MainHeader = () => {
    return (
    <Jumbotron fluid>
        <Container>
            <div id="headerDiv">
                <h1>Hi! I'm Will</h1>
                <p>Software Engineer and Microsoft Data Platform MVP</p>
                <div id="buttonsDiv">
                    <Button id="extraButton" href="https://github.com/willvelida">
                        <FontAwesomeIcon icon={faGithub} />
                    </Button>
                    <Button id="extraButton" href="https://www.youtube.com/channel/UCgV0RWjqmZ-Zl6vfoH2Wqjg">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Button>
                    <Button id="extraButton" href="https://twitter.com/willvelida">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button id="extraButton" href="https://www.linkedin.com/in/willvelida/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Button>
                </div>               
            </div>          
        </Container>      
    </Jumbotron>
    )    
}

export default MainHeader;