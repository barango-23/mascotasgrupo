import { Menu } from '../Shared/Menu/Menu'
import { Formulario } from '../Formulario/Formulario'
import { Servicios } from '../Servicios/Servicios'
import { Footer } from '../Footer/Footer'
import { Productos } from '../Productos/Productos'
import { Carga } from '../Shared/Carga/Carga'
import { useState, useEffect } from 'react'
import './Home.css'
export function Home(){

    const[estadoDecarga,setEstadoDecarga]=useState(true)
    const[tiempoCarga,setTiempoCarga]=useState(0)


    useEffect(function(){
tiempoCarga>0?setEstadoDecarga(false): setEstadoDecarga(true)
      
    },[tiempoCarga])

    setTimeout(function(){
        setTiempoCarga(1)
    },1000)
    if(estadoDecarga){
return(
    <>
 <Carga/>
    </>
)
    }else{

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
   
}