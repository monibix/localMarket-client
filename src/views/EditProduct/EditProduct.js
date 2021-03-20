import React from 'react';
import * as S from "./styles"
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getMyProduct as getMyProductService } from "../../service/products.service";
import { uploadProductImage } from "../../service/products.service";

function EditProduct() {
    const history = useHistory()

    const { productId } = useParams() 
    console.log("productid en edit", productId)

    const { editProduct } = useProducts()

    const initialState = {title:"", price:"", category:"", ref:"", description:"", image:""}
    const [product, setProduct] = React.useState(initialState)
    const [imageReady, setImageReady] = React.useState(false)
    
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

    if (product.redirect) {
        return <Redirect to={`/products/${productId}`}/>
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <S.Div>
                <Sidebar/>
                <div className="content">
                    <h1>Edit Product </h1>
                    <S.Form onSubmit={handleSubmit}>
                        <S.Head>
                            <div>
                                <S.Label htmlFor="image">Main Image</S.Label>
                                <S.Input 
                                    type="file" 
                                    name="image"
                                    onChange={handleUpload} 
                                    value={product.image} 
                                />
                            </div>

                            <div className="title-section">
                                <S.Label htmlFor="title">Title</S.Label>
                                <S.Input 
                                    type="text"
                                    name="title" 
                                    onChange={handleEdit}
                                    value={product.title}    
                                />
                                
                                <S.Label htmlFor="ref">Referencia</S.Label>
                                <S.Input
                                    type="text"
                                    name="ref"
                                    placeholder="referencia"
                                    onChange={handleEdit}
                                    value={product.ref}    
                                />

                                <S.Label htmlFor="price">Price</S.Label>
                                <S.Input 
                                    type="number" 
                                    name="price" 
                                    onChange={handleEdit}
                                    value={product.price}    
                                />
                                <div>
                                <S.Label htmlFor="category">Category</S.Label>
                                <S.Select name="category" onChange={handleEdit} value={product.category} >
                                    <option value="none">Selecciona una categoría</option>
                                    <option value="joyeria">Joyería</option>
                                    <option value="bebes">Bebés y Niños</option>
                                    <option value="moda">Moda</option>
                                    <option value="muebles">Muebles y Decoración</option>
                                    <option value="complementos">Complementos</option>
                                    <option value="cosmetica">Cosmética</option>
                                </S.Select>
                                </div>
                            </div>
                        </S.Head>

                        <S.Description>
                            <div>
                                <S.Label htmlFor="description">Description</S.Label>
                                <S.Textarea 
                                    name="description" 
                                    cols="30" 
                                    rows="10"
                                    placeholder="write a description"
                                    onChange={handleEdit}
                                    value={product.description}
                                ></S.Textarea>
                            </div>
                        </S.Description>


                        <S.Button type="submit" disabled={!imageReady} >Edit Product</S.Button>
                    </S.Form>
                </div>
            </S.Div>
        </div>
    )

}

export default EditProduct;