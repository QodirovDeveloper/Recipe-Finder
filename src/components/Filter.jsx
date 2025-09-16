import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Filter({ onPrepChange, onCookChange })
{
  const [cookTime, setCookTime] = useState(null);
  const [prepTime, setPrepTime] = useState(null);
  const [openCook, setOpenCook] = useState(false);
  const [openPrep, setOpenPrep] = useState(false);

  // Cook
  const handleCookSelect = (time) =>
  {
    setCookTime(time);
    setOpenCook(false);
    onCookChange(time);
  };

  const handleCookClear = () =>
  {
    setCookTime(null);
    setOpenCook(false);
    onCookChange(null);
  };

  // Prep
  const handlePrepSelect = (time) =>
  {
    setPrepTime(time);
    setOpenPrep(false);
    onPrepChange(time);
  };

  const handlePrepClear = () =>
  {
    setPrepTime(null);
    setOpenPrep(false);
    onPrepChange(null);
  };

  return (
    <div className="flex gap-2 max-[728px]:flex-col ">
      {/* Cook Time Filter */}
      <div className="relative inline-block  max-[728px]:w-[298px]">
        <button
          className="min-[728px]:px-2 max-[728px]:px-14 py-2 border focus:border-neutral-900 focus-within:ring-1 border-gray-900/20 rounded-lg bg-white text-sm font-semibold flex items-center justify-between gap-2 cursor-pointer w-full"
          onClick={() => setOpenCook(!openCook)}
        >
          Max Cook Time
          <span
            className={`transition-transform duration-200 ${openCook ? "rotate-180" : ""
              }`}
          >
            <img src="./images/icon-chevron-down.svg" alt="" />
          </span>
        </button>

        <AnimatePresence>
          {openCook && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 bg-white border border-gray-900/20 rounded-lg w-52 shadow-md z-10 p-1"
            >
              {/* 0 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="cook-time"
                  value={0}
                  checked={cookTime === 0}
                  onChange={() => handleCookSelect(0)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                0 minutes
              </label>

              {/* 5 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="cook-time"
                  value={5}
                  checked={cookTime === 5}
                  onChange={() => handleCookSelect(5)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                5 minutes
              </label>

              {/* 10 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="cook-time"
                  value={10}
                  checked={cookTime === 10}
                  onChange={() => handleCookSelect(10)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                10 minutes
              </label>

              {/* 15 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="cook-time"
                  value={15}
                  checked={cookTime === 15}
                  onChange={() => handleCookSelect(15)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                15 minutes
              </label>

              {/* 20 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="cook-time"
                  value={20}
                  checked={cookTime === 20}
                  onChange={() => handleCookSelect(20)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                20 minutes
              </label>

              {/* Clear */}
              <div
                className="px-2 py-0.5 border-t rounded-b-md border-neutral-100 text-9 cursor-pointer hover:bg-gray-200"
                onClick={handleCookClear}
              >
                Clear
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Prep Time Filter */}
      <div className="relative inline-block max-[728px]:w-[298px]">
        <button
          className="min-[728px]:px-2 max-[728px]:px-14 py-2 border focus:border-neutral-900 focus-within:ring-1 border-gray-900/20 rounded-lg bg-white text-sm font-semibold flex items-center justify-between gap-2 cursor-pointer w-full"
          onClick={() => setOpenPrep(!openPrep)}
        >
          Max Prep Time
          <span
            className={`transition-transform duration-200 ${openPrep ? "rotate-180" : ""
              }`}
          >
            <img src="./images/icon-chevron-down.svg" alt="" />
          </span>
        </button>

        <AnimatePresence>
          {openPrep && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute mt-2 bg-white border border-gray-900/20 rounded-lg w-52 shadow-md z-10 p-1"
            >
              {/* 0 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="prep-time"
                  value={0}
                  checked={prepTime === 0}
                  onChange={() => handlePrepSelect(0)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                0 minutes
              </label>

              {/* 5 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="prep-time"
                  value={5}
                  checked={prepTime === 5}
                  onChange={() => handlePrepSelect(5)}
                  className="w-[18px] h-[18px] accent-neutral-900"
                />
                5 minutes
              </label>

              {/* 10 min */}
              <label className="flex items-center gap-2 px-2 py-2 cursor-pointer text-[15px] rounded-md hover:bg-gray-200">
                <input
                  type="radio"
                  name="prep-time"
                  value={10}
                  checked={prepTime === 10}
                  onChange={() => handlePrepSelect(10)}
                  className="w-[18px] h-[18px] accent-neutral-900 "
                />
                10 minutes
              </label>

              {/* Clear */}
              <div
                className="px-2 py-0.5 rounded-b-md border-t border-black/10 text-9 cursor-pointer hover:bg-gray-200"
                onClick={handlePrepClear}
              >
                Clear
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
