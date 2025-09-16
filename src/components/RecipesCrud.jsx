import { useEffect, useState } from "react";
import useDatabase from "../hooks/useDatabase";

function RecipeCrud() {
  const { postData, getData, deletePost, data, isPending, error } =
    useDatabase();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    image: "",
    overview: "",
    servings: "",
    prepMinutes: "",
    cookMinutes: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ingredientsArray = formData.ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const newRecipe = {
      id: Date.now().toString(),
      ...formData,
      servings: Number(formData.servings),
      prepMinutes: Number(formData.prepMinutes),
      cookMinutes: Number(formData.cookMinutes),
      ingredients: ingredientsArray,
    };

    postData("/recipes", newRecipe);

    setFormData({
      title: "",
      slug: "",
      image: "",
      overview: "",
      servings: "",
      prepMinutes: "",
      cookMinutes: "",
      ingredients: "",
    });
  };

  useEffect(() => {
    getData("/recipes");
  }, []);

  return (
    <div>
      <button className="btn">sdaxedcxwe</button>
      <h1>Recipe Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key}
          />
        ))}
        <button type="submit" disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h2>Recipes</h2>
        <ul>
          {Array.isArray(data) &&
            data.map((r) => (
              <li key={r.id}>
                <h3>{r.title}</h3>
                <p>{r.overview}</p>
                <p>
                  <strong>Servings:</strong> {r.servings} |{" "}
                  <strong>Prep:</strong> {r.prepMinutes} min |{" "}
                  <strong>Cook:</strong> {r.cookMinutes} min
                </p>
                {r.image && <img src={r.image} alt={r.title} width="150" />}
                <p>
                  <strong>Ingredients:</strong> {r.ingredients.join(", ")}
                </p>
                <button onClick={() => deletePost(`/recipes/${r.id}`, r.id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeCrud;