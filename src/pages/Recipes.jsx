import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";
import Filter from "../components/Filter";
import Input from "../components/Input";
import { GrEdit } from "react-icons/gr";
import { MdDelete, MdSaveAlt } from "react-icons/md";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

function Recipes()
{
  const {
    getData,
    deletePost,
    postData,
    putData,
    data,
    isPending,
    error,
  } = useDatabase();

  const [searchTerm, setSearchTerm] = useState("");
  const [prepFilter, setPrepFilter] = useState(null);
  const [cookFilter, setCookFilter] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() =>
  {
    getData("/");
  }, []);

  const filtered = (data || []).filter((item) =>
  {
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrep = prepFilter !== null ? item.prepMinutes <= prepFilter : true;
    const matchCook = cookFilter !== null ? item.cookMinutes <= cookFilter : true;
    return matchSearch && matchPrep && matchCook;
  });

  const handleEditClick = (recipe) =>
  {
    if (recipe.isDefault)
    {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    setEditId(editId === recipe.id ? null : recipe.id);
  };

  const handleEditSubmit = (e, recipe) =>
  {
    e.preventDefault();
    const form = e.target;

    const updated = {
      ...recipe,
      title: form.title.value,
      overview: form.overview.value,
      image: {
        small: form.imageSmall.value,
        large: form.imageSmall.value,
      },
      prepMinutes: Number(form.prepMinutes.value),
      cookMinutes: Number(form.cookMinutes.value),
    };

    putData(`/${recipe.id}`, updated);
    setEditId(null);
  };

  const handleAddRecipe = (e) =>
  {
    e.preventDefault();
    const form = e.target;

    const newRecipe = {
      title: form.title.value,
      slug: form.slug.value,
      overview: form.overview.value,
      prepMinutes: Number(form.prepMinutes.value),
      cookMinutes: Number(form.cookMinutes.value),
      image: {
        small: form.imageSmall.value,
        large: form.imageSmall.value,
      },
      servings: Number(form.servings.value),
      ingredients: form.ingredients.value.split(",").map((i) => i.trim()),
      instructions: form.instructions.value.split(",").map((i) => i.trim()),
      isDefault: false,
    };

    postData("/", newRecipe);
    form.reset();
    setShowAddForm(false);
  };

  // Loading holati
  if (isPending)
  {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }
  return (
    <main className="container mx-auto pl-3 pr-3 max-w-[1350px]">
      <div className="flex flex-col md:items-center items-start">
        <p className="lg:text-2 md:text-center md:text-1-tablet text-2-mobile leading-1 font-extrabold text-neutral-900 pt-16">
          Explore our simple, healthy recipes
        </p>
        <p className="text-6 font-medium md:text-center max-w-[727px]  pt-4 pb-8">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>

      {showWarning && (
        <div className="sticky top-20 mx-auto w-[90%] max-w-md rounded-xl bg-red-100 border border-red-400/50 text-red-700 px-4 py-3 shadow-lg animate-bounce">
          <p className="text-sm">Faqat o'z retseptlaringizni tahrirlashingiz mumkin.</p>
          <p className="text-sm">Only your recipes can be edited.</p>
        </div>
      )}
      <div className="flex sm:justify-between mb-4 items-start max-[728px]:flex-col max-sm:justify-center max-[728px]:space-y-2">
        <Filter onPrepChange={setPrepFilter} onCookChange={setCookFilter} />
        <Input onChange={setSearchTerm} />
      </div>

      <div className="grid gap-8 min-[1200px]:grid-cols-3 max-[1200px]:grid-cols-2 max-lg:grid-cols-1">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="p-2 bg-neutral-0 rounded-md">
            {recipe.image?.small && (
              <img
                src={recipe.image.small}
                alt={recipe.title}
                className="w-full lg:h-[320px] max-lg:aspect-[7/5] max-sm:aspect-[7/6] object-cover rounded mb-1"
              />
            )}
            <div className="p-2">
              <h2 className="line-clamp-1 text-5 font-bold text-neutral-900">{recipe.title}</h2>
              <p className="line-clamp-1 mb-2 text-9 font-medium ">{recipe.overview}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 pt-1">
                  <img src="/images/icon-servings.svg" alt="Servings" />
                  <p>Servings: {recipe.servings}</p>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/images/icon-prep-time.svg" alt="time" />
                  <p>Prep: {recipe.prepMinutes} min</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <img src="/images/icon-prep-time.svg" alt="time" />
                  <p>Cook: {recipe.cookMinutes} min</p>
                </div>
                <div className="space-x-3">
                  {!recipe.isDefault && (
                    <button
                      onClick={() => deletePost(`/${recipe.id}`, recipe.id)}
                      className="px-1 py-1 rounded-full bg-red-600 text-neutral-0 cursor-pointer text-sm">
                      <MdDelete />
                    </button>
                  )}
                  <button
                    onClick={() => handleEditClick(recipe)}
                    className={`px-1 py-1 rounded-full ${recipe.isDefault
                      ? "bg-neutral-300 cursor-not-allowed text-neutral-0"
                      : "bg-neutral-300 text-neutral-900 cursor-pointer"
                      }`}>
                    <GrEdit />
                  </button>
                </div>
              </div>
            </div>
            <Link
              to={`/recipe/${recipe.id}`}>
              <button className="w-full cursor-pointer py-3 bg-neutral-900 rounded-full text-neutral-0 text-sm">
                View Recipe
              </button>
            </Link>


            {/*  */}
            {editId === recipe.id && (
              <div className="relative z-99999 w-full">
                <form
                  onSubmit={(e) => handleEditSubmit(e, recipe)}
                  className="absolute top-0 left-0 right-0 bg-neutral-0 p-4 grid gap-2 text-sm z-9999 rounded shadow-lg">
                  <input name="title" defaultValue={recipe.title} className="p-2 border rounded" />
                  <input name="overview" defaultValue={recipe.overview} className="p-2 border rounded" />
                  <input name="servings" type="number" defaultValue={recipe.servings} className="p-2 border rounded" />
                  <input type="text" name="imageSmall" defaultValue={recipe.image} required className="p-2 border rounded" />
                  <input name="prepMinutes" type="number" defaultValue={recipe.prepMinutes} className="p-2 border rounded" />
                  <input name="cookMinutes" type="number" defaultValue={recipe.cookMinutes} className="p-2 border rounded" />
                  <div className="flex gap-2">
                    <button type="submit" className="px-3 py-1 bg-green-600 cursor-pointer text-neutral-0 rounded" >
                      <MdSaveAlt className="inline-block"/> Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditId(null)}
                      className="px-3 py-1 bg-gray-400 text-neutral-0 rounded cursor-pointer">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}


          </div>
        ))
        }
      </div >

      {/* Add Recipe Form */}
      < div className="mt-10" >
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="mb-4 btn  cursor-pointer">
          {showAddForm ? "Cancel" : (
            <span className="flex items-center gap-1">
              <FaPlus className="text-green-400" /> Add New Recipe
            </span>
          )}

        </button>

        {
          showAddForm && (
            <form
              onSubmit={handleAddRecipe}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 p-4 border rounded bg-neutral-0">
              <input type="text" name="title" placeholder="Title" required className="p-2 border rounded" />
              <input type="text" name="slug" placeholder="e.g. pasta-salad" required className="p-2 border rounded" />
              <input type="text" name="overview" placeholder="Brief description" required className="p-2 border rounded" />
              <input type="number" name="prepMinutes" placeholder="Prep Minutes" required className="p-2 border rounded" />
              <input type="number" name="cookMinutes" placeholder="Cook Minutes" required className="p-2 border rounded" />
              <input type="text" name="imageSmall" placeholder="Image URL (small)" required className="p-2 border rounded" />
              <input type="number" name="servings" placeholder="Servings " required className="p-2 border rounded col-span-full" />
              <textarea name="ingredients" placeholder="e.g. flour, sugar, eggs" required className="p-2 border rounded col-span-full" />
              <textarea name="instructions" placeholder="e.g. Mix all ingredients, bake for 20 minutes..." required className="p-2 border rounded col-span-full" />
              <button type="submit" className="col-span-full px-4 py-2 btn text-neutral-0 rounded">
                <FaCheckCircle /> Add Recipe
              </button>
            </form>
          )
        }
      </div >
    </main >
  );
}

export default Recipes;