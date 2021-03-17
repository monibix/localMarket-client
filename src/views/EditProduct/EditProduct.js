import React from 'react';
import { Div, Form, Label, Input, Button, Select, Textarea } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getMyProduct as getMyProductService } from "../../service/products.service";
import { uploadProductImage } from "../../service/products.service";

function EditProduct() {
    //recupero el id del producto
    const { productId } = useParams() 
    console.log("productid en edit", productId)

    //recupero funciones para editar, borrar, traer información de producto
    const { editProduct, deleteProduct } = useProducts()

    const initialState = {title:"", price:"", category:"", ref:"", description:"", image:""}
    const [product, setProduct] = React.useState(initialState)
    const [imageReady, setImageReady] = React.useState(false)
    
    const history = useHistory()

    React.useEffect(()=>{
        getMyProductService(productId).then(( {data: currentProduct} )=>{
            setProduct(currentProduct)
        })
    }, [])

    const handleEdit = (e) => {
        const {name, value} = e.target
        console.log("name, value", value)
        setProduct({...product, [name]:value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await editProduct(productId, product)
//        setProduct({...product, redirect: true})
        history.push(`/products/${productId}`)

    }

    const handleUpload = async (e) => {
        setImageReady(false)
        const uploadData = new FormData()
        uploadData.append('mainImage', e.target.files[0]);
        const {data} = await uploadProductImage(uploadData)
        console.log("fileuploaded", data)
        setProduct({...product, mainImage: data})
        setImageReady(true)
    }

    const handleDelete = async () => {
        console.log("delete")
        await deleteProduct(productId)
        history.push("/products")
    }

    if (product.redirect) {
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
                            value={product.title}    
                        />
                        <Label htmlFor="price">Price</Label>
                        <Input 
                            type="text" 
                            name="price" 
                            onChange={handleEdit}
                            value={product.price}    

                        />
                        <Label htmlFor="category">Category</Label>
                        <Select name="category" onChange={handleEdit} value={product.category} >
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
                            value={product.ref}    
                        />
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                            name="description" 
                            cols="30" 
                            rows="10"
                            placeholder="write a description"
                            onChange={handleEdit}
                            value={product.description}
                        ></Textarea>
                        <Label htmlFor="image">Main Image</Label>
                        <Input 
                            type="file" 
                            name="image"
                            onChange={handleUpload} 
                            value={product.image} 
                        />
                        <Button type="submit" disable={!imageReady} >Edit Product</Button>
                    </Form>
                    <Button onClick={handleDelete} >Delete product</Button>
                </div>
            </Div>
        </div>
    )

}

export default EditProduct;