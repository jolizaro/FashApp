import React, {useEffect, useState} from 'react'
import BrandCard from '../components/BrandCard'
import brandsArray from '../dummyData';

const LandingPage = () => {
   const [brands, setBrands] = useState(brandsArray)
    return (
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
