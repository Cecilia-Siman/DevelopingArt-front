import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Canvas from "./pages/canvas/canvas.js";
import Login from './pages/login/login.js';
import SignUp from './pages/signup/signup.js';

function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Canvas />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;