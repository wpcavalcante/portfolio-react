import React from 'react';
import Heading from './Heading';
import Hero from './Hero';
import sites from '../sites'
import Projetos from './Projetos';
import Skills from './Skills';
import MobileMenu from './Mobile-menu';


function createProject(site){
    return(
        <Projetos
        key={site.id}
        image={site.image}
        name={site.name}
        text={site.text}
        url={site.url}
        code={site.code}
        />
    )
}

function App(){
    return(
        <div>
        <Heading/>
        <MobileMenu/>
        <Hero/>
        <h2 id="project-title">Projetos</h2>
        {sites.map(createProject)}
        <Skills/>
        </div>
    
    
    )

}


export default App;