import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const [inputField, setInputField] = useState("");
  return (
    <div className="mainContainer">
      <div className="container">
        <SearchBar inputField={inputField} setInputField={setInputField} />
      </div>
    </div>
  );
}

export default App;
