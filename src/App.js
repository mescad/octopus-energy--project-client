import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./components/Chart/Chart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Charts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
