import { useState } from "react";

const Register = () => {
    // initialize the form data
    const initialFormData = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    //localstate to field the form data
    const [formData, setFormData] = useState(initialFormData);
    
    //manager to field the form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //manager to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado', formData)
    };

    return (
        <div className="container mt-4">
            <h2 className="">Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" name="username" id="username" value={formData.username} onChange={handleChange} placeholder="Ingrese su nombre de usuario" required/>
                </div>
                <div  className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Ingrese su correo eléctronico" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Ingrese su contraseña" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirma tu contraseña" required/>
                </div>
                <button type="submit" className="btn btn-dark position-relative">Registrar</button>
            </form>
        </div>
    );
}

export default Register;