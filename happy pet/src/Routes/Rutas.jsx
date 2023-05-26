import { Route, Routes } from "react-router-dom"

import { Menu } from "../Shared/Menu/Menu"
import { Listareservas } from "../Listareservas/Listareservas"
import { Formulario } from "../Formulario/Formulario"
import { Servicios } from "../Servicios/Servicios"
import { Productos } from "../Productos/Productos"
import {Home} from "../Home/Home"
import { Footer } from "../Footer/Footer"

export function Rutas(){

    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamiento" element={<Formulario />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/reservas" element={<Listareservas />} />
                <Route path="/productos" element={<Productos />} />
                
            </Routes>
            <Footer/>
        </>
    )

}

