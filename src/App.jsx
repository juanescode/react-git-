import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barcelona from "./components/barcelona/barcelona";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Barcelona />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
