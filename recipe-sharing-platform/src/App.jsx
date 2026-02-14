import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail"; // Make sure the spelling and capitalization match the file exactly
import AddRecipeForm from "./components/AddRecipeForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/add" element={<AddRecipeForm />} />

      </Routes>
    </Router>
  );
}

export default App;
