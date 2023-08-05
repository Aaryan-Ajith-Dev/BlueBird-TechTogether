import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { shoe} from '../assets';


const About = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      height: 140,
      width: 140,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
    },
    icon: {
      height: 80,
      width: 166,
      x: mousePosition.x - 50,
      y: mousePosition.y - 40,
      borderRadius: "0",
      mixBlendMode: "difference",
    },
    head: {
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      mixBlendMode: "difference",
      zIndex: "1",
    },
    img:{
      x: mousePosition.x - 230,
      y: mousePosition.y - 180,
      borderRadius: 0,  //make it rectangle
      height: 360,
      width: 460,
    },
  };

  const textEnter = () => {
    const topView = document.querySelector('#top-view');
    if (topView) {
        topView.style.visibility = 'hidden';
      }
  };

  const textLeave = () => {
    const topView = document.querySelector('#top-view');
    if (topView) {
      topView.style.visibility = 'visible';
    }
  };

  const headEnter = () => setCursorVariant("head");
  const iconEnter = () => setCursorVariant("icon");
  const Leave = () => setCursorVariant("default");

  return (
    <div className="about" style={{ background: '#AE46FF' }}>
      <div className="signUp" style={{ color: "#141414" }} onMouseEnter={headEnter} onMouseLeave={Leave}>About Us</div>
      <div className='ig-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <Icon icon="ion:logo-instagram" color="#141414" />
        </div>
        <h2 className='icon-txt'>Follow to get updates</h2>
      </div>
      <div className='go-icon'>
        <div style={{ transform: 'scale(2.5)' }} onMouseEnter={iconEnter} onMouseLeave={Leave}>
          <Icon icon="ion:logo-google" color="#141414" />
        </div>
        <h2 className='icon-txt2'>Fill this survey</h2>
      </div>

      <motion.div
        className='cursor'
        variants={variants}
        initial="default"
        animate={cursorVariant} />

      <div id='top-view' onMouseEnter={textEnter} onMouseLeave={textLeave} className='text-side'>      
        <p>Our vision is rooted in the belief that every person has the right to live authentically, free from discrimination and prejudice. We envision a world where diversity is celebrated as a strength, where individuals are encouraged to be true to themselves, and where unity and understanding prevail over ignorance and hatred.</p>
      </div>
      
      <div id='bottom-view' className='text-side'>
        <p>One of the cornerstones of our organization is our unwavering commitment to the LGBTQ+ community. We stand in solidarity with LGBTQ+ individuals and their allies, advocating for their rights and well-being. Through awareness campaigns, educational initiatives, and support programs, we strive to create a safe and nurturing environment for the LGBTQ+ community to thrive..</p>
      </div>

      <img src={shoe} alt="Product-Image" className='abt-img'></img>
      <p className='abt-hid-text'>  COUPON: QTP140D </p>

    </div>
  );
};

export default About;
