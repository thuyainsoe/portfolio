// import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Transition = ({ children }) => {
  return (
    <>
      {children}
      {/* <motion.div
        className="side-in hidden lg:block"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="side-out hidden lg:block"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </>
  );
};

export default Transition;
