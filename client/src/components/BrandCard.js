import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const BrandCard = ({ brand, showDelete, deleteHandler }) => {
  return (
    <div>
      {brand && (
        <>
          <Card style={{ width: '20rem', margin: '10px', height: '500px' }}>
            <Card.Img variant="top" src={brand.image} />
            <Card.Body>
              <Card.Title>{brand.name}</Card.Title>
              <Card.Text>
                {brand.description.split(' ').slice(0, 20).join(' ')}...
              </Card.Text>
              <Link to={`/details/${brand._id}`}>Read More</Link>
              {showDelete &&  (
                <>
                <Link to={`/update/${brand._id}`}>
                <i className="far fa-edit" style={{float: 'right', color: 'green'}}></i>
                </Link>
              <i onClick={(e) => deleteHandler(e, brand._id)} style={{float: 'right', color: 'red'}} className="far fa-trash-alt"></i>
              </>
              )}
             
            </Card.Body>
          </Card>
        </>
      )}

    </div>
  )
}

export default BrandCard
