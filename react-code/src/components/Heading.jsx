import React from "react";

function ShowMenu(){
    const hamburguerButton = document.querySelector('.navbar-icon')
    const mobileMenu = document.querySelector('.mobile-nav')

    hamburguerButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('is-active')
    })

}

function Heading(){
    return(
        <header className="navbar">
                <ul className="nav-options">
                    <a href="#home"><li className="nav-item">Home</li></a>
                    <a href="#project-title"><li className="nav-item">Projetos</li></a>
                    <a href="#skills"><li className="nav-item">Skills</li></a>
                    <a href="https://www.figma.com/file/wTh2kmW18ywNQQDIWPKDf9/Portf%C3%B3lio?node-id=13%3A24" target="_blank"><li className="nav-item">Figma</li></a> 
                    <a href="https://github.com/wpcavalcante/portfolio-react.git" target="_blank"><li className="nav-item">GitHub</li></a>
                </ul>
                <div className="navbar-icon" >
                    <i className="fa-solid fa-bars" onClick={ShowMenu}></i>
                </div>
        </header>
    )
}

export default Heading;