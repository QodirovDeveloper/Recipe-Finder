import RecipeCard from "./RecipeCard";
import staticRecipes from "../../data/staticRecipes";

function StaticRecipes() {
  return (
    <div>
      <h2 className="">Statik Retseptlar</h2>
      <div className="grid">
        {staticRecipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default StaticRecipes;
