import { useEffect, useState } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Recipe Sharing Platform 🍽️
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

             <Link to={`/recipe/${recipe.id}`}>
  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
    View Recipe
  </button>
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
