
import React, { useState, useEffect } from "react";
import { FaHome, FaCog, FaCode, FaLightbulb, FaMoon } from "react-icons/fa";

function App() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [theme, setTheme] = useState("light");
  const [inputValue, setInputValue] = useState("");
  const [buttonCount, setButtonCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMenuCollapsed = localStorage.getItem("menuCollapsed");
    if (storedMenuCollapsed !== null) {
      setMenuCollapsed(storedMenuCollapsed === "true");
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("menuCollapsed", menuCollapsed);
    localStorage.setItem("theme", theme);
  }, [menuCollapsed, theme]);

  const handleToggleMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setButtonCount(0);
    setMessages([]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButton = () => {
    const newButtonCount = buttonCount + 1;
    setButtonCount(newButtonCount);
    setMessages([...messages, `Button ${newButtonCount} added`]);
  };

  const handleButtonClick = (buttonNumber) => {
    setMessages([...messages, `Button ${buttonNumber} clicked`]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, `Message sent: ${inputValue}`]);
    setInputValue("");
  };

  return (
    <div className="app">
      <header>
        <div className="top-bar">
          <h1>Pioneering Programmers Test App</h1>
          <button className="toggle-menu" onClick={handleToggleMenu}>
            {menuCollapsed ? (
              <i className="fas fa-bars" title="Expand Menu"></i>
            ) : (
              <i className="fas fa-times" title="Collapse Menu"></i>
            )}
          </button>
        </div>
        {!menuCollapsed && (
          <nav>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fas fa-home"></i>
                  <span>Page 1</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fas fa-info"></i>
                  <span>Page 2</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        <div className="left-side">
          <div className="buttons-container">
            <button className="toggle-theme" onClick={handleToggleTheme}>
              {theme === "light" ? "Set Dark Theme" : "Set Light Theme"}
            </button>
            <button className="add-button" onClick={handleAddButton}>
              Add Button {buttonCount + 1}
            </button>
            {[...Array(buttonCount)].map((_, index) => (
              <button
                key={`button-${index + 1}`}
                onClick={() => handleButtonClick(index + 1)}
              >
                Button {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;