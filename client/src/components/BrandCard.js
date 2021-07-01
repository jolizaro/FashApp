import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={brand.image} />
  <Card.Body>
    <Card.Title>{brand.name}</Card.Title>
    <Card.Text>
      {brand.description.split(' ').slice(0, 20).join('')}<Link to={`/details/${brand._id}`}>...Read More</Link>
    </Card.Text>
    
  </Card.Body>
</Card>
      
    </div>
  )
}

export default BrandCard
