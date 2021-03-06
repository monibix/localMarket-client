import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Subnavbar from "../../components/SubNavbar/SubNavbar";
import { Button } from "../../commons/commons.style";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import * as S from "./style";

function NotFound() {

    const history = useHistory()

    return(
        <div>
            <div>
                <Navbar />
                <Subnavbar />
            </div>
            <S.Container>
                <div>
                    <h5>Oups, parece que la página que estás buscando no existe.</h5>
                    <Button onClick={()=>{ history.goBack() }}>Volver</Button>
                </div>
            </S.Container>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NotFound;