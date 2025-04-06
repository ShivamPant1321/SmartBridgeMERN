function CustomButton() {
  return (
    <button
      className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}

export default CustomButton;
