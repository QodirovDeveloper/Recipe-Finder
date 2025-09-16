import { motion } from "framer-motion";

function Footer()
{
  return (
    <footer className="container mx-auto pl-3 pr-3 max-w-[1350px]">

      <motion.div
        className="flex gap-6 items-center sm:justify-between max-sm:flex-col md:py-9 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="max-sm:hidden">Made with ❤️ and 🥑</p>
        <div className="flex items-center gap-6">
          <a href="#"><img src="/images/icon-instagram.svg" alt="icon-instagram" /></a>
          <a href="#"><img src="/images/icon-bluesky.svg" alt="icon-bluesky" /></a>
          <a href="#"><img src="/images/icon-tiktok.svg" alt="icon-tiktok" /></a>
        </div>
        <p className="sm:hidden">Made with ❤️ and 🥑</p>
      </motion.div>
    </footer>
  );
}

export default Footer;
