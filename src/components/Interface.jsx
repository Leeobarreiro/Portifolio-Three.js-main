import { motion } from "framer-motion"

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

export const Interface = () => {

    return (
        
   <div className="flex flex-col items-center w-screen px-40">
   
    <AboutSection />

    <SkillsSection />

    <Section>
        <h1>Projetos</h1>
    </Section>
    
    <ContactSection />
    
    </div>
    );

};

const AboutSection =() => {
    return(

        <Section>
            <h1 className="text-4xl leading-snug text-more-left">
                  Seja Bem vindo 
                <br />
                <span className=" px-1 italic">ao meu portifolio </span>
                <br />
                <span className=" px-1 italic"> animado</span>
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
            >
                Trabalho como Desenvolvedor Front-End
                <br />
                Também me aventuro pelo mundo Back-End
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
        </Section>

    )
}

const skills = [
    {
        title: "CSS",
        level: 70,
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
        title: "Português",
        level: 100,
    },
    {
        title: "Inglês",
        level: 60,
    },
    {
        title: "Espanhol",
        level: 20,
    },

]


const SkillsSection = () =>{
return(
    <Section>
        <motion.div whileInView={"visible"}>
            <h2 className="text-4xl ">Skills</h2>
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
            <h2 className="text-4xl mt-10">Linguagens</h2>
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