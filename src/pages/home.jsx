import Hero from '../sections/hero';
import Navbar from '../sections/nav';
import state from '.';
import {useSnapshot} from "valtio";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


const Page = () => {
  const snap = useSnapshot(state);
  return (
  <AnimatePresence>
  {snap.intro &&(
            <motion.div
            key="modal"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.2 ,ease:'easeInOut'}} 
          >
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
  </div>
  </motion.div>)}
  </AnimatePresence>
  )
};

export default Page;
