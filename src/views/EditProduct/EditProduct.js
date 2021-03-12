import React from 'react';
import { Div, Form, Label, Input, Button, Select } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, useHistory } from 'react-router-dom';


function EditProduct() {

    const { productId } = useParams()
    console.log("productid en edit", productId)

    const { products, editProduct, deleteProduct } = useProducts()
    console.log("product to edit", products)

    const initialState = {title:"", price:""}
    const [state, setState] = React.useState(initialState)
    
    const history = useHistory()
    //falta formulario para info editProduct i ejecutar la función de editProduct(2 argumentos), entiendo dentro de handleSubmit
    const handleEdit = (e) => {
        const {name, value} = e.target
        console.log("name, value", value)
        setState({...state, [name]:value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("edit")
        editProduct(productId, state)
        console.log("edit state: ", state)
        history.push(`/products/${productId}`)
    }

    const handleDelete = (productId) => {
        console.log("delete")
        deleteProduct(productId)
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
                        />
                        <Label htmlFor="price">Price</Label>
                        <Input 
                            type="text" 
                            name="price" 
                            onChange={handleEdit}
                        />
                        <Label htmlFor="category">Category</Label>
                        <Select name="category" onChange={handleEdit} >
                            <option value="none">Selecciona una categoría</option>
                            <option value="joyeria">Joyería</option>
                            <option value="bebes">Bebés y Niños</option>
                            <option value="moda">Moda</option>
                            <option value="muebles">Muebles y Decoración</option>
                            <option value="complementos">Complementos</option>
                            <option value="cosmetica">Cosmética</option>
                        </Select>
                        <Button type="submit" >Edit Product</Button>
                    </Form>
                    <Button onClick={handleDelete} >Delete product</Button>
                </div>
            </Div>
        </div>
    )

}

export default EditProduct;