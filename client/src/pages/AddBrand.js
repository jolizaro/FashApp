import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { createBrand } from '../actions/brandActions';

const AddBrand = () => {
  const dispatch = useDispatch();
  const [brandName, setBrandName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.length === 0 || description.length === 0 || image.length === 0){
        alert('Please fill in all fields')
        return 
    }
    dispatch(createBrand({
        name:brandName,
        description,
        image,
        userId: userInfo._id
    }))
  }

  const showWidget = (e, widget) => {
    e.preventDefault();
    widget.open();
  }

  const widget = window.cloudinary.createUploadWidget({
    cloudName:"didabfv6n", 
    uploadPreset: "biugdjnt"
  }, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info.url); 
        setImage(result.info.url)
      
      }
    }
  )
    return (
      <div className="form-container">
      <Form onSubmit={handleSubmit}>
     
          <Form.Group controlId="formBasicBrandName">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" placeholder="Enter brand name" value={brandName} onChange={(e) => setBrandName(e.target.value) } />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
              <Form.Label>Brand details</Form.Label>
              <Form.Control type="text" placeholder="enter a description of the brand" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Button onClick={(e) => showWidget(e, widget)}>Choose Image</Button>
          <br/>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  </div>
    )
}

export default AddBrand