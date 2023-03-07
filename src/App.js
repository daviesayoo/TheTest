import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaHome, FaCog, FaCode, FaLightbulb, FaMoon } from "react-icons/fa";


// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(
    localStorage.getItem("menuOpen") === "true" || false
  );
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("isDarkTheme") === "true" || false
  );
  const [buttonCount, setButtonCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    localStorage.setItem("menuOpen", !isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
  };

  const addButton = () => {
    setButtonCount(buttonCount + 1);
    setMessages([...messages, `Button ${buttonCount + 1} added`]);
  };

  const handleButtonClick = (buttonNumber) => {
    setMessages([...messages, `Button ${buttonNumber} clicked`]);
  };

  const handleMessageSend = () => {
    if (inputValue) {
      setMessages([...messages, `Message Sent: ${inputValue}`]);
      setInputValue("");
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Router>
      <div className="app">
        <nav className="topbar">
          <div className="topbar-left">
            <Link to="/">
              <h1>Pioneering Programmers Test App</h1>
            </Link>
          </div>
          <div className="topbar-right">
            <button className="toggle-theme" onClick={toggleTheme}>
              {isDarkTheme ? (
                <>
                  <FaLightbulb /> Set Light Theme
                </>
              ) : (
                <>
                  <FaMoon /> Set Dark Theme
                </>
              )}
            </button>
            <button className="toggle-menu" onClick={toggleMenu}>
              {isMenuOpen ? <FaCog /> : <FaCode />}
            </button>
          </div>
        </nav>
        <div>

        <div className="content"> 
              {isMenuOpen && ( 
                  <aside className="menu"> 
              <ul> 
                <li> <Link to="/page1"> <FaHome /> {isMenuOpen} </Link>  </li> </ul> </aside> )}

        </div>



        </div>
      </div>
    </Router>
  );
}

export default App;
