import React, { useState } from 'react';
import './portfolio.css';

// Portfolio Thumbnails
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// ID 1 Demo Images
import Ecommerce1 from '../../assets/Ecommerce1.jpg';
import Ecommerce2 from '../../assets/Ecommerce2.jpg';
import Ecommerce3 from '../../assets/Ecommerce3.jpg';
import Ecommerce4 from '../../assets/Ecommerce4.jpg';
import Ecommerce5 from '../../assets/Ecommerce5.jpg';
import Ecommerce6 from '../../assets/Ecommerce6.jpg';
import Ecommerce7 from '../../assets/Ecommerce7.jpg';
import Ecommerce8 from '../../assets/Ecommerce8.jpg';
import Ecommerce9 from '../../assets/Ecommerce9.jpg';
import Ecommerce10 from '../../assets/Ecommerce10.jpg';

// ID 2 Demo Images
import UX1 from '../../assets/ux-Dashboard1.png';
import UX2 from '../../assets/uxProfile2.png';
import UX3 from '../../assets/uxCat3.png';
import UX4 from '../../assets/uxOrder4.png';
import UX5 from '../../assets/uxDiscount5.png';

// ID 3 Demo Images
import RENT1 from '../../assets/uxrentcarprofile1.png';
import RENT2 from '../../assets/uxcarDashboard2.png';
import RENT3 from '../../assets/uxRentcarorder3.png';

// ID 4 Demo Images
import AREA1 from '../../assets/AreaCalculation1.png';
import MUSIC2 from '../../assets/MusicPlayers2.png';
import BMI3 from '../../assets/BMIAgeCalculator3.png';
import AGE4 from '../../assets/AgeCalculator4.png';
import WATCH5 from '../../assets/Stopwatch5.png';
import TASK6 from '../../assets/TaskManager6.png';
import TODO7 from '../../assets/DailyTodo7.png';

// ID 5 Demo Images
import FIGMA1 from '../../assets/Lifestylefigma1.png';
import FIGMA2 from '../../assets/clothingwebfigma2.png';
import FIGMA3 from '../../assets/clothingwebfigma3.png'; 
import FIGMA4 from '../../assets/supershopfigma4.png';
import FIGMA5 from '../../assets/fooddeliveryfigma5.png';
import FIGMA6 from '../../assets/mobiledesktopfigma6.png';

// ID 6 Images (Grocery Management System)
import GROCERY1 from '../../assets/iiucgroceryerd1.png';
import GROCERY2 from '../../assets/customerdata2.png';
import GROCERY3 from '../../assets/employeesdata3.png';
import GROCERY4 from '../../assets/orderdata4.png';
import GROCERY5 from '../../assets/payment5.png';
import GROCERY6 from '../../assets/paysdata6.png';
import GROCERY7 from '../../assets/productdata7.png';
import GROCERY8 from '../../assets/sellbydata8.png';


// Demo Image Arrays
const demoImages = [
  { img: Ecommerce1, caption: "Header of the E-Commerce Website" },
  { img: Ecommerce2, caption: "Shopping Cloths buying" },
  { img: Ecommerce3, caption: "Shopping Cloths buying" },
  { img: Ecommerce4, caption: "Contact of Website" },
  { img: Ecommerce5, caption: "Order Cloths" },
  { img: Ecommerce6, caption: "Location Website" },
  { img: Ecommerce7, caption: "Blog Website" },
  { img: Ecommerce8, caption: "Free Delivery" },
  { img: Ecommerce9, caption: "Pay Bill" },
  { img: Ecommerce10, caption: "Footer the E-Commerce Website" }
];

const demoImagesUX = [
  { img: UX1, caption: "Dashboard UX Design" },
  { img: UX2, caption: "User Profile Page" },
  { img: UX3, caption: "Category Section" },
  { img: UX4, caption: "Order Management" },
  { img: UX5, caption: "Discount Feature" }
];

const demoImagesRENT = [
  { img: RENT1, caption: "Rent Car User Profile" },
  { img: RENT2, caption: "Car Dashboard UI" },
  { img: RENT3, caption: "Order Rent Car Section" }
];

const demoImagesTOOLS = [
  { img: AREA1, caption: "Area Calculation Tool" },
  { img: MUSIC2, caption: "Music Player App" },
  { img: BMI3, caption: "BMI and Age Calculator" },
  { img: AGE4, caption: "Age Calculator App" },
  { img: WATCH5, caption: "Digital Stopwatch App" },
  { img: TASK6, caption: "Task Manager UI" },
  { img: TODO7, caption: "Daily Todo App" }
];

const demoImagesFIGMA = [
  { img: FIGMA1, caption: "Lifestyle Website UI" },
  { img: FIGMA2, caption: "Clothing Web UI - Homepage" },
  { img: FIGMA3, caption: "Clothing Web UI - Details" },
  { img: FIGMA4, caption: "Supershop Web Design" },
  { img: FIGMA5, caption: "Food Delivery App Design" },
  { img: FIGMA6, caption: "Food Delivery Cart Page" }
];

const demoImagesGROCERY = [
    { img: GROCERY1, caption: "Grocery ERD Diagram" },
    { img: GROCERY2, caption: "Customer Data Table" },
    { img: GROCERY3, caption: "Employees Data Table" },
    { img: GROCERY4, caption: "Order Data Table" },
    { img: GROCERY5, caption: "Payment Records" },
    { img: GROCERY6, caption: "Pays Data Summary" },
    { img: GROCERY7, caption: "Product Data Table" },
    { img: GROCERY8, caption: "SellBy Relationship Table" },
  ];

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Ecommerce Dashboard & Financial Visualization',
    github: 'https://github.com/NomanNehan17/link-for-ecommerecsite',
    showDemo: true,
    demoImages: demoImages
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/NomanNehan17/EDGE-Ecommerece-project',
    showDemo: true,
    demoImages: demoImagesUX
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma Dashboard UI kit for data design web apps',
    github: 'https://github.com/NomanNehan17/UX-design-rent-a-car-',
    showDemo: true,
    demoImages: demoImagesRENT
  },
  {
    id: 4,
    image: IMG4,
    title: 'Utility Tools App Collection',
    github: ' https://nomannehan17.github.io/musicplayer17/',
    showDemo: true,
    demoImages: demoImagesTOOLS
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figma Website Design Collection',
    github: 'https://github.com/NomanNehan17/All-figma-cloting-web-designign-',
    showDemo: true,
    demoImages: demoImagesFIGMA
  },
  {
    id: 6,
    image: IMG6,
    title: 'Grocery Management System (ERD + Data Views)',
    github: 'https://github.com/NomanNehan17/Univercity-Central-library-appas',
    showDemo: true,
    demoImages: demoImagesGROCERY
  }
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemoImages, setSelectedDemoImages] = useState([]);

  const openDemoModal = (demoImages) => {
    setSelectedDemoImages(demoImages);
    setIsModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, showDemo, demoImages }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
              {showDemo && (
                <button className='btn btn-primary' onClick={() => openDemoModal(demoImages)}>
                  Live Demo
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-gallery'>
            <button className='modal-close' onClick={closeDemoModal}>Close</button>
            {selectedDemoImages.map((item, index) => (
              <div key={index} className='modal-image-item'>
                <img src={item.img} alt={`demo${index + 1}`} />
                <p className="image-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
