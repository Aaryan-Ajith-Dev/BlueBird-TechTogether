import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    
    <div className="absolute w-[50%] inset-0"/>
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center gap-12`}
    >

      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Blue 
      </h2>
      <h1></h1>
      <h2 className=""></h2>
      <h2 className="font-extrabold -[24px] leading-[30.24px] text-white"></h2>
      <h2 className="font-extrabold -[24px] leading-[30.24px] text-white"></h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">About us</h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">Events</h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">login/signup</h2>
    </div>
  </motion.nav>
);


export default Navbar;
