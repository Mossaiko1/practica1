const CompanyList = ({ companies }) => {
    return (
        <div className="container mt-4">
            <h3>Lista de empresas</h3>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
