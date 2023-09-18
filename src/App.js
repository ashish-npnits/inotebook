import './App.css';
import NavBar from './pages/components/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';
import NoteState from './context/notes/noteState';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <NoteState>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </NoteState> 
  );
}

export default App;
