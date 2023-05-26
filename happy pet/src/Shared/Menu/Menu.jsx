import './Menu.css'
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark menu">
                <div className="container-fluid wow  animate__animated animate__rubberBand inicial ">
                    <Link className="navbar-brand " to="/">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Mascotas</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/productos">Productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/servicios">Servicios</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/agendamiento">Agendamiento</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/reservas">VER RESERVAS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}