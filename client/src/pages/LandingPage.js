import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BrandCard from '../components/BrandCard'
import { listBrands } from '../actions/brandActions';

const LandingPage = () => {
    const dispatch = useDispatch();
    // const [brands, setBrands] = useState(brandsArray)
    const brandList = useSelector(state => state.brandList);
    const { brands, loading, error } = brandList;
    useEffect(() => {
        dispatch(listBrands());
    }, [])
    return (
        // add class & flexwrap in div
        <div>
            {brands && (
                brands.map(brand => (
                    <BrandCard brand={brand} />
                ))
            )}
        </div>
    )
}

export default LandingPage
