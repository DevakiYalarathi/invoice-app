import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState<"register" | "login" | "dashboard">("login");

  const token = localStorage.getItem("token");

  if (token && page !== "dashboard") {
    setPage("dashboard");
  }

  return (
    <div>
      {page === "register" && <Register />}
      {page === "login" && <Login />}
      {page === "dashboard" && <Dashboard />}
      <br />
      {page !== "dashboard" && (
        <>
          <button onClick={() => setPage("register")}>Go to Register</button>
          <button onClick={() => setPage("login")}>Go to Login</button>
        </>
      )}
    </div>
  );
}

export default App;
