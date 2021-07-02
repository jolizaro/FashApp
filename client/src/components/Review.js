import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Review = ({ review }) => {
  return (
    <div className="mb-3">
      <Row>
      <Col sm={1}>
        <i className="fas fa-user mb-3"></i>
        <h6>{review.userName}</h6>
      </Col>
      <Col sm={11}>
        <h3>{review.title}</h3>
        <p style={{fontSize: '18px'}}>{review.description}</p>
        {review.createdAt && <p>{review.createdAt.slice(0,10)}</p>}
       
      </Col>
      </Row>
    </div>
  )
}

export default Review
