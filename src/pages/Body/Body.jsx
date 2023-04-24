
import { NavBar } from "../../components/appBar/NavBar"
import { Habiidades } from "../Habilidades/Habilidades"
import { Header} from "../Header/Header"
import { Projetos } from "../Projetos/Projetos"
import { Sobre } from "../Sobre/Sobre"





export const Body = ()=>{
    return(
        <div>

        <NavBar/>
        <Header/>
        <Sobre/>
        <Habiidades/>
        <Projetos/>

        
        </div>
    )
}