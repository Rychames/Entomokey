import React from 'react';
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer"

import LogoEntomokey from "../images/LogoEntomokey.svg"
import IconPerson from "../images/icons/IconPerson.svg"
import IconLocation from "../images/icons/IconLocation.svg"
import IconPhoto from "../images/icons/IconPhoto.svg"
import Wave from "../images/Wave.svg"

import "../styles/Home.css"

const Home = () => (
    <>
        <Header />

        {/* MAIN */}
        <img src={LogoEntomokey} className="img-fluid rounded mx-auto d-block" />
        <img src={Wave} className="img-fluid" />
        <div className="main-about">
            <button type="button" className="btn custom-btn ms-5 mb-4">Cadastre-se</button>
            <p className="txt-discover h1 ms-5">Descubra a como identificar insetos por meio de chave dicotômica!!</p>
            <p className="txt-explore h2 ms-5 mt-5 me-5">Explore a biodiversidade dos insetos e tire suas dúvidas na comunidade entomokey.
                Utilizando <b className="txt-key">chaves dicotômicas</b> ilustrativas que facilitarão e tornarão agradável o processo de identificação.</p>
            <div className='container '>
                <div className="row main-cards">
                    <div className="col-md-4 d-flex justify-content-center  ">
                        <Card
                            imgSrc={IconPerson}
                            text="Descubra de maneira intuitiva a como saber das ancestralidades dos insetos."
                            textBtn="Comunidade"
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center ">
                        <Card
                            imgSrc={IconLocation}
                            text="Saiba em quais ambientes e onde são localizados os insetos."
                            textBtn="Localização"
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center ">
                        <Card
                            imgSrc={IconPhoto}
                            text="O site irá fornecer imagens para a identificação dos insetos."
                            textBtn="Ilustração"
                        />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
);

export default Home;
