// // frontend/src/components/ServiceCard.jsx
// import React from 'react';

// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
//       <div className="text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;

// frontend/src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-blue-200 group">
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;