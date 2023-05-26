import { useState, useEffect } from "react"
import { consultarReservas } from "../services/serviciosReserva"
import './Listareservas.css'
export function Listareservas(){

    //configuro mis variables de estado
    const[reservas, setReservas]=useState(null)//uso para almacenar los datos que lleguen del Api
    const[carga, setCarga]=useState(true)//se pone en true ya que incializa en cargando

    //programo el useeffect para garantizar que llamare al servicio solo cuando cargue mi componente//

    useEffect(function(){
consultarReservas().then(function(respuestadelBack){
    setReservas(respuestadelBack.reservas)
    setCarga(false)
})
    },[])

//programo en la interfax para mostrar el mensaje de carga o para mostrar los datos del servicio IF Y ELSE//
if(carga){
return(
  <>
  <br /><br /><br />
  <h3>Estamos cargando...</h3>
  
  </>
)
}else{}
   return(
    <>
    <br /><br /><br />
   <div className="container reserva1">
    <div className="row row-cols-1 row-cols-md-4 g-3">

        {
            reservas.map(function(reserva){
                return(
                    <div className="col ">
                        <div className="card h-100 shadow">
                            <h5>Cliente:{reserva.nombre}</h5>
                            <p>Fecha:{reserva.dia}</p>
                            <p>Hora: {reserva.hora}</p>
                            <p>Contacto: {reserva.telefono}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
   </div>
    </>
   ) 
//para llamar js se interpola con un mapeo , map//

}

