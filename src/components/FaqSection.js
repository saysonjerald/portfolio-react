import React from "react";
import styled from 'styled-components';
import {AnimateSharedLayout} from 'framer-motion';

import {About} from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis.</p>
                    </div>
                </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis.</p>
                    </div>
                </div>
                </Toggle>
                <Toggle title="Diferent Payment Methods">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis.</p>
                    </div>
                </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis.</p>
                    </div>
                </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span: {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection