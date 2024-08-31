import { useState } from "react";

const CompanyForm = (addCompany) => {

    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(company.trim()){
            addCompany(company);
            setCompany('');
        }
    }


    return (
        <div className="container mt-4">
            <h2>Agregar una nueva empresa</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company" className="form-label">Nombre de la empresa</label>
                <input type="text" id="company" className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nombre de la empresa" required />
            </form>
            <button className="btn btn-dark position-relative">Añadir empresa</button>
        </div>
    );
}

export default CompanyForm;