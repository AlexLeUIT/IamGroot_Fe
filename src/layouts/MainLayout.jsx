import Navbar from '../components/Navbar.jsx';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer.jsx';
const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Navbar/>
        <Outlet/>
        //<Footer/>
    </div>
  )
}

export default MainLayout


