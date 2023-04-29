
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Video/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
