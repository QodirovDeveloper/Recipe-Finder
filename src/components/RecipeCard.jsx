// src/components/RecipeCard.jsx

function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
      <p className="text-sm mb-2">{recipe.overview}</p>

      {recipe.image && (
        <img
          src={typeof recipe.image === "string" ? recipe.image : recipe.image.small}
          alt={recipe.title}
          width="100px"
          className=" h-auto rounded mb-2"
        />
      )}

      <p className="text-sm mb-1">
        <strong>Servings:</strong> {recipe.servings}
      </p>

      {recipe.ingredients && (
        <p className="text-sm mb-2">
          <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
        </p>
      )}

      {onDelete && (
        <button
          onClick={() => onDelete(recipe.id)}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default RecipeCard;
