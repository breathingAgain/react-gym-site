import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import Login from "./Pages/LoginPage"
import Register from './Pages/RegisterPage';
import { Provider } from 'react-redux';
import {store} from "./store"
import Home from "./Pages/Home"
import Schedule from "./Pages/Schedule"
import About from "./Pages/About"
import Album from "./Pages/Album"
import SignUp from "./Pages/RegisterPage"


function App() {
  return (
    <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/album" element={<Album />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Register/>}/>
          </Routes>
          </Provider>
        </Router>
  );
}


export default App;
