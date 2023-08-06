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
            <div className="tile">
            <p style={{transform: 'translate(-150%, -40%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Parade </p>
            <p style={{transform: 'translate(-106%, 40%)',fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Invite participants and allies to march together in support of equal rights and inclusivity. </p>
                <img src="https://images.unsplash.com/photo-1573339584805-6ed85958b6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-120%, 600%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Festival </p>
            <p style={{transform: 'translate(-106%, 200%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Host a lively outdoor festival with food vendors, live music, dance performances, and activities that celebrate LGBTQ+ culture. </p>
                <img src="https://images.unsplash.com/photo-1581612129334-551ccd069e62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(130%, 350%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> LGBTQ+ Panel Discussions </p>
            <p style={{transform: 'translate(133%, 120%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}>  Invite LGBTQ+ activists, community leaders, and experts to participate in panel discussions on relevant topics, such as LGBTQ+ history, rights, and challenges faced by the community. </p>

                <img src="https://images.unsplash.com/photo-1624789391504-2aa44eb66a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(400%, 380%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Drag Show </p>
            <p style={{transform: 'translate(126%, 240%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Organize a fabulous drag show featuring local drag queens and kings to entertain and celebrate self-expression and creativity. </p>

                <img src="https://images.unsplash.com/photo-1628538060442-0e54be1d2497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(50%, -400%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> LGBTQ+ Film Screening: </p>
            <p style={{transform: 'translate(2%, -170%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Screen LGBTQ+ films, documentaries, or short films that highlight the struggles, achievements, and stories of the LGBTQ+ community. </p>

                <img src='https://images.unsplash.com/photo-1624979641604-f01368fab830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-120%, 640%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Art Exhibition </p>
            <p style={{transform: 'translate(-106%, 300%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"55%", textAlign:'justify',}}> Showcase artwork created by LGBTQ+ artists or pieces that explore LGBTQ+ themes to foster appreciation for queer art and expression. </p>

                <img src="https://plus.unsplash.com/premium_photo-1688754799612-cc8e8518d78c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-120%, 240%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Resource Fair </p>
            <p style={{transform: 'translate(-106%, 90%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"40%", textAlign:'justify',}}> Host a resource fair where various LGBTQ+ organizations and support groups can provide information and services to the community. </p>

                <img src="https://images.unsplash.com/photo-1564694457547-6ea79902e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-134%, -40%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Workshops </p>
            <p style={{transform: 'translate(-106%, 40%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> LGBTQ+ sensitivity, allyship, mental health, and other relevant topics to promote understanding and inclusivity. </p>

                <img src="https://images.unsplash.com/photo-1622945931125-5b8ab394fa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-124%, 10%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Sports Event </p>
            <p style={{transform: 'translate(-106%, 50%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"60%", textAlign:'justify',}}> Organize friendly sports competitions for the LGBTQ+ community and allies, such as a soccer tournament, volleyball games, or a fun run. </p>

                <img src="https://images.unsplash.com/photo-1617690032354-34273b431955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-100%, -170%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Drag Queen/King Story Hour </p>
            <p style={{transform: 'translate(-110%, -35%)', fontSize:"1vw", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> A storytelling event where drag queens and kings read stories to children, promoting the importance of acceptance and diversity from an early age. </p>

                <img src="https://images.unsplash.com/photo-1571235369907-7c3f046d4877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(114%, 0%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> LGBTQ+ History Exhibition </p>
            <p style={{transform: 'translate(140%, 40%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> An interactive exhibit showcasing significant moments and figures from LGBTQ+ history to educate attendees about the community's journey. </p>

                <img src="https://images.unsplash.com/photo-1530194884744-71a772b44290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(50%, 700%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Fashion Show </p>
            <p style={{transform: 'translate(10%, 520%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Fashion show featuring local designers and LGBTQ+-themed clothing to celebrate individuality and style. </p>

                <img src="https://images.unsplash.com/photo-1624789391564-2180d0eb50d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGxnYnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(-110%, 65%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Volunteer Day </p>
            <p style={{transform: 'translate(-106%, 60%)', fontSize:"1vw", lineHeight:"95%",position:"absolute", textAlign:'justify',}}> Encourage community members to volunteer together to support LGBTQ+-focused charities or local organizations that champion LGBTQ+ causes. </p>

                <img src="https://images.unsplash.com/photo-1561057160-ce83b1bd72f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGdidHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </div>
            <div className="tile">
            <p style={{transform: 'translate(114%, 40%)', fontSize:"1.2vw", fontWeight: 'bold',position:"absolute"}}> Pride Open Mic Night </p>
            <p style={{transform: 'translate(144%, 50%)', fontSize:"1vw", lineHeight:"95%",position:"absolute",width:"80%", textAlign:'justify',}}> Open mic night where LGBTQ+ individuals can share their talents, be it singing, spoken word, poetry, or comedy, in a supportive and inclusive environment. </p>

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
