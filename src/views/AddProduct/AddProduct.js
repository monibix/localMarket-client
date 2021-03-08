import React from 'react';
import { Div } from './style';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Form } from '../../components/AuthForm/styles';
import ProductForm from '../../components/ProductForm/ProductForm'

function AddProduct() {

    return (
        <div>
            <Navbar/>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Form to add a new product</h1>
                    <ProductForm/>
                </div>
            </Div>
        </div>
    )
}

export default AddProduct;