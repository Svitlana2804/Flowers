import './index.css'
import AppRoutes from './AppRoutes/AppRoutes';
import { ListCardProvider } from './component/ListCard/ListCard';
 
function App() {
  return (
    <ListCardProvider>
      <AppRoutes />
    </ListCardProvider>
  )
  }


export default App

