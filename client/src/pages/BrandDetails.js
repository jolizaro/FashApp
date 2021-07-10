import { Row, Col, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReviewModal from '../components/ReviewModal';
import { Link } from 'react-router-dom';
import Review from '../components/Review';
import { listBrandDetails } from '../actions/brandActions';

const BrandDetails = ({ match, history }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const brandDetails = useSelector(state => state.brandDetails)
    const { brand } = brandDetails;
    const reviewCreate = useSelector(state=> state.reviewCreate)
    const { loading, success, error } = reviewCreate;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        // const found = brands.filter(brand => match.params.id == brand._id)[0];
        dispatch(listBrandDetails(match.params.id))
        
    }, [dispatch, userInfo, history, match, success])

    return (
        <div className="details-container">
            {brand && (
                //fragment to make container
                <>
                    <img src={brand.image} alt={brand.name} className='brand-image' />
                    <p>{brand.description}</p>

                    <div className="mt-5" style={{ width: '100%' }}>
                        {brand.reviews && brand.reviews.length > 0 ? (
                            <>
                                <button className= 'review-button' onClick={() => setModalShow(true)}>Write a review</button>
                                {brand.reviews.map(review => (
                                    <Review review={review} />
                                ))}
                            </>
                        ) : (
                            <h2>
                                Be the first to <span className="write-review" onClick={() => setModalShow(true)}>write a review</span>
                            </h2>
                        )
                        }
                    </div>
                </>
            )}
            <ReviewModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                brand={brand}
            />
        </div>
    )
}

export default BrandDetails
