//Usei um objeto pra ficar mais fácil quando eu quiser adicionar mais projetos, só usar  o map :D.

import tankenImage from "./images/tanken.png";
import meminiImage from "./images/memini.png";
import noxiesImage from "./images/noxies.png";


const sites = [
    {
        id:1,
        image:tankenImage,
        name:"Tanken",
        text:"Um site de viagens para o Japão. Foram utilizados HTML, CSS, Javascript e Jquery para a criação. Design foi feito por mim no Figma.",
        url:"https://wpcavalcante.github.io/Tanken",
        code:"https://github.com/wpcavalcante/Tanken"
    },
    {
        id:2,
        image:meminiImage,
        name:"Memini",
        text:"Um app estilo Google Keep. Foram utilizados ReactJS e CSS para a criação. ",
        url:"https://wpcavalcante.github.io/memini-reactjs-site",
        code:"https://github.com/wpcavalcante/memini-reactjs-site"
    },

    {
        id:3,
        image:noxiesImage,
        name:"Noxies",
        text:"Uma interface de rede social. Foram utilizados HTML, CSS e JavaScript para criação, além de uma API parar gerar usuários para o site. Design foi feito por mim no Figma.",
        url:"https://wpcavalcante.github.io/Noxies/",
        code:"https://github.com/wpcavalcante/Noxies"
    }

]

export default sites;