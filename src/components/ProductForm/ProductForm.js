import React from 'react';
import { Form, Label, Input, Button } from './styles';
//import { useProducts } from '../../context/ProductsContext.utils'
import { createProduct } from '../../service/products.service';
import { useHistory } from 'react-router-dom'


function Productform() {
    const initialState = [{
        title: "", 
        price: ""
    }];

    //si creo producto desde el contexto --> error: cannot read property concat of undefined. 
    //Es decir no funciona bien la funcion createProduct en ProductProvider
    //const { createProduct } = useProducts()

    const history = useHistory()

    const [state, setState] = React.useState(initialState)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log("value", value)
        setState({...state, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault(e)
        //En cambio si creo producto directamente desde products.service con axios sí funciona bien. 
        await createProduct(state)
        setState(initialState)
        history.push("/products")
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
                type="num" 
                name="price" 
                placeholder="Enter product's price"
                onChange={handleChange}
                value={state.price}
                required
            />
            <Button type="submit">Add</Button>
        </Form>
    )
}

export default Productform;