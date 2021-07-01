import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value) } />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted">
                    Dont have an account? <Link to="/signup">Sign up here</Link>
                </Form.Text>
            </Form>
        </div>
    )
}

export default LogIn
