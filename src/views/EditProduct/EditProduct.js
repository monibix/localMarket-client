import React from 'react';
import { Div, Form, Label, Input, Button, Select, Textarea } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Redirect } from 'react-router-dom';


function EditProduct() {
    //recupero el id del producto
    const { productId } = useParams() 
    console.log("productid en edit", productId)

    //recupero funciones para editar, borrar, traer información de producto
    const { products, editProduct, deleteProduct, getMyProduct } = useProducts()
    console.log("product to edit", products)

    //useEffect para recuperar los datos del producto y popular el formulario de edit, q en teoria ya están en products linia 15
    React.useEffect(()=>{
        getMyProduct(productId)
    }, [])

    const initialState = {title:"", price:"", category:"", ref:"", description:"", mainImage:""}
    const [state, setState] = React.useState(initialState)
    
    const handleEdit = (e) => {
        const {name, value} = e.target
        console.log("name, value", value)
        setState({...state, [name]:value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await editProduct(productId, state)
        setState({...state, redirect: true})
    }

    const handleUpload = () => {

    }

    const handleDelete = async () => {
        console.log("delete")
        await deleteProduct(productId)
    }

    if (state.redirect) {
        return <Redirect to={`/products/${productId}`}/>
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Edit Product </h1>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="title">Title</Label>
                        <Input 
                            type="text"
                            name="title" 
                            onChange={handleEdit}
                            value={products.title}    
                        />
                        <Label htmlFor="price">Price</Label>
                        <Input 
                            type="text" 
                            name="price" 
                            onChange={handleEdit}
                            value={products.price}    

                        />
                        <Label htmlFor="category">Category</Label>
                        <Select name="category" onChange={handleEdit} value={products.category} >
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
                            onChange={handleEdit}
                            value={products.ref}    

                        />
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                            name="description" 
                            cols="30" 
                            rows="10"
                            placeholder="write a description"
                            onChange={handleEdit}
                            value={products.description}
                        ></Textarea>
                        <Label htmlFor="mainImage">Main Image</Label>
                        <Input 
                            type="file" 
                            name="mainImage"
                            onChange={handleUpload} 
                            value={products.picture} 
                        />
                        <Button type="submit" >Edit Product</Button>
                    </Form>
                    <Button onClick={handleDelete} >Delete product</Button>
                </div>
            </Div>
        </div>
    )

}

export default EditProduct;