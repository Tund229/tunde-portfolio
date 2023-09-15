import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
      id="home"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hello , je m'appelle
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Tundé GOUNON{" "}
        <span className="text-textDark mt-2 lgl:mt-4">Un passionné</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[665px] text-textDark font-medium"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cum. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nam, incidunt!
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className=" w-52 h-14 rounded-md text-textGreen text-sm border tracking-wide border-textGreen hover:bg-hoverColor duration-300"
      >
        Check out my Projets
      </motion.button>
    </section>
  );
};

export default Banner;
