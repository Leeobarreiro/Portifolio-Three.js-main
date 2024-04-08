import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion"
import { Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { Col, Container, Tab, } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from "../assets/img/color-sharp2.png"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Section = (props) => {
    const {children} = props;

    return ( <motion.section className={`
    h-screen w-screen p-8 max-w-screen-2x1 mx-auto
    flex flex-col items-start justify-center`}
    
    initial={{

        opacity: 0,
        y: 50,

    }}

    whileInView={{
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            delay: 0.6,
        }

    }}

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

    <Section>
        <p>projeto</p>
    </Section>
    
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
                <source src="src/components/Pokemon Blue-Red - Pallet Town.mp3" type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <h1 className="text-4xl leading-snug text-more-left text-more-top ">
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
                    delay: 1.5,                
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
                delay: 2,                
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
                <source src="src/components/Trainer Battle - Pokémon Red & Blue Extended.mp3" type="audio/mp3" />
                Seu navegador não suporta o elemento de áudio.
            </audio>
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




const ContactSection = () => {

    return(
        <Section>
            <h2 className="text-5xl ">Entre em contato</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label for="name" className="font-medium text-gray-900 block mb-1">
                        Name
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