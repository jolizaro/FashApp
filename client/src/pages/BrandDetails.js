import { Row, Col, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReviewForm from './ReviewForm';
import { Link } from 'react-router-dom';
import Review from '../components/Review';

const BrandDetails = ({ match, history }) => {
    const [brand, setBrand] = useState({});
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const brandList = useSelector(state => state.brandList)
    const { brands } = brandList;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        const found = brands.filter(brand => match.params.id == brand._id)[0];
        setBrand(found);
    }, [dispatch, userInfo, history, match, brands])

    return (
        <div className="details-container">
            {brand && (
                //fragment to make container
                <>
                 <img src={brand.image} alt={brand.name} className='brand-image'/>
                 <p>{brand.description}</p>
            
            <div className="mt-5" style={{width: '100%'}}>
                {brand.reviews && brand.reviews.length > 0 ? (
                    <>
                    <h2><Link to="/review">Write a review</Link></h2>
                    {brand.reviews.map(review => (
                        <Review review={review} />
                    ))}
                    </>
                ) : (
                    <h2>Be the first to <Link to="/review">write a review!</Link></h2>
                )
                }
            </div>
                </>
            )}
           
        </div>
    )
}

export default BrandDetails
