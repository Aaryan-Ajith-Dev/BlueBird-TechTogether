import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../pages';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


const Events = () => {
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;
  
    const gallery = document.getElementById("gallery");
    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;
  
    const panX = maxX * xDecimal * -1;
    const panY = maxY * yDecimal * -1;
  
    gallery.animate(
      { transform: `translate(${panX}px, ${panY}px)` },
      { duration: 8000, fill: "forwards", transition: 'transform 8s ease' }
    );
  };
  const snap  = useSnapshot(state);
  const handleClick = () => {
    state.intro = true;
  };

  return (
    <AnimatePresence>
      {!snap.intro &&(
        <motion.div
        key="modal"
      >
        <div id="gallery" onMouseMove={handleMouseMove}>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1573339584805-6ed85958b6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1581612129334-551ccd069e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1624789391504-2aa44eb66a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1628538060442-0e54be1d2497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src='https://images.unsplash.com/photo-1624979641604-f01368fab830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'/>
            </div>
            <div class="tile">
                <img src="https://plus.unsplash.com/premium_photo-1688754799612-cc8e8518d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1564694457547-6ea79902e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1622945931125-5b8ab394fa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1617690032354-34273b431955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1571235369907-7c3f046d4877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1530194884744-71a772b44290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1624789391564-2180d0eb50d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div class="tile">
                <img src="https://images.unsplash.com/photo-1587586062323-836089e60d52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
        </div>
        <div className='event-btn' onClick={handleClick}>
            Return
        </div>
      </motion.div>
      )}
      </AnimatePresence>
  );
};

export default Events;
