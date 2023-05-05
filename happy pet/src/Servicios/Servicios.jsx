import WOW from 'wow.js'
import 'animate.css'
import './Servicios.css'

import { useEffect } from 'react'
export function Servicios(){
    useEffect(function(){
        const wow = new WOW()
        wow.init()
    },[])
    return(
        <>
          <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4  wow animate__animated animate__backInDown" >
                        <h1 className="texto titulo">Paseos</h1>
                       < p className="texto">Nuestros paseos constan de caminatas con los perros por lugares naturales alejados de cualquier
                            peligro proveniente del trafico, con juegos, hidratación y alimentos dependiendo del clima</p>
                        <h1 className="texto titulo">Horarios de paseo</h1>
                        <p className="texto">7 A.M - 8 A.M</p>
                        <p className="texto">6 P.M - 7 P.M</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/paseo.jpg?alt=media&token=f61e0472-ef74-4cb4-bc6c-70e812ad1152" alt="paseo" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4  wow animate__animated animate__backInDown">
                        <h2 className="texto titulo">Aseo</h2>
                    <p className="texto">Nuestros servicios de aseo consisten en una ducha relajante con masajes y burbujas, secadores,
                        peinados y paticure todo para que se sientan como en su casa. </p>
                    <h2 className="texto titulo">Para tener en cuenta</h2>
                    <p className="texto">Por lo general los aseos serán mensualmente, pero si el dueño lo desea, se podrá hacer según cada
                        cuanto el dueño lo crea conveniente</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/aseo-veterinaria.jpg?alt=media&token=0f1edc7a-a545-4756-9752-05d897dffd1f" alt="aseo" className="img-fluid w-100"/>
                </div>
                <div className="col-12 col-md-4  wow animate__animated animate__backInDown">
                    <h3 className="texto titulo">Veterinaria</h3>
                    <p className="texto">Nuestro cuidado por nuestros queridos clientes perrunos y gatunos es muy importante para nosotros,
                        semanal,
                        mensual y anualmente contarán con nuestros servicios de veterinaria con chequeos constantes y
                        vacunsa que nos
                        permitirán mantener a nuestros clientes perrunos y gatunos saludables siempre listos para hacernos
                        felices</p>
                    <h3 className="texto titulo">De importancia!</h3>
                    <p className="texto titulo">Con la compañía de cada dueño brindaremos nuestros servicios de veterinaria, todo para que nuestros
                        perros y
                        gatos se sientan tan comodos como sea posible y para que sus dueños monitoreen en tiempo real el
                        proceso de cada
                        medicamento y cada vacuna</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/imagen-veterinaria.jpg?alt=media&token=6fe5d57c-d708-416f-ab41-b66fa5c07bed" alt="vet" className="img-fluid w-100"/>
                </div>
            </div>
        </div >
        
        
        
        
        
        </>
    )
}