import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../utils";
import { motion } from "framer-motion";

function Recipe()
{
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() =>
  {
    axiosInstance
      .get(`/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-500 text-center mt-8">❌ {error}</p>;
  if (!recipe)
    return (
      // <p className="animate-pulse text-gray-500 text-center mt-8">Loading...</p>
      <div className="container mx-auto max-w-[1350px] mt-20 pl-3 pr-3">
        <div className="skeleton  border border-black/25 mb-2 h-[20px] w-[300px]"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <div className="skeleton  border border-black/25 h-[580px] w-full"></div>
          </div>
          <div className="space-y-4">
            <div className="skeleton  border border-black/25 h-[110px] w-full"></div>
            <div className="skeleton  border border-black/25 h-[40px] w-full"></div>
            <div className="skeleton  border border-black/25 h-[30px] w-full"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[300px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-full"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-full"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[300px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[300px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>
            <div className="skeleton  border border-black/25 h-[20px] w-[200px]"></div>

          </div>
        </div>
      </div>

    );

  return (
    <>
      <div className="container mx-auto max-w-[1350px] mt-10 pl-3 pr-3">
        <Link to={"/recipes"} className="text-neutral-900 font-semibold">
          <span className="text-neutral-500">Recipes / </span>
          {recipe.title}
        </Link>
      </div>
      <motion.div
        className="flex flex-col lg:flex-row gap-10 rounded-md overflow-hidden p-6 max-w-6xl mx-auto mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        {/* Responsive Picture */}
        <picture className="flex-1">
          <source
            media="(min-width:1024px)"
            srcSet={recipe.image?.large?.replace("./", "/")} />
          <source
            media="(min-width:640px)"
            srcSet={recipe.image?.medium?.replace("./", "/")} />
          <source
            media="(max-width:639px)"
            srcSet={recipe.image?.small?.replace("./", "/")} />
          <img
            src={recipe.image?.large?.replace("./", "/")}
            alt={recipe.title}
            className="w-full h-full object-cover rounded-md" />
        </picture>

        {/* Content */}
        <motion.div
          className="flex flex-col gap-6 flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-3xl font-bold text-gray-800">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.overview}</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              <img src="/images/icon-servings.svg" width={19} height={20} alt="servings" />
              Serving: {recipe.servings}
            </span>
            <span className="flex items-center gap-2">
              <img src="/images/icon-prep-time.svg" width={19} height={20} alt="prep" />
              Prep: {recipe.prepMinutes} min
            </span>
            <span className="flex items-center gap-2">
              <img src="/images/icon-cook-time.svg" width={19} height={20} alt="cook" />
              Cook: {recipe.cookMinutes} min
            </span>
          </div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Ingredients:</h3>
            <ul className="space-y-2">
              {recipe.ingredients?.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <img src="/images/icon-bullet-point.svg" alt="icon" className="mt-1" />
                  <p className="text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/*  */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Instructions:</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-600">
              {recipe.instructions?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Recipe;
