export const Menu = (props) => {
    const {onSectionChange, menuOpened, setMenuOpened } = props;

    return (
    <>

    <buttom 
    onClick={() => setMenuOpened (!menuOpened)}
    className = "z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md">
     <div
     className={`bg-white h-0.5 rounded-md w-full transition-all ${
        menuOpened ? "rotate-45 translate-y-0.5" : ""
    }`}   
     />
     <div
     className={`bg-white h-0.5 rounded-md w-full my-1 ${
        menuOpened ? "hidden" : ""
     }`}
     />
     <div
     className={`bg-white h-0.5 rounded-md w-full transition-all ${
        menuOpened ? "-rotate-45" : ""
     }`}
     />
     </buttom>
     <div
     className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
     ${menuOpened ? "w-80" : "w-0"}`}
     >
    <div className="flex-1 flex items-star justify-center flex-col gap-6 p-8">
     <MenuButtom label="Sobre" onClick={() => onSectionChange(0)} />
     <MenuButtom label="Skills" onClick={() => onSectionChange(1)} />
     <MenuButtom label="Projetos" onClick={() => onSectionChange(2)} />
     <MenuButtom label="Contato" onClick={() => onSectionChange(3)} />

    </div>
    </div>
    </>
    );
};

const MenuButtom = (props) => {
    const { label, onClick } = props;
    return (
     <buttom
        onClick={onClick}
        className="text-2xl font-bold cursos-pointer hover:text-indigo-600 transition-color"
    >
        {label}
    </buttom>
    );
};