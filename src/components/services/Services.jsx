import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
            <article className="service">
    <div className="service__head">
        <h3>UI/UX Design</h3>
    </div>
    <ul className="service__list">
        <li>
            <BiCheck className='service__list-icon' />
            <p>Experienced in designing responsive and user-friendly websites, including eCommerce platforms like Amazon and Alibaba.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Skilled in developing style guides, wireframes, and prototypes for consistent UI/UX across applications.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Proficient in conducting user research and iterative testing to refine designs for optimal user experience.</p>
        </li>
    </ul>
</article>

                {/*END OF UI/UX */}
                <article className="service">
    <div className="service__head">
        <h3>WEB DEVELOPMENT</h3>
    </div>
    <ul className="service__list">
        <li>
            <BiCheck className='service__list-icon' />
            <p>Skilled in front-end development using HTML, CSS, JavaScript, and responsive design techniques.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Experienced with frameworks and tools like Bootstrap, React, React Router, and Git/GitHub.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Focused on creating user-friendly, scalable, and secure web applications.</p>
        </li>
    </ul>
</article>
                {/*WEB DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                    <h3>Researcher</h3>
    </div>
    <ul className="service__list">
        <li>
            <BiCheck className='service__list-icon' />
            <p>Specializing in image processing, machine learning, and generative AI to solve real-world challenges.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Focused on applying self-attention and multi-head attention mechanisms to enhance deep learning models, especially in computer vision.</p>
        </li>
        <li>
            <BiCheck className='service__list-icon' />
            <p>Developing practical AI solutions in fields like healthcare, agriculture, and security, to improve everyday life.</p>
        </li>
    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services
