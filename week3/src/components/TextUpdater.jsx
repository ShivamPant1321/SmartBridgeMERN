import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Live Text Updater</h2>
      <input
        type="text"
        className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-lg text-gray-700">You typed: <span className="font-semibold">{text}</span></p>
    </div>
  );
}

export default TextUpdater;