import React from 'react';
import * as S from './style';
import  { NavbarContainer, Div } from "../../commons/commons.style";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';
import Joyeria from "../../assets/categoria-joyeria.png";
import Bebes from "../../assets/categoria-bebes.png";
import Complementos from "../../assets/categoria-complementos.png";
import Cosmetica from "../../assets/categoria-cosmetica.png";
import Moda from "../../assets/categoria-moda.png";
import Muebles from "../../assets/categoria-muebles.png";
import Carrousel1 from "../../assets/home-boreal.png";
import Carrousel2 from "../../assets/home-deco.png";
import Carrousel3 from "../../assets/home-flors.png";
import Carrousel4 from "../../assets/home-iquea.png";
import Carrousel5 from "../../assets/home-jaima.png";
import Carrousel6 from "../../assets/Producto4.jpeg";

function Main() {

    return (
        <div>
            <S.MinHeightContainer>
                <NavbarContainer>
                    <Navbar />
                </NavbarContainer>

                <S.CarrouselDiv id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={Carrousel2} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Carrousel5} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Carrousel3} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Carrousel4} alt="Third slide"/>
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Carrousel1} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </S.CarrouselDiv>
            </S.MinHeightContainer>

            <S.Div>
                <div className="category-left">
                    <Link to="/category?category=complementos">
                    <S.Category>
                        <img src={Complementos} alt="joyeria"/>
                    </S.Category>
                    </Link>

                    <Link to="/category?category=muebles">
                    <S.Category>
                        <img src={Muebles} alt="muebles"/>
                    </S.Category>
                    </Link>

                    <Link to="/category?category=bebes">
                    <S.Category>
                        <img src={Bebes} alt="bebes"/>
                    </S.Category>
                    </Link>
                </div>
                <div className="category-right">
                    <Link to="/category?category=moda">
                    <S.Category>
                        <img src={Moda} alt="moda"/>
                    </S.Category>
                    </Link>

                    <Link to="/category?category=cosmetica">
                    <S.Category>
                        <img src={Cosmetica} alt="cosmetica"/>
                    </S.Category>
                    </Link>

                    <Link to="/category?category=joyeria">
                    <S.Category>
                        <img src={Joyeria} alt="joyeria"/>
                    </S.Category>
                    </Link>
                </div>
            </S.Div>
            <Footer/>
        </div>
    )
}

export default Main;