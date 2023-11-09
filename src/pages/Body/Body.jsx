
import { useEffect, useState } from "react"
import { NavBar } from "../../components/appBar/NavBar"
import { Habiidades } from "../Habilidades/Habilidades"
import { Header} from "../Header/Header"
import { Projetos } from "../Projetos/Projetos"
import { Sobre } from "../Sobre/Sobre"
import { useLocation } from "react-router-dom"
import { PopUp } from "../../components/popup/PopUp"





export const Body = ()=>{
  const [openModal,setOpenModal]=useState(true)
    const location = useLocation()
    useEffect(() => {
        const { hash } = location;
        if (hash) {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);
      
    return(
<div>

      <NavBar />
      <PopUp openModal={openModal} closeModal={()=>setOpenModal(false)}/>
      <Header />
      <div id="sobre">
        <Sobre />
      </div>
      <div id="habilidades">
        <Habiidades />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
    </div>
  );
};