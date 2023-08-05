import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-op-black`}
  >
    
    <div className="absolute w-[50%] inset-0"/>
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center gap-12`}
    >

      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Blue Bird
      </h2>
      <h1></h1>
      <h2 className=""></h2>
      <h2 className="font-extrabold -[24px] leading-[30.24px] text-white"></h2>
      <h2 className="font-extrabold -[24px] leading-[30.24px] text-white"></h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white"><a href='#' className='hover:text-slate-600 hover:text-base'>About us</a></h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white"><a href='#' className='hover:text-slate-600 hover:text-base'>Events</a></h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white"><a href='#' className='hover:text-slate-600 hover:text-base'>login/signup</a></h2>
    </div>
    <img src='../src/assets/blue-bird-logo.png' className='h-90 w-90'></img>
  </motion.nav>
);


export default Navbar;
