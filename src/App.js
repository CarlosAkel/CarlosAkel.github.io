
import UrlShort from './components/UrlShort';
import ShowUrl from './components/ShowUrl';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LoggedPage from './components/LoggedPage';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlShort />} />
          <Route path="/show" element={<ShowUrl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/urls" element={<LoggedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
