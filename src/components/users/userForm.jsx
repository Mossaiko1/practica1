import { useState } from "react";

const UserForm = ({companies, addUser}) => {

    const [userName, setUserName] = useState('');
    const [companySelected, setCompanySelected] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName.trim() && companySelected){
            addUser({userName, company: companySelected});
            setUserName('');
            setCompanySelected('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Agregar nuevo usuario</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="user" className="form-label">Nombre del usuario</label>
                <input type="text" className="form-control" id="user" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nombre del usuario" required/>
            </div>
            <div className="mb-3">
            <label htmlFor="company" className="form-label">Compañía</label>
            <select className="form-select" value={companySelected} onChange={(e) => setCompanySelected(e.target.value)} required> <option value="">Seleccionar empresa</option> 
            {companies.map((company, index) => (
                        <option key={index} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-dark">Añadir el nuevo usuario</button>
            </form>
        </div>
    );
}

export default UserForm;