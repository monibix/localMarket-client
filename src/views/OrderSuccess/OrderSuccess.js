import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Subnavbar from "../../components/SubNavbar/SubNavbar";
import { Button } from "../../commons/commons.style";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import * as S from "./style";

function OrderSuccess() {

    const history = useHistory()

    return(
        <div>
            <div>
                <Navbar />
                <Subnavbar />
            </div>
            <S.Container>
                <div>
                    <h5>Tu compra se ha realizado con éxito. <br /> Puedes realizar seguimiento de tu pedido desde tu espacio personal.</h5>
                    <Button onClick={()=>{ history.push("/orders") }}>Ver mis pedidos</Button>
                </div>
            </S.Container>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default OrderSuccess;