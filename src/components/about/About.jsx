import React, { useState } from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

// Import certificate images
import exp1 from '../../assets/experience1.jpg';
import exp2 from '../../assets/Experience2.jpg';
import exp3 from '../../assets/Experience3.jpg';
import exp4 from '../../assets/Experience4.jpg';
import exp5 from '../../assets/Experience5.jpg';
import exp6 from '../../assets/Experience6.jpg';
import exp7 from '../../assets/Experience7.jpg';
import exp8 from '../../assets/Experience8.jpg';
import exp9 from '../../assets/Experience9.jpg';
import exp10 from '../../assets/Experience10.jpg';
import exp11 from '../../assets/Experience11.jpg';
import exp12 from '../../assets/Experience12.jpg';
const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const certificateImages = [
        { img: exp1, caption: 'Certificate 1' },
        { img: exp2, caption: 'Certificate 2' },
        { img: exp3, caption: 'Certificate 3' },
        { img: exp4, caption: 'Certificate 4' },
        { img: exp5, caption: 'Certificate 5' },
        { img: exp6, caption: 'Certificate 6' },
        { img: exp7, caption: 'Certificate 7' },
        { img: exp8, caption: 'Certificate 8' },
        { img: exp9, caption: 'Certificate 9' },
        { img: exp10, caption: 'Certificate 10' },
        { img: exp11, caption: 'Certificate 11' },
        { img: exp12, caption: 'Certificate 12' },
    ];

    const toggleCertificates = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About " />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                            <button className="btn btn-primary" onClick={toggleCertificates}>
                                Show Certificates
                            </button>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                            <a
                                href="https://github.com/NomanNehan17?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ padding: '4px 10px', fontSize: '12px' }}
                            >
                                Show Project
                            </a>
                        </article>
                    </div>
                    <p>
                        I am a passionate Computer Science and Engineering graduate from International Islamic University Chittagong, with strong leadership abilities and a keen interest in web design, development, and research.
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>
                </div>
            </div>

            {/* Modal Certificate Viewer */}
            {isModalOpen && (
                <div className='modal-overlay'>
                    <div className='modal-gallery'>
                        <button className='modal-close' onClick={closeModal}>Close</button>
                        {certificateImages.map((item, index) => (
                            <div key={index} className='modal-image-item'>
                                <img src={item.img} alt={`Certificate ${index + 1}`} />
                                <p className="image-caption">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default About;
