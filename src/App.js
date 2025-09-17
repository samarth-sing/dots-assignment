import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import "./dataPreview.css";

function App() {
  const [inputField, setInputField] = useState("");
  return (
    <div className="container">
      <SearchBar inputField={inputField} setInputField={setInputField} />
    </div>
  );
}

export default App;
