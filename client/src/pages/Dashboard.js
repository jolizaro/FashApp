import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Review from '../components/Review';
import { getUserDetails } from '../actions/userActions';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import { deleteBrand } from '../actions/brandActions';


const Dashboard = ({ history }) => {
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const userDetails = useSelector(state => state.userDetails);
    const { profileDetails } = userDetails
    const brandDelete = useSelector(state => state.brandDelete);
    const { success } = brandDelete;
    const brandUpdate = useSelector(state => state.brandUpdate);
    const brandCreate = useSelector(state => state.brandCreate)

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }else{
            dispatch(getUserDetails())
            
        }
        if (brandUpdate.success) {
            dispatch({ type: 'BRAND_UPDATE_RESET'});
        }
        if (brandCreate.success) {
            dispatch(getUserDetails())
            dispatch({type: 'BRAND_CREATE_RESET'})
        }

    }, [dispatch, userInfo, history, success, brandCreate.success])
    const deleteHandler = (e, id)=>{
        e.preventDefault()
        dispatch(deleteBrand(id))
    }
    return (
        
            <Row style={{width: '100%'}}>
            {userInfo && profileDetails && (
                
                <>
                <Col md={6}>
                    <h2>My Brands</h2>
                    <Link to="/addbrand">Add a New Brand!</Link>
                    {profileDetails.brands.map(brand =>(
                    <BrandCard brand={brand} showDelete={true} deleteHandler={deleteHandler}/>
                ))}
                </Col>
               <Col md={6}>
                    <h2>My Reviews</h2>
                    {profileDetails.reviews.map(review =>(
                    <Review review = {review}/>
                ))}</Col> 
                

                </>
            )}
                
            </Row>
      
    )
}

export default Dashboard
