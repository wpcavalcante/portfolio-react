import React from "react";


function Projetos(props){
    return(
        <section id="projetos">
            <div className="project-card">
                <div className="project-img-wrapper">
                    <img src={props.image}></img>
                </div>
                <div className="project-content">
                    <h3>{props.name}</h3>
                    <p>{props.text}</p>
                    <div className="project-buttons">
                        <a href={props.url} target="_blank"><button className="button site-button">Site</button></a>
                        <a href={props.code} target="_blank"><button className="button code-button">Código</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos