import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Review from '../components/Review';
import { getUserDetails } from '../actions/userActions';

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
                <Col md={4}>
                    <p>Name: {userInfo.name}</p>
                    <p>Email: {userInfo.email}</p>
                </Col>
                {profileDetails && <Col md={8}>{profileDetails.reviews.map(review =>(
                    <Review review = {review}/>
                ))}</Col> }
                

                </>
            )}
                
            </Row>
      
    )
}

export default Dashboard
