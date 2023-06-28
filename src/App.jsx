import "./App.css";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contactpage";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import UserPage from "./pages/userpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
       
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
