import React from "react";
import perfilImage from "../images/perfil.png"

function Hero(){
    return(
            <main id="home">
                <div className="home-content">
                    <p>Oi,</p>
                    <p>Eu sou Willian</p>
                </div>
                <div className="home-img-wrapper">
                    <img src={perfilImage} alt="Willian Cavalcante"></img>
                </div>
            </main>         
    )
}

export default Hero;