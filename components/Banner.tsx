import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-12"
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-4xl font-titleFont font-semibold flex flex-col"
      >
        Tundé GOUNON,
        <span className="text-textDark mt-2 lgl:mt-4">
          Un passioné du code💻
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Je suis un développeur web et mobile avec plus d'un an d'expérience dans
        le domaine de la programmation. Bienvenue sur mon portfolio, où je
        partage ma passion pour la création d'applications web et mobiles.
        Explorez mon travail et n'hésitez pas à me contacter pour discuter de
        collaborations potentielles.
      </motion.p>
      <a href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Mes projets
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
