import React from 'react';
import './testimonials.css';
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpg';
import Avt4 from '../../assets/avatar4.jpg';
import Avt5 from '../../assets/avatar5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [

    {
        avatar: Avt1,
        name: 'Research Papers Awards',
        review: 'I have published two research papers in notable conferences. The first, "A YOLO-Assisted Framework for Potato Leaf Disease Detection and Classification using CNN and Multi-Head Attention Mechanism," was presented at the IEEE ECCE 2025 in CUET, Bangladesh, focusing on disease detection in potatoes using advanced deep learning techniques. The second, "Deep High-Resolution Representation Learning Using CNN for Human Pose Estimation," was accepted for the UCICS 2025 in Rajshahi, Bangladesh, exploring high-resolution CNN-based human pose estimation. These papers highlight my dedication to advancing computer vision and deep learning research.'

    },

    {
        avatar: Avt2,
        name: 'Thesis Defense Completion',
        review: 'Successfully completed my thesis defense on "Potato Leaf Disease Detection using CNN with Attention Mechanism." This marks the final milestone of my undergraduate research journey'

    },
    {
        avatar: Avt3,
        name: 'Top Performer – UX Design Course, EDGE Program at CUET',
        review: 'I successfully completed a UX Design course under the EDGE program at CUET, where I secured the highest marks among all participants. This recognition reflected my dedication to user-centered design principles and strengthened my skills in creating intuitive and impactful digital experiences.'

    },
    {
        avatar: Avt4,
        name: 'Participant – Bangladesh Botany Olympiad',
        review: 'In 2017, I participated in the Bangladesh Botany Olympiad held at the University of Chittagong. Through strong analytical thinking and subject knowledge, I performed well in the competition and was awarded a certificate of recognition for my achievement. This experience helped strengthen my interest in biological sciences and academic excellence.'

    },
    
    {
        avatar: Avt5,
        name: 'Red Crescent Award',
        review: '"Red Crescent Society, 2016 – 2018"Served as the Red Crescent Team Leader at my college, leading various humanitarian initiatives, including blood donation campaigns and emergency relief programs.Recognized with the Best Red Crescent Award for outstanding leadership, dedication, and active volunteerism. This experience significantly strengthened my skills in leadership, teamwork, and community service.'

    },
]


const Testimonials = () => {
    return (
        <section id='Awards & Recognition'>
            <h5>Achievements and Feedback</h5>
            <h2>Awards & Recognition</h2>



            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}

                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'> {review}


                                </small>

                            </SwiperSlide>
                        )
                    })

                }
            </Swiper>
        </section>
    )
}

export default Testimonials
