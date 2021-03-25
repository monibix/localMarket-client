import React from 'react';
import { Form, Label, Input, Button, Select, Textarea } from './styles';
import { useProducts } from '../../context/ProductsContext.utils'
import { useHistory } from 'react-router-dom'
import { uploadProductImage } from '../../service/products.service';



function Productform() {
    const initialState = {
        title: "", 
        price: "", 
        category: "", 
        ref: "", 
        description: "", 
        image: ""
    };

    const { createProduct, error } = useProducts()
    console.log("error", error)

    const history = useHistory()

    const [state, setState] = React.useState(initialState)
    const [imageReady, setImageReady] = React.useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log("value", value)
        setState({...state, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        await createProduct(state)
        setState(initialState)
            history.push("/products")
    }

    const handleUpload = async (e) => {
        setImageReady(false)
        const uploadData = new FormData()
        uploadData.append('mainImage', e.target.files[0]);
        const {data} = await uploadProductImage(uploadData)
        console.log("fileuploaded", data)
        setState({...state, mainImage: data})
        setImageReady(true)
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Label htmlFor="title">Title</Label>
            <Input 
                type="text" 
                name="title" 
                placeholder="Enter product's title"
                onChange={handleChange}
                value={state.title}
                required
            />
            <Label htmlFor="price">Price</Label>
            <Input 
                type="number" 
                name="price" 
                placeholder="Enter product's price"
                onChange={handleChange}
                value={state.price}
                required
            />
            <Label htmlFor="category">Category</Label>
            <Select name="category" onChange={handleChange} value={state.category} required >
                <option value="none">Selecciona una categoría</option>
                <option value="joyeria">Joyería</option>
                <option value="bebes">Bebés y Niños</option>
                <option value="moda">Moda</option>
                <option value="muebles">Muebles y Decoración</option>
                <option value="complementos">Complementos</option>
                <option value="cosmetica">Cosmética</option>
            </Select>
            <Label htmlFor="ref">Referencia</Label>
            <Input
                type="text"
                name="ref"
                placeholder="referencia"
                onChange={handleChange}
                value={state.ref}
            />
            <Label htmlFor="description">Description</Label>
            <Textarea 
                name="description" 
                cols="30" 
                rows="10"
                placeholder="write a description"
                onChange={handleChange}
                value={state.description}
                wrap="hard"
            ></Textarea>
            <Label htmlFor="image">Main Image</Label>
            <Input 
                type="file"     
                name="image" 
                value={state.image} 
                onChange={handleUpload}
                disable={!imageReady} 
            />
            <Button type="submit">Add</Button>
            <h5 style={{color: "red"}}>{error}</h5>
        </Form>
    )
}

export default Productform;