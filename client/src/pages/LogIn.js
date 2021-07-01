import React, {useState, useEffect} from 'react'
import{ useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions'

const LogIn = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo, loading, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push('/dashboard');
        }
    }, [dispatch])
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login(email, password))  

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {loading && <p>Logging you in...</p>}
                {error && <p>Invalid email or password</p>}
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
