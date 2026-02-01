import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
