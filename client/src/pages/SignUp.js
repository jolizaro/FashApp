import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
             
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter your password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    Already have an account? <Link to="/signup">Login here</Link>
                </Form.Text>
            </Form>
        </div>
    )
}

export default SignUp

