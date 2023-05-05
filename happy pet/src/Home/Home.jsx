import { Menu } from '../Shared/Menu/Menu'
import { Formulario } from '../Formulario/Formulario'
import { Servicios } from '../Servicios/Servicios'
import { Footer } from '../Footer/Footer'
import { Productos } from '../Productos/Productos'

import './Home.css'
export function Home(){
    return(
        <>
        <Menu/>
        <section className="banner img-fluid w-80"></section>

        
        <Formulario/>

        <Servicios/>

       
              <Productos/>
              
              <Footer/>
       
        
        </>
    )
}