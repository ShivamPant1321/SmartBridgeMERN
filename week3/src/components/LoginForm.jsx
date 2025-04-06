import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Login</h2>
      <input
        type="email"
        className="border p-3 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-3 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition-all duration-300">Login</button>
    </form>
  );
}


export default LoginForm;
