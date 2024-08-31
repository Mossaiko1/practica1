import { useState } from 'react';
import './App.css'
import AppRouter from './routers/appRouter'
import UserList from './components/users/userList';
import UserForm from './components/users/userForm';
import CompanyList from './components/companies/companyList';
import CompanyForm from './components/companies/companyForm';

function App() {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);

  const addCompany = (company) => {
    setCompanies([...companies, company]);
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <div className="container">
            <h1>Gestión de Empresas y Usuarios</h1>
            <CompanyForm agregarEmpresa={addCompany} />
            <CompanyList empresas={companies} />
            <UserForm empresas={companies} agregarUsuario={addUser} />
            <UserList usuarios={users} />
      </div>
      <AppRouter>
      </AppRouter>
    </>
  )
}

export default App
