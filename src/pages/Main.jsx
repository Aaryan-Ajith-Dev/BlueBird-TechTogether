import React from 'react'
import { About, EventH, Form } from '../components';
import state from '.';
import {useSnapshot} from "valtio";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Main = ()=> {
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
    <div id="events">
        <div className="side">
            <h1 className='ev-title'>Events</h1>
        </div>
        <EventH handleClick={()=> state.intro = false} />
        <Form/>
        <About/>
    </div>
    </motion.div>
    )}
    </AnimatePresence>
  );
};

export default Main