import 'animate.css'
import './Formulario.css'
import { useState,useEffect } from 'react'
export function Formulario() {

const[nombre,setNombre]=useState(null)
const[telefono,setTelefono]=useState(null)
const[correo,setCorreo]=useState(null)
const[hora,setHora]=useState(null)
const[fecha,setFecha]=useState(null)
    return (
        <>


            <div className="container-fluid formulario">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <form className="">
                            <div className="row">
                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-people-fill"></i></span>
                                        <input 
                                        type="text"
                                         class="form-control"
                                          placeholder="Nombre de usuario" 
                                          aria-label="Username" 
                                          aria-describedby="basic-addon1"
                                          id='nombre'
                                          onChange={(evento)=>{
                                            setNombre(evento.target.value)
                                          }}
                                          />
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-phone-fill"></i></span>
                                        <input 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Telefono"
                                         aria-label="telefono" 
                                         aria-describedby="basic-addon1"
                                         id='telefono'
                                         onChange={(evento)=>{
                                            setTelefono(evento.target.value)
                                          }} />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope-open-fill"></i></span>
                                        <input 
                                        type="email" 
                                        class="form-control" 
                                        placeholder="email"
                                         aria-label="email" 
                                         aria-describedby="basic-addon1"
                                         id='correo'
                                         onChange={(evento)=>{
                                            setCorreo(evento.target.value)
                                          }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-watch"></i></span>
                                        <input 
                                        type="time"
                                         name="hora" 
                                         value="6:00:00"
                                          max="24:00:00" 
                                          class="form-control"
                                           placeholder="Hora"
                                            aria-label="Hora" 
                                            aria-describedby="basic-addon1" 
                                            id='hora'
                                            onChange={(evento)=>{
                                                setHora(evento.target.value)
                                              }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-event"></i></span>
                                        <input 
                                        type="date" 
                                        class="form-control" 
                                        placeholder="fecha" aria-label="fecha" 
                                        aria-describedby="basic-addon1"
                                        id='fecha' 
                                        onChange={(evento)=>{
                                            setFecha(evento.target.value)
                                          }}/>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className='btn btn-danger'>Enviar formulario..</button>

                        </form>

                    </div>
                </div>
            </div>





        </>
    )
}