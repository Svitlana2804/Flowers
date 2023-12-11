import { Outlet } from 'react-router-dom'
import HeaderPage from '../composition/Header/HeaderPage'
import Footer from '../composition/Footer/Footer'
import Bunner from '../component/Bunner/Bunner'



const Layout= ({shop,favorite}) => {
    return (
<div className="g-layout">
      
      <HeaderPage shop={shop} favorite={favorite} />
      <Bunner />
      <main className="g-content">
      <Outlet/>
      </main>
      <Footer />
    </div>
    )
}

export default Layout