import React, {useState, useEffect} from 'react'
import{ useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions'

const SignUp = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, loading, error } = userLogin
    
    useEffect(() => {
        if (userInfo) {
            history.push('/dashboard');
        }
    }, [dispatch])
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(register(name, email, password))  

    }
    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value) } />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value) } />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) } />
                </Form.Group>
             
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />
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

