
import '../css/inputUrl.css'
import '../css/button.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
import Cookies from "js-cookie";
function UrlShort() {

  const MAINURL = "https://short-url-chile.onrender.com"
  //const MAINURL = "http://localhost:8000"
  const [url, setUrl] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    //checkAuthenticationStatus();
  }, []);

  function checkAuthenticationStatus(popupWindow) {
    const interval = setInterval(() => {
      const bisc = Cookies.get("access_token");
      if (bisc) {
        popupWindow.close();
        clearInterval(interval);
        navigate('/urls');
      }
    }, 1000);
  }

  async function url_guest() {
    const formData = new FormData();
    formData.append('url', url);
    try {
      const response = await axios.post(`${MAINURL}/url/guest`, formData);
      localStorage.setItem("url", response.data.short_url)
      navigate('/show');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function go_to_login() {
    navigate('/login')
  }
  async function go_to_google_login() {
    const go = MAINURL + "/google/login"
    var popupWindow = window.open(go, "PopupWindow", "width=600,height=400");
    if (popupWindow) {
      popupWindow.focus();
      checkAuthenticationStatus(popupWindow);
    }
  }


  return (
    <div>
      <div className="url">
        <p>Shorten Your Url </p>
        <input placeholder="Your Url" className="url-input" name="url" type="url" onChange={(e) => setUrl(e.target.value)} />
        <br />
        <div className="submit-btn" onClick={url_guest} >SUBMIT</div>
      </div>

      <div className="card">
        <div>Here you can login and obtain the list of your Urls</div>
        <div></div>
        <div className="login-container">
          <button className='button_class' onClick={go_to_login}>
            Login
          </button>
          <div>
            or
          </div>
          <GoogleIcon sx={{ fontSize: 50 }} className='login-google-icon' onClick={go_to_google_login} />
        </div>

      </div>
    </div>
  );
}

export default UrlShort;
