import React from 'react';
import {motion} from 'framer-motion';

//Image
import home1 from '../img/home1.png';
//Styled
import {About, Description, Image, Hide } from '../styles';

const titleAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 1}}
}

const container = {
    hidden: {x: 100},
    show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1, when:'beforeChildren'}}
}

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show" >We work to make</motion.h2 >
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contract us for  any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contacts Us</button>
            </Description>
            <Image >
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    )
}

export default AboutSection;