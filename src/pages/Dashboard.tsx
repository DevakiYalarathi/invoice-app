import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}

const Dashboard = () => {
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: DecodedToken = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Welcome {user?.name} 🎉</h2>
      <p>Email: {user?.email}</p>
      <p>User ID: {user?.id}</p>
    </div>
  );
};

export default Dashboard;
 
