import React, {useState, useEffect} from 'react'
import{ useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions'

const ReviewForm = ({ history, brand }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState('');

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    //grab addReview info from redux state with useSelector

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [dispatch, userInfo, history])

    const handleSubmit =(e, id)=>{
        e.preventDefault();
        //dispatch addReview action 

    }
    return (
        <div>
            <Form onSubmit={(e) => handleSubmit(e, brand._id)}>
                <h1>Write a Review for {brand.name}</h1>
              
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a title for your review" value={title} onChange={(e) => setTitle(e.target.value) } />
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder="What do you want to say about this brand?" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Add an image address if desired" value={image} onChange={(e) => setImage(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                  {/* {loading && <p>Submitting your review</p>} */}
                {/* {error && <p>Your review was not submitted</p>} */}
             
            </Form>
        </div>
    )
}

export default ReviewForm

