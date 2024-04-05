import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Background from './components/background';
import Info from './components/Info';
import ProjectCard from './components/ProjectsCard';
import Contact from './components/Contact';
import image1 from './images/retro.png';
import image2 from './images/Extension_1.png';
import image3 from './images/ds_assets.png';
import Experience from './components/Experience';


function App() {
  const projects = [
    {
      title: 'Short Url',
      description: 'This website shortens your URL',
      image: image1, // Path to image
      demoUrl: 'https://short-url-chile.vercel.app/',
      codeUrl: 'https://github.com/CarlosAkel/Short-Url-Chile'
    },
    {
      title: 'Extension For Visual Studio',
      description: 'Just A Scraggy',
      image: image2,
      demoUrl: 'https://marketplace.visualstudio.com/items?itemName=CarlosAK.Scraggy',
      codeUrl: 'https://github.com/CarlosAkel/theme'
    },
    {
      title: 'DSMODEL',
      description: 'Project tha let you obtain and see NDS assets',
      image: image3,
      demoUrl: 'https://whale-app-xhvo6.ondigitalocean.app/',
      codeUrl: 'https://github.com/CarlosAkel/DsModelsChileCA/tree/main/back'
    },
    // Add more projects as needed
  ];

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='App'>
        <Info scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} scrollToExperience={scrollToExperience} />

        <div ref={projectsRef}>
          <div className='container'>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div ref={experienceRef}>
          <Experience ></Experience>
        </div>

        <Background />

        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
