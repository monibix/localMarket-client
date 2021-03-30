import React from 'react';
import * as S from "./styles";
import { Button } from "../../commons/commons.style";
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
    const [isLoading, setLoading] = React.useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({...state, [name]:value})
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault(e)
        await createProduct(state)
        setState(initialState)
            history.push("/products")
        setLoading(true)
    }

    const handleUpload = async (e) => {
        setImageReady(false)
        const uploadData = new FormData()
        uploadData.append('mainImage', e.target.files[0]);
        const {data} = await uploadProductImage(uploadData)
        setState({...state, mainImage: data})
        setImageReady(true)
    }

    return (
        <S.MyAreaContainer>

            <S.Form onSubmit={handleSubmit} >
            <S.Head>
                <div className="image-container">
                    <S.Label htmlFor="image">Imagen principal</S.Label>
                    <S.Input 
                        type="file"     
                        name="image" 
                        value={state.image} 
                        onChange={handleUpload}
                        disable={!imageReady} 
                    />
                </div>

                <div className="title-section">
                    <div className="field-container">
                        <S.Label htmlFor="title">Título</S.Label>
                        <S.Input 
                            type="text" 
                            name="title" 
                            placeholder="Enter product's title"
                            onChange={handleChange}
                            value={state.title}
                            required
                        />
                    </div>

                    <div className="field-container">
                        <S.Label htmlFor="price">Precio</S.Label>
                        <S.Input 
                            type="number" 
                            name="price" 
                            placeholder="Enter product's price"
                            onChange={handleChange}
                            value={state.price}
                            required
                        />
                    </div>

                    <div className="field-container">
                        <S.Label htmlFor="category">Categoría</S.Label>
                        <S.Select name="category" onChange={handleChange} value={state.category} required >
                            <option value="joyeria">Joyería</option>
                            <option value="bebes">Bebés y Niños</option>
                            <option value="moda">Moda</option>
                            <option value="muebles">Muebles y Decoración</option>
                            <option value="complementos">Complementos</option>
                            <option value="cosmetica">Cosmética</option>
                        </S.Select>
                    </div>
                    <div className="field-container">
                        <S.Label htmlFor="ref">Referencia</S.Label>
                        <S.Input
                            type="text"
                            name="ref"
                            placeholder="referencia"
                            onChange={handleChange}
                            value={state.ref}
                            required
                        />
                    </div>
                </div>
            </S.Head>

            <S.Description>
                <div className="description-container">
                    <S.Label htmlFor="description">Descripción</S.Label>
                    <S.Textarea 
                        name="description" 
                        cols="30" 
                        rows="10"
                        placeholder="write a description"
                        onChange={handleChange}
                        value={state.description}
                        wrap="hard"
                    ></S.Textarea>
                </div>
            </S.Description>
                <div>
                    <Button type="submit">CREAR</Button>  
                    <Button onclick={()=>{history.push(`/products`)}}>DESCARTAR</Button>  
                    <h5 style={{color: "red"}}>{error}</h5>
                    {isLoading && "loading..."}
                </div>
            </S.Form>
        </S.MyAreaContainer>
    )
}

export default Productform;