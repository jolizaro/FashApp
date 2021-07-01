import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const BrandDetails = ({ match, history }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    })
    return (
        <div>
            
        </div>
    )
}

export default BrandDetails
