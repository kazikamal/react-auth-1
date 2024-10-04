
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='container mx-auto min-h-screen p-10'>
                <Outlet/>
            </div>
        </div>
    );
};

export default LoginLayout;