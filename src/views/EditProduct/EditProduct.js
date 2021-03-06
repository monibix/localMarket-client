import React from 'react';
import * as S from "./styles";
import { Button } from "../../commons/commons.style";
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

    const { editProduct, error } = useProducts()

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
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3>Edita tu producto</h3>
                    
                    <S.Form onSubmit={handleSubmit}>
                        <S.Head>
                            <div className="image-container">
                                <S.Label htmlFor="image">Imagen principal</S.Label>
                                <S.Input 
                                    type="file" 
                                    name="image"
                                    onChange={handleUpload} 
                                />
                            </div>

                            <div className="title-section">
                                <div className="field-container">
                                    <S.Label htmlFor="title">T??tulo</S.Label>
                                    <S.Input 
                                        type="text"
                                        name="title" 
                                        onChange={handleEdit}
                                        value={product.title}    
                                    />
                                </div>
                                
                                <div className="field-container">
                                    <S.Label htmlFor="ref">Referencia</S.Label>
                                    <S.Input
                                        type="text"
                                        name="ref"
                                        placeholder="referencia"
                                        onChange={handleEdit}
                                        value={product.ref}    
                                    />
                                </div>

                                <div className="field-container">
                                    <S.Label htmlFor="price">Precio</S.Label>
                                    <S.Input 
                                        type="number" 
                                        name="price" 
                                        onChange={handleEdit}
                                        value={product.price}    
                                    />
                                </div>
                                
                                <div className="field-container">
                                <S.Label htmlFor="category">Categor??a</S.Label>
                                <S.Select name="category" onChange={handleEdit} value={product.category} >
                                    <option value="none">Selecciona una categor??a</option>
                                    <option value="joyeria">Joyer??a</option>
                                    <option value="bebes">Beb??s y Ni??os</option>
                                    <option value="moda">Moda</option>
                                    <option value="muebles">Muebles y Decoraci??n</option>
                                    <option value="complementos">Complementos</option>
                                    <option value="cosmetica">Cosm??tica</option>
                                </S.Select>
                                </div>
                            </div>
                        </S.Head>

                        <S.Description>
                            <div className="description-container">
                                <S.Label htmlFor="description">Descripci??n</S.Label>
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

                        <div>
                            <Button type="submit" disable={!imageReady} >Guardar</Button>
                            <Button onClick={()=>{(history.push(`/products/${product._id}`))}}>Descartar</Button>
                        </div>
                        <h5 style={{color: "red"}}>{error}</h5>
                    </S.Form>
                </div>
            </S.MyAreaContainer>
        </div>
    )

}

export default EditProduct;