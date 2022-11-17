import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import './Components/style/dark.scss';
import { DarkModeContext } from "./context/DarkModeContext";
import Home from "./pages/Home/Home";
function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? 'App dark':'App'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
