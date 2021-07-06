import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';


const Dashboard = ({ history }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [dispatch, userInfo, history])
    return (
        
            <Row style={{width: '100%'}}>
                <Col md={4}>
                    <p>Name: {userInfo.name}</p>
                    <p>Email: {userInfo.email}</p>
                </Col>
                <Col md={8}>{userInfo.reviews.map}</Col>
            </Row>
      
    )
}

export default Dashboard
