// frontend/src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { CheckIcon } from '@heroicons/react/20/solid';

const LandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Helper function for class names
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const heroSlides = [
    {
      id: 1,
      image: '/images/hero/hero-1.jpg',
      alt: 'Elderly couple enjoying time with caregiver',
      title: 'Compassionate Care',
      description: 'Professional caregivers providing personalized attention'
    },
    {
      id: 2,
      image: '/images/hero/hero-2.jpg',
      alt: 'Family gathering with seniors',
      title: 'Family Connections',
      description: 'Helping families stay connected with their loved ones'
    },
    {
      id: 3,
      image: '/images/hero/hero-3.jpg',
      alt: 'Caregiver assisting with medication',
      title: 'Medical Support',
      description: 'Expert medication management and health monitoring'
    },
    {
      id: 4,
      image: '/images/hero/hero-4.jpg',
      alt: 'Social activities for seniors',
      title: 'Active Lifestyle',
      description: 'Promoting social engagement and meaningful activities'
    }
  ];

  const services = [
    {
      title: 'In-Home Care',
      description: 'Professional caregivers providing assistance with daily activities in the comfort of home.',
      backgroundImage: '/images/services/in-home-care-bg.jpg',
      features: ['Personal Care', 'Mobility Assistance', 'Housekeeping', '24/7 Support']
    },
    {
      title: 'Medication Management',
      description: 'Ensure proper medication schedules and dosage management for your loved ones.',
      backgroundImage: '/images/services/medication-bg.jpg',
      features: ['Dosage Management', 'Schedule Tracking', 'Prescription Coordination', 'Health Monitoring']
    },
    {
      title: 'Transportation',
      description: 'Safe and reliable transportation for medical appointments and social activities.',
      backgroundImage: '/images/services/transportation-bg.jpg',
      features: ['Medical Appointments', 'Grocery Shopping', 'Social Outings', 'Wheelchair Accessible']
    },
    {
      title: 'Companionship',
      description: 'Meaningful social interaction and emotional support to combat loneliness.',
      backgroundImage: '/images/services/companionship-bg.jpg',
      features: ['Social Activities', 'Conversation', 'Hobby Support', 'Emotional Care']
    },
    {
      title: 'Meal Preparation',
      description: 'Nutritious meal planning and preparation tailored to dietary needs.',
      backgroundImage: '/images/services/meal-prep-bg.jpg',
      features: ['Dietary Planning', 'Nutrition Focus', 'Meal Cooking', 'Special Diets']
    },
    {
      title: 'Health Monitoring',
      description: 'Regular health check-ups and vital signs monitoring by trained professionals.',
      backgroundImage: '/images/services/health-monitoring-bg.jpg',
      features: ['Vital Checks', 'Health Reports', 'Emergency Response', 'Family Updates']
    }
  ];

  const tiers = [
    {
      name: 'Basic Care',
      id: 'tier-basic',
      href: '/register?plan=basic',
      priceMonthly: '$29',
      description: "Perfect for occasional care needs and light assistance.",
      features: [
        '4 hours of care per week',
        'Medication reminders',
        'Light housekeeping',
        '24-hour support response time',
        'Basic health monitoring',
        'Weekly care reports'
      ],
      featured: false,
    },
    {
      name: 'Premium Care',
      id: 'tier-premium',
      href: '/register?plan=premium',
      priceMonthly: '$99',
      description: 'Comprehensive care with dedicated support for your loved ones.',
      features: [
        '20 hours of care per week',
        'Full medication management',
        'Meal preparation & nutrition',
        'Transportation services',
        'Dedicated caregiver',
        'Advanced health monitoring',
        'Daily activity engagement',
        '24/7 emergency support',
        'Custom care plan',
        'Monthly family consultations'
      ],
      featured: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Daughter of Client',
      rating: 5,
      image: '/images/testimonials/client-1.jpg',
      text: 'The care and compassion shown to my mother has been exceptional. The caregivers are professional, kind, and truly make a difference in her life.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Son of Client',
      rating: 5,
      image: '/images/testimonials/client-2.jpg',
      text: 'KINGSCARE transformed our family\'s life. The transportation service has been a game-changer for my father\'s medical appointments.',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Client',
      rating: 5,
      image: '/images/testimonials/client-3.jpg',
      text: 'As someone living alone, the companionship service has brought so much joy into my life. I look forward to every visit!',
      location: 'Miami, FL'
    },
    {
      id: 4,
      name: 'Robert Williams',
      role: 'Husband of Client',
      rating: 5,
      image: '/images/testimonials/client-4.jpg',
      text: 'The meal preparation service has been incredible. My wife has specific dietary needs and the caregivers handle them perfectly.',
      location: 'Chicago, IL'
    }
  ];

  const steps = [
    { 
      number: '1', 
      title: 'Sign Up & Assessment', 
      description: 'Create your account and complete our comprehensive care assessment to understand your specific needs.',
      image: '/images/steps/signup-process.jpg',
      alt: 'Family filling out care assessment form with caregiver'
    },
    { 
      number: '2', 
      title: 'Perfect Match', 
      description: 'We carefully match you with the ideal caregiver based on personality, skills, and care requirements.',
      image: '/images/steps/caregiver-match.webp',
      alt: 'Senior meeting with perfectly matched caregiver'
    },
    { 
      number: '3', 
      title: 'Care Begins', 
      description: 'Start receiving personalized, compassionate care services in the comfort of your home.',
      image: '/images/steps/care-begins.webp',
      alt: 'Caregiver providing assistance to senior at home'
    }
  ];

  // Auto-slide for steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  // Auto-slide for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section with Auto-Sliding Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We're changing the way to connect Elders with Caregivers
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compassionate care for your loved ones. Professional in-home care services that bring peace of mind.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-center"
                >
                  Get started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition duration-300 text-center flex items-center justify-center"
                >
                  Live demo →
                </Link>
              </div>
            </div>
            
            {/* Hero Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentHeroSlide * 100}%)` }}
                >
                  {heroSlides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        {/* Hero Image */}
                        <img 
                          src={slide.image} 
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback Gradient Background */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 hidden items-center justify-center"
                        >
                          <div className="text-white text-center p-8">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-lg opacity-90">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Slider Navigation */}
              <div className="flex justify-center mt-6 space-x-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentHeroSlide
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Hero Slider Arrows */}
              <button 
                onClick={() => setCurrentHeroSlide((prev) => prev === 0 ? heroSlides.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition duration-300"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition duration-300"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Background Images */}
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
          
          {/* Services Grid with Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 min-h-[400px]"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0">
                  <img 
                    src={service.backgroundImage} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20"></div>
                  {/* Fallback Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center hidden">
                    <div className="text-center text-blue-600/40">
                      <div className="text-4xl mb-2">🏠</div>
                      <p className="text-lg">{service.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="relative bg-white/80 backdrop-blur-sm group-hover:bg-white/90 transition-all duration-500 p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Link */}
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Services CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We offer custom care solutions.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Discuss Custom Care Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Choose the right care plan
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Choose an affordable plan that's packed with the best features for your loved one's comfort, safety, and wellbeing.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-gray-800 shadow-2xl' : 'bg-white/5 sm:mx-8 lg:mx-0',
                tier.featured
                  ? 'ring-2 ring-indigo-500'
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10 transition-all duration-300 hover:scale-105',
              )}
            >
              <h3
                id={tier.id}
                className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-400', 'text-base/7 font-semibold')}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-white',
                    'text-5xl font-semibold tracking-tight',
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-400', 'text-base')}>/month</span>
              </p>
              <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-300', 'mt-6 text-base/7')}>
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-300' : 'text-gray-300',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10',
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-400', 'h-6 w-5 flex-none')}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white ring-1 ring-white/5 hover:bg-white/20 focus-visible:outline-white/75',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 transition duration-300',
                )}
              >
                Get started today
              </Link>
            </div>
          ))}
        </div>
        
        {/* Additional pricing note */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-gray-400">
            * All plans include background-checked caregivers, liability insurance, and customized care plans. 
            Additional hours available at $25/hour.
          </p>
          <Link 
            to="/contact" 
            className="inline-block mt-4 text-indigo-400 hover:text-indigo-300 font-semibold text-sm"
          >
            Need a custom plan? Contact us →
          </Link>
        </div>
      </section>

      {/* Testimonial Section with Auto-Sliding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from families who have experienced our compassionate care
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                      <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Client Image */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            {/* Fallback Avatar */}
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white text-2xl border-4 border-white shadow-lg hidden">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                        </div>
                        
                        {/* Testimonial Content */}
                        <div className="flex-1 text-center lg:text-left">
                          <div className="text-2xl mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <p className="text-gray-600 text-lg mb-6 italic">
                            "{testimonial.text}"
                          </p>
                          <div>
                            <p className="font-bold text-gray-900 text-xl">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                            <p className="text-gray-400 text-sm mt-1">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Arrows */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition duration-300"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - WITH ACTUAL IMAGES */}
      <section className="py-20 bg-white">
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
            {/* Steps Slider with Images */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                      {/* Step Image */}
                      <div className="relative h-64">
                        <img 
                          src={step.image} 
                          alt={step.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center hidden">
                          <div className="text-center text-gray-600">
                            <div className="text-4xl mb-2">📝</div>
                            <p>Step {step.number} Image</p>
                            <p className="text-sm text-gray-500 mt-1">{step.alt}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="p-8 text-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                      </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of families who trust us with their loved ones' care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Create Your Account
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Have questions? Call us at <span className="font-semibold">1-800-KINGSCARE</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">KINGSCARE</h3>
              <p className="text-gray-400">
                Compassionate care for your loved ones. Professional in-home care services that bring peace of mind.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services/in-home-care" className="hover:text-white">In-Home Care</Link></li>
                <li><Link to="/services/medication" className="hover:text-white">Medication Management</Link></li>
                <li><Link to="/services/transportation" className="hover:text-white">Transportation</Link></li>
                <li><Link to="/services/companionship" className="hover:text-white">Companionship</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@kingscare.com</li>
                <li>Phone: 1-800-KINGSCARE</li>
                <li>Address: 123 Care Street, City, State</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KINGSCARE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;