import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !instructions) {
      setError("All fields are required");
      return;
    }

    const newRecipe = {
      id: Date.now(), // temporary ID
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions.split(".").map((s) => s.trim()).filter(Boolean),
      summary: instructions.split(".")[0] || "",
      image: "https://via.placeholder.com/150", // placeholder
    };

    console.log("New Recipe:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
    alert("Recipe submitted! Check console for details.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border rounded-lg p-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={3}
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Instructions (use periods to separate steps)
          </label>
          <textarea
            className="w-full border rounded-lg p-2"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
