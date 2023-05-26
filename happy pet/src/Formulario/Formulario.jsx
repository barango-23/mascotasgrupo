import 'animate.css'
import './Formulario.css'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
export function Formulario() {

    const [nombre, setNombre] = useState(null)
    const [telefono, setTelefono] = useState(null)
    const [correo, setCorreo] = useState(null)
    const [hora, setHora] = useState(null)
    const [fecha, setFecha] = useState(null)

    const [erorres, setErorres] = useState({})

    useEffect(function () {
        console.log(erorres)
        console.log(Object.keys(erorres))
        if (Object.keys(erorres).length > 0) {// Aca no tengo errores
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Tienes campos sin llenar!',

            })

        } else {
            //no hay errores
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
    }, [erorres])

    function validarFormulario(evento) {
        evento.preventDefault()
        console.log("hola")
        let listadeErrores = {}

        if (!nombre) {
            listadeErrores.nombre = "Nombre obligatorio"
        }

        if (!correo) {
            listadeErrores.correo = "Correo obligatorio"
        }
        if (!telefono) {
            listadeErrores.telefono = "Telefono obligatorio"
        }
        if (!hora) {
            listadeErrores.hora = "hora obligatorio"
        }
        if (!fecha) {
            listadeErrores.fecha = "fecha obligatorio"
        }
        setErorres(listadeErrores)
        console.log(erorres)
    }
    return (
        <>
            <form onSubmit={validarFormulario}>


                <div className="container-fluid formulario">
                    <div className="row justify-content-center">
                        <div className="col-8">
                                <div className="row">
                                    <div className="col-12">
                                        <div class="input-group mb-3">
                                            
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-people-fill"></i></span>
                                            <input
                                            
                                                type="text"
                                                className={`form-control ${erorres.nombre ? 'is-invalid' : ''}`}
                                                placeholder="Nombre de usuario"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                id='nombre'
                                                value={nombre}
                                                onChange={(evento) => {
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
                                                className={`form-control ${erorres.telefono ? 'is-invalid' : ''}`}
                                                placeholder="Telefono"
                                                aria-label="telefono"
                                                aria-describedby="basic-addon1"
                                                id='telefono'
                                                value={telefono}
                                                onChange={(evento) => {
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
                                                className={`form-control ${erorres.correo ? 'is-invalid' : ''}`}
                                                placeholder="email"
                                                aria-label="email"
                                                aria-describedby="basic-addon1"
                                                id='correo'
                                                value={correo}
                                                onChange={(evento) => {
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
                                                className={`form-control ${erorres.hora ? 'is-invalid' : ''}`}
                                                placeholder="Hora"
                                                aria-label="Hora"
                                                aria-describedby="basic-addon1"
                                                id='hora'

                                                onChange={(evento) => {
                                                    setHora(evento.target.value)
                                                }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-event"></i></span>
                                            <input
                                                type="date"
                                                className={`form-control ${erorres.fecha ? 'is-invalid' : ''}`}
                                                placeholder="fecha" aria-label="fecha"
                                                aria-describedby="basic-addon1"
                                                id='fecha'
                                                value={fecha}
                                                onChange={(evento) => {
                                                    setFecha(evento.target.value)
                                                }} />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className='btn btn-danger'>Enviar formulario..</button>



                        </div>
                    </div>
                </div>



            </form>




        </>
    )
}
