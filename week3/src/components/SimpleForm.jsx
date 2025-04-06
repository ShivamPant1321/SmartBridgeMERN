import { useState } from "react";


function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };
  return (
    <form className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Submit Form</h2>
      <input
        type="text"
        className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="mt-4 bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition-all duration-300">Submit</button>
    </form>
  );
}

export default SimpleForm;
