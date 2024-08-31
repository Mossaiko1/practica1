import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navBar';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Error404 from '../pages/error404';
import UserList from '../components/users/userList';
import UserForm from '../components/users/userForm';
import CompanyForm from '../components/companies/companyForm';
import CompanyList from '../components/companies/companyList';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar/>}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register/users" component={<UserForm/>} />
                <Route path="/users" element={<UserList />} />
                <Route path="/register/companies" component={<CompanyForm/>} />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;