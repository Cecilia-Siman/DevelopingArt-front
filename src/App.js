import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home.js";
import Login from './pages/login/login.js';


function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;