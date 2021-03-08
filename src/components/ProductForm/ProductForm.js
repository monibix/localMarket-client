import React from 'react-router-dom';
import { Form, Label, Input, Button } from './styles';
import { useProducts } from '../../context/ProductsContext.utils'

function Productform() {


    const { products , setProducts} = useProducts();
    console.log("products", products)
    console.log("setproducts", setProducts)

    const handleSubmit = (e) => {
        e.preventDefault(e)
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Label htmlFor="title">Title</Label>
            <Input 
                type="text" 
                name="title" 
                placeholder="title"
                //value={products.title}
            />
            <Label htmlFor="price">Price</Label>
            <Input 
                type="num" 
                name="price" 

            />
            <Button type="submit">Add</Button>
        </Form>
    )
}

export default Productform;