import React from 'react';

const Certificates = ({ toggle }) => {
  const certificateList = [
    { name: "Bangladesh Botany Olympiad", src: '/assets/certificates/certificate1.png' },
    { name: "Machine Learning", src: '/assets/certificates/certificate2.jpg' },
    { name: "UX Design", src: '/assets/certificates/certificate3.jpg' },
    { name: "Data Structures", src: '/assets/certificates/certificate4.jpg' },
    { name: "Artificial Intelligence", src: '/assets/certificates/certificate5.jpg' },
    { name: "Cloud Computing", src: '/assets/certificates/certificate6.jpg' },
    { name: "Software Engineering", src: '/assets/certificates/certificate7.jpg' },
    { name: "Digital Marketing", src: '/assets/certificates/certificate8.jpg' },
    { name: "React Development", src: '/assets/certificates/certificate9.jpg' },
    { name: "Node.js Development", src: '/assets/certificates/certificate10.jpg' },
    { name: "Python Programming", src: '/assets/certificates/certificate11.jpg' },
    { name: "JavaScript Fundamentals", src: '/assets/certificates/certificate12.jpg' },
    { name: "Full Stack Development", src: '/assets/certificates/certificate13.jpg' },
    { name: "Git & GitHub", src: '/assets/certificates/certificate14.jpg' },
    { name: "Mobile App Development", src: '/assets/certificates/certificate15.jpg' },
    { name: "UI/UX Principles", src: '/assets/certificates/certificate16.jpg' },
    { name: "Database Management", src: '/assets/certificates/certificate17.jpg' },
    { name: "Web Security", src: '/assets/certificates/certificate18.jpg' },
    { name: "Agile Methodology", src: '/assets/certificates/certificate19.jpg' },
    { name: "Project Management", src: '/assets/certificates/certificate20.jpg' }
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-5xl h-[90vh] flex overflow-hidden relative">
        <button 
          className="absolute top-4 right-6 text-3xl font-bold text-gray-700" 
          onClick={toggle}
        >
          &times;
        </button>

        <div className="w-[30%] p-5 border-r border-gray-300">
          <h3 className="text-xl font-semibold mb-4">My Certificates</h3>
          <p className="text-gray-600">Here are some of the certifications I’ve earned through my learning journey.</p>
        </div>

        <div className="w-[70%] p-5 overflow-y-auto">
          <div className="flex flex-wrap gap-4">
            {certificateList.map((certificate, index) => (
              <div key={index} className="w-[160px] text-center">
                <h4 className="text-sm font-medium mb-2">{certificate.name}</h4>
                <img 
                  src={certificate.src} 
                  alt={certificate.name} 
                  className="w-full rounded-lg shadow-md" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
