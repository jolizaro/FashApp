//import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BrandCard from '../components/BrandCard'

const LandingPage = () => {
    const brandList = useSelector(state => state.brandList);
    const { brands, loading, error } = brandList;
    return (
        // add class & flexwrap in div
        <div className="featured">
            {brands && (
                brands.map(brand => (
                    <BrandCard brand={brand} />
                ))
            )}
        </div>
    )
}

export default LandingPage
