import { Modal, Button, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../actions/reviewActions';

const ReviewModal = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(5);
    const [image, setImage] = useState('');


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const handleSubmit = (e, id) => {
        e.preventDefault();
        //dispatch addReview action
        if(title.length > 0 && description.length > 0 ){
            dispatch(createReview({title, description, rating, image, userName: userInfo.name, brandName: props.brand.name}, id))
            props.onHide();
        }else{
            alert('Please fill in the required information!')
        }
         
        

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Write a review for {props.brand.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.brand && (
                <Form>
                    

                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a title for your review" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder="What do you want to say about this brand?" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Add an image address if desired" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicSelect">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

              
                {/* {loading && <p>Submitting your review</p>} */}
                {/* {error && <p>Your review was not submitted</p>} */}

            </Form>
              )}
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => handleSubmit(e, props.brand._id)}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReviewModal
