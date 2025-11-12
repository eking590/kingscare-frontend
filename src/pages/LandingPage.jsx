// frontend/src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const LandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const services = [
    {
      icon: '🏠',
      title: 'In-Home Care',
      description: 'Professional caregivers providing assistance with daily activities in the comfort of home.'
    },
    {
      icon: '💊',
      title: 'Medication Management',
      description: 'Ensure proper medication schedules and dosage management for your loved ones/elderly ones.'
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Safe and reliable transportation for medical appointments and social activities for your loved ones.'
    },
    {
      icon: '👥',
      title: 'Companionship',
      description: 'Meaningful social interaction and emotional support to combat loneliness for your loved ones/your elderly.'
    },
    {
      icon: '🍳',
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation tailored to dietary needs.'
    },
    {
      icon: '🏥',
      title: 'Health Monitoring',
      description: 'Regular health check-ups and vital signs monitoring by trained professionals.'
    }
  ];

  const steps = [
    { 
      number: '1', 
      title: 'Sign Up', 
      description: 'Create your account and tell us about your needs',
      icon: '📝'
    },
    { 
      number: '2', 
      title: 'Match', 
      description: 'We match you with the perfect caregiver',
      icon: '🤝'
    },
    { 
      number: '3', 
      title: 'Care Begins', 
      description: 'Start receiving quality care services',
      icon: '❤️'
    }
  ];

  // Auto-slide steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section - No Animation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Compassionate Care for Your 
              <span className="text-blue-600"> Loved Ones</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional in-home care services that bring peace of mind and quality care to seniors and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/login" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Already a Member?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - No Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of care services tailored to meet the unique needs of every senior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - ONLY THIS SECTION IS A SLIDER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How KINGSCARE Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with quality care is simple and straightforward
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Steps Slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                      <div className="text-6xl mb-4">{step.icon}</div>
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentStep((prev) => prev === 0 ? steps.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Step Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - No Animation */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of families who trust us with their loved ones' care.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;