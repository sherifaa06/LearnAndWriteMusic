import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./assets/components/navbar.jsx";
import Namefield from "./assets/components/Login.jsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Namefield />

      <h2>{message}</h2>
    </>
  );
}

export default App;