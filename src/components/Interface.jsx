import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion"




const Section = (props) => {
    const {children} = props;

    return ( <motion.section className={`
    h-screen w-screen p-8 max-w-screen-2x1 mx-auto
    flex flex-col items-start justify-center`}
    


    >
        {children}
                
        
    </motion.section >
    
    );
};

const Key = ({ children }) => {
    return (
        <motion.div className="key-animation m-2 bg-gray-800 text-white w-10 h-10 flex justify-center items-center rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {children}
        </motion.div>
    );
};

const MusicContext = React.createContext({
    currentMusic: null,
    setCurrentMusic: () => {},
  });



export const Interface = () => {

    const [currentMusic, setCurrentMusic] = useState(null);


    return (
        
    <MusicContext.Provider value={{ currentMusic, setCurrentMusic }}>
    <div className="flex flex-col items-center w-screen px-40">

   
    <AboutSection/>


    <SkillsSection />

    <ProjectSection />
    
    <ContactSection />
    
    </div>
   
    </MusicContext.Provider>

    );

};

const AboutSection =() => {
    const { currentMusic, setCurrentMusic } = React.useContext(MusicContext);
    const audioRef = useRef(null);

    const togglePlay = () => {
        // Pausa a música atual se não for a música desta seção
        if (currentMusic && currentMusic !== audioRef.current) {
            currentMusic.pause();
        }
        // Toca ou pausa a música desta seção
        if (audioRef.current.paused) {
            audioRef.current.play();
            setCurrentMusic(audioRef.current);
        } else {
            audioRef.current.pause();
        }
    };

    // Efeito para pausar a música quando a seção é desmontada
    useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);
    
    return(

        <Section>
            
            <button onClick={togglePlay} className="pixel-art-button">
                {audioRef.current && !audioRef.current.paused ? 'Parar Música' : 'Tocar Música'}
            </button>
            <audio ref={audioRef} loop>
                <source src="src/components/Pokemon.mp3" type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <div>
             <img src="icon_music.svg" alt="Música" className='icon' />
            </div>
            <h1 className="text-4xl leading-snug text-more-left text-more-top">
                  Seja Bem vindo 
                <br />
                <span>ao meu portifolio </span>
                <br />
                <span> em Pixel Art</span>
            </h1>
            

            
            <motion.p className="text-lg text-gray-600 mt-4 text-more-left"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 0.6,                
                }}
            >   Me chamo Leonardo Barreiro
                <br />
                Trabalho como Desenvolvedor Front-End
                <br />
                Tambem me aventuro pelo mundo Back-End
            </motion.p>
            <motion.button
            className={` bg-indigo-600 text-white py-4 px-8 
            rounded-lg  text-lg mt-16 text-more-left`}
            
            initial={{
                opacity: 0,
                y: 25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 0.6,                
            }}
            >
                Entre em contato
            </motion.button>
            <div className="flex flex-col items-center justify-center w-full mt-8" style={{ transform: 'translateX(-20rem) translateY(-6rem)' }}> {/* Esta linha foi modificada */}
                <div className="flex justify-center items-center">
                    <Key>W</Key>
            </div>
                <div className="flex justify-center items-center">
                    <Key>A</Key>
                    <Key>S</Key>
                    <Key>D</Key>
                </div>
            </div>
            <h1 className="GUPY">
                 Tech Recruiter
                <br />
            </h1>
            <div className='gupy-img'>
            <img src='public/textures/gupy.png' />
            </div>
        </Section>

    )
}   

const skills = [
    {
        title: "ThreeJS",
        level: 50,
    },
    {
        title: "Javascript",
        level: 60,
    },
    {
        title: "React",
        level: 50,
    },
    {
        title: "PHP",
        level: 80,
    },
    {
        title: "Nodejs",
        level: 50,
    },
   
];

const languages = [

    {
        title: "Portugues",
        level: 100,
    },
    {
        title: "Ingles",
        level: 60,
    },
    {
        title: "Espanhol",
        level: 20,
    },

]


const SkillsSection = () =>{

    const { currentMusic, setCurrentMusic } = React.useContext(MusicContext);
    const audioRef = useRef(null);

    const togglePlay = () => {
        // Pausa a música atual se não for a música desta seção
        if (currentMusic && currentMusic !== audioRef.current) {
            currentMusic.pause();
        }
        // Toca ou pausa a música desta seção
        if (audioRef.current.paused) {
            audioRef.current.play();
            setCurrentMusic(audioRef.current);
        } else {
            audioRef.current.pause();
        }
    };

    // Efeito para pausar a música quando a seção é desmontada
    useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);

