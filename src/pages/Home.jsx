import { motion } from "framer-motion";

function Home() {
  return (
    <main>
      {/* Hero section */}
      <div className="bg-[url('./images/pattern-squiggle-1.svg')] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto pl-3 pr-3 md:pl-8 md:pr-8 max-w-[1350px] flex flex-col md:items-center max-md:items-start">

          {/* Title */}
          <motion.p
            className="lg:text-1 md:text-1-tablet text-1-mobile leading-1 font-extrabold text-neutral-900 pt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="relative">
              Healthy{" "}
              <span className="absolute md:-left-1 md:right-3 md:bottom-3 md:top-12 right-2 left-0 bottom-2 top-8 rounded-sm -z-99 bg-orange-500/40"></span>
            </span>
            meals, zero fuss
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-6 max-w-[610px] md:text-center pt-4 pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </motion.p>

          {/* Button */}
          <motion.button
            className="btn px-8 py-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Start exploring
          </motion.button>

          {/* Hero image */}
          <motion.div
            className="rounded-xl border-8 border-white my-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-xl"
              src="./images/image-home-hero-large.webp"
              alt="image-home-hero-large"
            />
          </motion.div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto pl-3 pr-3 max-w-[1350px] md:pl-8 md:pr-8">
        <motion.p
          className="text-center text-2 font-extrabold pb-10 max-md:text-2-mobile text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What you’ll get
        </motion.p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 sm:pb-20 pb-14">
          {[
            {
              icon: "./images/icon-whole-food-recipes.svg",
              title: "Whole-food recipes",
              desc: "Each dish uses everyday, unprocessed ingredients.",
            },
            {
              icon: "./images/icon-minimum-fuss.svg",
              title: "Minimum fuss",
              desc: "All recipes are designed to make eating healthy quick and easy.",
            },
            {
              icon: "./images/icon-search-in-seconds.svg",
              title: "Search in seconds",
              desc: "Filter by name or ingredient and jump straight to the recipe you need.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-neutral-0 h-14 w-14 flex items-center justify-center rounded-xl">
                <img src={item.icon} alt={item.title} />
              </div>
              <p className="text-3 font-bold text-neutral-900 pt-6 pb-3">
                {item.title}
              </p>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="sm:border-t border-black/20">
        <div className="container mx-auto pl-3 pr-3 sm:pt-16 max-w-[1350px]">
          <motion.div
            className="flex items-center gap-10 max-xl:flex-col "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="md:text-2 text-2-mobile pb-5 font-extrabold text-neutral-900">
                Built for real life
              </p>
              <p>
                Cooking shouldn’t be complicated. These recipes come in under
                <span className="relative font-bold">
                  30 minutes{" "}
                  <span className="absolute right-1 left-0 bottom-1 top-3 rounded-sm -z-99 bg-orange-500"></span>
                </span>
                of active time, fit busy schedules, and taste good enough to
                repeat.
              </p>
              <br />
              <p>
                Whether you’re new to the kitchen or just need fresh ideas,
                we’ve got you covered.
              </p>
            </div>

            <motion.img
              className="rounded-2xl md:mb-16 mb-14"
              src="images/image-home-real-life-small.webp"
              alt="image-home-real-life-small"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto pl-3 pr-3 max-w-[1350px]">
      <motion.div
        className="bg-neutral-200 lg:py-24 py-11 -z-30 text-center rounded-2xl relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="z-50">
          <motion.p
            className="md:text-2 text-2-mobile font-extrabold text-neutral-900"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to cook smarter?
          </motion.p>

          <motion.p
            className="pt-2.5 pb-8 font-medium text-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </motion.p>

          <motion.button
            className="btn px-6 font-bold text-7"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Browse recipes
          </motion.button>
        </div>

        <motion.div
          className="absolute left-0 bottom-0 -z-10 sm:flex hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img className="max-lg:w-40" src="/images/pattern-fork.svg" alt="pattern-fork" />
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 -z-10 sm:flex hidden"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <img className="max-lg:w-40" src="/images/pattern-knife.svg" alt="pattern-knife" />
        </motion.div>
      </motion.div>

      </div>
    </main>
  );
}

export default Home;
