import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ContactMe = () => {
    return (
        <Container>
            <Form>
                <h2>Contact</h2>
                <Form.Group>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="What's your name?"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email here!"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter a email subject"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>            
    )
}

export default ContactMe;