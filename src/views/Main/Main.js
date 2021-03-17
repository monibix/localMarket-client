import React from 'react';
import * as S from './style'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import Joyeria from "../../assets/joyeria770.png";
import Bebes from "../../assets/bebes-tips-para-elegir-la-mejor-ropita--770x513.jpg";
import Producto1 from "../../assets/producto.jpg"
import Producto2 from "../../assets/Producto2.jpg";
import Producto3 from "../../assets/Producto3.png";
import Producto4 from "../../assets/Producto4.jpeg";
import Carrousel1 from "../../assets/Carrousel1.jpeg";
import Carrousel2 from "../../assets/Carrousel2.jpeg";
import Carrousel3 from "../../assets/Carrousel3.jpeg";


function Main() {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            
            {/* <S.CarrouselDiv id="carouselExampleSlidesOnly" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={Producto1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide"/>
                </div>
            </div>
            </S.CarrouselDiv> */}

            <S.CarrouselDiv id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={Carrousel2} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Carrousel1} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Carrousel3} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </S.CarrouselDiv>

            <S.Div>
                <Link to="/category?category=joyeria">
                <S.Category>
                    <img src={Joyeria} alt="joyeria"/>
                    <h2>Joyería</h2>
                </S.Category>
                </Link>

                <Link to="/category?category=bebes">
                <S.Category>
                    <img src={Bebes} alt="bebes"/>
                    <h2>Bebes y niños</h2>
                </S.Category>
                </Link>

                <Link to="/category?category=moda">
                <S.Category>
                    <img src={Joyeria} alt="moda"/>
                    <h2>Moda</h2>
                </S.Category>
                </Link>

                <Link to="/category?category=muebles">
                <S.Category>
                    <img src={Joyeria} alt="muebles"/>
                    <h2>Muebles y decoración</h2>
                </S.Category>
                </Link>

                <Link to="/category?category=complementos">
                <S.Category>
                    <img src={Joyeria} alt="complementos"/>
                    <h2>Complementos</h2>
                </S.Category>
                </Link>

                <Link to="/category?category=cosmetica">
                <S.Category>
                    <img src={Joyeria} alt="cosmetica"/>
                    <h2>Cosmetica</h2>
                </S.Category>
                </Link>
            </S.Div>
            <Footer/>
        </div>
    )
}

export default Main;