return(
    <Section>
       <button onClick={togglePlay} className="pixel-art-button2">  
                {audioRef.current && !audioRef.current.paused ? 'Parar Música' : 'Tocar Música'}
            </button>
            <audio ref={audioRef} loop>
                <source src="src/components/Trainer.mp3" type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <div>
                <img src="icon_music2.svg" alt="Música" className='icon2' />
            </div>
        <motion.div whileInView={"visible"}>
            <h2 className="text-4xl text-more-top ">Skills</h2>
            <div className=" mt-8 space-y-4">
                {skills.map((skill, index) => (
                    <div className="w-64" key={index}>
                      <motion.h3 className="text-xl  text-gray-800"
                        initial={{
                            opacity: 0,
                        }}
                        variants={{
                            visible:{
                                opacity: 1,
                                transition:{
                                    duration: 1,
                                    delay: 1 + index * 0.2,
                                }
                            }

                        }}
                       
                      
                      >{skill.title}</motion.h3> 
                      <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <motion.div 
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${skill.level}%`}} 
                        initial={{
                            scaleX: 0,
                            originX: 0,
                        }}
                        variants={{
                            visible:{
                            scaleX: 1,
                            transition:{
                                duration: 1,
                                delay: 1 + index * 0.2,
                            }
                        }
                        }}
                        
                        
                        />
                        </div>
                        </div>
                ))}
            </div>
        <div>
            <h2 className="text-4xl mt-10">Linguas</h2>
            <div className=" mt-8 space-y-4">
                {languages.map((lng, index) => (
            <div className="w-64" key={index}>
        <motion.h3 className="text-xl  text-gray-800"
                    initial={{
                    opacity: 0,
                    }}
                    variants={{
                    visible:{
                    opacity: 1,
                    transition:{
                    duration: 1,
                    delay: 2 + index * 0.2,
                    }
                }

               }}
  
 
                >{lng.title}</motion.h3> 
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
        <motion.div 
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${lng.level}%`}} 
                initial={{
                scaleX: 0,
                 originX: 0,
                }}
                 variants={{
                 visible:{
                  scaleX: 1,
                 transition:{
                duration: 1,
                  delay: 2 + index * 0.2,
                }
            }
        }}
   
   
                 />
                </div>
                </div>            
                ))}
            </div>
            </div>
            </motion.div>
            
            <div className="flex flex-col items-center justify-center w-full mt-8" style={{ transform: 'translateX(25rem) translateY(-10rem)' }}>
                <div className="flex justify-center items-center">
                    <Key>W</Key>
            </div>
                <div className="flex justify-center items-center">
                    <Key>A</Key>
                    <Key>S</Key>
                    <Key>D</Key>
                </div>
            </div>

            </Section>
            );
        };


        const ProjectCard = ({ project }) => {
            return (
                <div className="project-card">
                    <img src={project.gif} alt={project.name} className="project-gif" />
                    <div className="project-info">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-900'>Ver Projeto</a>
                    </div>
                </div>
            );
        };
        
        const ProjectSection = () => {
            const projects = [
                {
                    name: "Todo - List",
                    description: "Lista de tarefas criada com javascript puro",
                    gif: "/public/gif/1.gif", // Caminho para o arquivo GIF
                    link: "https://leeobarreiro.github.io/Lista-de-tarefas/"
                },
                {
                    name: "Portfolio antigo",
                    description: "Meu primeiro portfolio feito em javascript e css",
                    gif: "/public/gif/4.gif", // Caminho para o arquivo GIF do Projeto 2
                    link: "https://leeobarreiro.github.io/Portfolio-Antigo/" // Link para o Projeto 2
                },
                {
                    name: "Automacao NFE para Excel",
                    description: "Transformar XML para tabelas de Excel",
                    gif: "/public/gif/3.gif", // Caminho para o arquivo GIF do Projeto 3
                    link: "https://github.com/Leeobarreiro/automacao_notafiscal" // Link para o Projeto 3
                }
                
            ];
        
            return (
                <Section>
                    <h1 className="css-project">
                        Projetos
                    </h1>
                    <motion.p className="css-project2"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 0.6,                
                }}
            >   Imagens Ilustrativas
            </motion.p>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </Section>
            );
        };
        
        


        const ContactSection = () => {
            // Ref para controlar a reprodução do vídeo
            const videoRef = useRef(null);
          
            // Efeito para iniciar a reprodução quando a seção entra em visão
            useEffect(() => {
              // Inicia a reprodução do vídeo quando a seção é carregada
              const playVideo = async () => {
                if (videoRef.current) {
                  try {
                    await videoRef.current.play();
                  } catch (err) {
                    console.error("Erro ao tentar reproduzir o vídeo", err);
                  }
                }
              };
          
              playVideo();
          
              // Opcional: pausar o vídeo quando a seção sai de visão
              return () => {
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              };
            }, []);

    return(
        <Section>
            <div className='video-css'>
             {/* Adiciona o vídeo aqui */}
             <video ref={videoRef} width="100%" loop muted>
                <source src="/public/animations/video1.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
            </div>
            <h2 className="text-5xl ">Entre em contato</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Nome
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <label
                    for="email"
                    className="font-medium text-gray-900 block mb-1 mt-8">
                        Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <label
                    for="email"
                    className="font-medium text-gray-900 block mb-1 mt-8">
                        Mensagem
                    </label>
                    <textarea
                    name="message"
                    id="message"
                    className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: text-lg" />
                    <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg  text-lg m-16">
                        Enviar
                    </button>

                </form>
                
            </div>
        </Section>


    )

}