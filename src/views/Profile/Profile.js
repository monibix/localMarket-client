import React from 'react';
import {Div} from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Products() {

    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Profile</h1>
                </div>
            </Div>
        </div>
    )
}

export default Products;