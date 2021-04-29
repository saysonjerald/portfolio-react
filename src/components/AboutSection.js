import React from 'react';
import {motion} from 'framer-motion';

//Image
import home1 from '../img/home1.png';
import Wave from './Wave';
//Styled
import {About, Description, Image, Hide } from '../styles';
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2 >
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
                <motion.p variants={fade}>Contract us for  any hotography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contacts Us</motion.button>
            </Description>
            <Image >
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection; 