import { Outlet, Link } from "react-router-dom";

const Navbar =() => {
    return (
        <>
            <header>
                <img src="" className="img-fluid" alt=""/>
                <nav>
                    <Link className="fontLink" to="/home">Home</Link>
                    <Link className="fontLink" to="/Register">Registro</Link>
                    <Link className="fontLink" to="/Login">Log in</Link>
                    <Link className="fontLink" to="/register/users">Registro de usuarios</Link>
                    <Link className="fontLink" to="/users">Usuarios</Link>
                    <Link className="fontLink" to="/register/companies">Registro de empresas</Link>
                    <Link className="fontLink" to="/companies">Empresas</Link>
                </nav>
                <div>
                    <span>Nombre de usuario</span>
                    <button className="btn btn-danger">Cerrar sesión</button>
                </div>
            </header>
            <Outlet />  {/* Dynamically renders the current route component */}
        </>
    );
}

export default Navbar;