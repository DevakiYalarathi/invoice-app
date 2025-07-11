const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5002/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/invoice";
  } else {
    setMsg(`❌ ${data.msg || "Login failed"}`);
  }
};
