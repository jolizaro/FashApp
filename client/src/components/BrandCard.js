import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  return (
    <div>
      {brand && (
        <>
          <Card style={{ width: '20rem', margin: '10px' }}>
            <Card.Img variant="top" src={brand.image} />
            <Card.Body>
              <Card.Title>{brand.name}</Card.Title>
              <Card.Text>
                {brand.description.split(' ').slice(0, 20).join('')}...
              </Card.Text>
              <Link to={`/details/${brand._id}`}>Read More</Link>
            </Card.Body>
          </Card>
        </>
      )}

    </div>
  )
}

export default BrandCard
