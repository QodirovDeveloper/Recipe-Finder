import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About()
{
  return (
    <main>
      {/* Mission */}
      <div className="container mx-auto pl-3 pr-3 max-w-[1350px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-center"
          >
            <span className="rounded-md bg-orange-500 px-1.5 font-bold text-5">
              Our mission
            </span>
            <p className="py-6 font-extrabold md:text-2 text-2-mobile leading-2 text-neutral-900">
              Help more people cook nourishing meals, more often.
            </p>
            <p>
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
              <br />
              <br />
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="/images/image-about-our-mission-large.webp"
            alt="image-about-our-mission-large"
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Why we exist */}
      <div className="border-t border-b border-black/20">
        <section className="container mx-auto pl-3 pr-3 max-w-[1350px] py-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Why we exist
            </h2>

            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Cut through the noise.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    The internet is bursting with recipes, yet most busy cooks
                    still default to take-away or packaged foods. We curate a
                    tight collection of fool-proof dishes so you can skip the
                    scrolling and start cooking.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Empower home kitchens.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    When you control what goes into your meals, you control how
                    you feel. Every recipe is built around unrefined ingredients
                    and ready in about half an hour of active prep.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Make healthy look good.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    High-resolution imagery shows you exactly what success looks
                    like—because we eat with our eyes first, and confidence
                    matters.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Our food philosophy */}
      <div className="border-t border-b border-black/20">
        <section className="container mx-auto pl-3 pr-3 max-w-[1350px] py-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8">
            <h2 className="text-3xl font-bold text-neutral-900">
              Our food philosophy
            </h2>

            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Whole ingredients first.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Fresh produce, grains, legumes, herbs, and quality fats form
                    the backbone of every recipe.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Flavor without compromise.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Spices, citrus, and natural sweetness replace excess salt,
                    sugar, and additives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    Respect for time.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Weeknight meals should slot into real schedules; weekend
                    cooking can be leisurely but never wasteful.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <img src="/images/icon-bullet-point.svg" alt="icon-bullet-point" />
                <div>
                  <h3 className="font-semibold text-4 mb-1">
                    Sustainable choices.
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    Short ingredient lists cut down on food waste and carbon
                    footprint, while plant-forward dishes keep things
                    planet-friendly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Beyond the plate */}
      <div className="container mx-auto pl-3 pr-3 sm:pt-16 max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center gap-10 max-xl:flex-col justify-between"
        >
          <div>
            <p className="md:text-2 text-2-mobile pb-5 font-extrabold text-neutral-900">
              Beyond the plate
            </p>
            <p className="pb-3">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>

            <div className="space-y-2">
              <p>• Encourage family dinners and social cooking.</p>
              <p>• Reduce reliance on single-use packaging and delivery waste.</p>
              <p>• Spark curiosity about seasonal produce and local agriculture.</p>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl md:mb-16 mb-14"
            src="images/image-about-beyond-the-plate-small.webp"
            alt="image-about-beyond-the-plate-small"
          />
        </motion.div>
      </div>
      <div className="container mx-auto pl-3 pr-3 max-w-[1350px]">
        <motion.div
          className="bg-neutral-200 lg:py-24 py-11 -z-30 text-center rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}>
          <div className="">
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

            <Link to="/recipes">
              <p className="btn px-6 font-bold text-7">
                Browse recipes
              </p>
            </Link>
          </div>
          <div className="relative">
            <motion.div
              className="absolute left-0 -bottom-16 max-[1095px]:hidden"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}>
              <img className="max-lg:w-40" src="/images/pattern-fork.svg" alt="pattern-fork" />
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="absolute -bottom-30 right-0 max-[1095px]:hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}>
              <img className="max-lg:w-40" src="/images/pattern-knife.svg" alt="pattern-knife" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

export default About;
