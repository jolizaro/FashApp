import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Review from '../components/Review';
import { getUserDetails } from '../actions/userActions';
import { Link } from 'react-router-dom';

const Dashboard = ({ history }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const userDetails = useSelector(state => state.userDetails);
    const { profileDetails } = userDetails

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }else{
            dispatch(getUserDetails())
        }

    }, [dispatch, userInfo, history])
    return (
        
            <Row style={{width: '100%'}}>
            {userInfo && (
                <>
                <Col md={6}>
                    <h2>My Brands</h2>
                    <Link to="/addbrand">Add a New Brand!</Link>
                </Col>
                {profileDetails && <Col md={6}>
                    <h2>My Reviews</h2>
                    {profileDetails.reviews.map(review =>(
                    <Review review = {review}/>
                ))}</Col> }
                

                </>
            )}
                
            </Row>
      
    )
}

export default Dashboard
