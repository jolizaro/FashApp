import { Modal, Button, Form } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateBrand } from '../actions/brandActions';
import { listBrandDetails } from '../actions/brandActions';

const UpdateBrand = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('');
    const brandDetails = useSelector(state => state.brandDetails);
    const { brand, success: detailsSuccess, error: detailsError } = brandDetails;
    const brandUpdate = useSelector(state => state.brandUpdate);
    const { success: updateSuccess, error: updateError } = brandUpdate;


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
      
        dispatch(listBrandDetails(props.match.params.id))
      
        if (detailsSuccess) {
            setName(brand.name);
            setDescription(brand.description);
            setImage(brand.image);
        }
        if (updateSuccess) {
            props.history.push('/dashboard');
        }
    }, [detailsSuccess, updateSuccess]);

    const handleSubmit = (e, id) => {
        e.preventDefault();

        if (name.length > 0 && description.length > 0) {
            dispatch(updateBrand(id, { name, description, image, userName: userInfo.name }))
        } else {
            alert('Please fill in the required information!')
        }



    }

    const showWidget = (e, widget) => {
        e.preventDefault();
        widget.open();
    }

    const widget = window.cloudinary.createUploadWidget({
        cloudName: "didabfv6n",
        uploadPreset: "biugdjnt"
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info.url);
            setImage(result.info.url)

        }
    }
    )
    return (
        <Form style={{ width: '100%', minHeight: '80vh' }}>
           

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Brand Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a brand name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription" className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' type="text" placeholder="What do you want to say about this brand?" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>

                    <Button className="mb-3" style={{display:'block'}} onClick={(e) => showWidget(e, widget)}>Upload an image</Button>
                    <Button style={{display:'block'}} onClick={(e) => handleSubmit(e, props.match.params.id)}>Submit</Button>
               
           
        </Form>



    )
}

export default UpdateBrand
