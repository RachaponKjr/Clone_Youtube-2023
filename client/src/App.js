
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navber from './Pages/Navber/Navber';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navber/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
