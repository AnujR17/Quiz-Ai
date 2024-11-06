import React, { useState } from 'react';
import { User, Mail, Phone, School, BookOpen, Users, ArrowRight, ArrowLeft } from 'lucide-react';

const Platform = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          XYZ Platform
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
            Login / Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center gap-12">
          <div className="w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-2"></div>
              <img
                src="/api/placeholder/600/400"
                alt="Students in exam hall"
                className="relative z-10 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-1/2 space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Exam Experience
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the future of examination evaluation powered by advanced AI technology. 
              Our platform ensures fair, accurate, and rapid assessment while making the process 
              engaging for students and educators alike.
            </p>
            <button 
              onClick={() => setCurrentPage('signup')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center mt-24">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI evaluation with fun
          </h2>
        </div>
      </main>
    </div>
  );

  // Signup Page Component
  const SignupPage = () => (
    <div className="min-h-screen relative">
      <button
        onClick={() => setCurrentPage('landing')}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center gap-12">
          <div className="w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-2"></div>
              <img
                src="/api/placeholder/600/800"
                alt="AI in Education"
                className="relative z-10 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12">
              Welcome to XYZ AI
            </h1>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setCurrentPage('mode-selection'); }}>
                {/* Form fields */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium gap-2">
                    <User size={20} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium gap-2">
                    <Mail size={20} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium gap-2">
                    <Phone size={20} />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium gap-2">
                    <BookOpen size={20} />
                    Standard/Grade
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your grade</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium gap-2">
                    <School size={20} />
                    School Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your school name"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mode Selection Page Component
  const ModeSelectionPage = () => (
    <div className="min-h-screen relative">
      <button
        onClick={() => setCurrentPage('signup')}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16">
          Choose Your Learning Mode
        </h1>

        <div className="flex gap-12 items-stretch">
          {/* Individual Mode Card */}
          <div className="w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
              <img
                src="/api/placeholder/600/400"
                alt="Individual Mode"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <User size={24} className="text-blue-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Individual Mode
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Perfect for self-paced learning! Take exams and enjoy association games at your own pace. 
                Challenge yourself, track your progress, and enhance your knowledge independently.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-blue-600" />
                  Personal exam environment
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-blue-600" />
                  Solo association games
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-blue-600" />
                  Individual progress tracking
                </li>
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
                Start Individual Mode
              </button>
            </div>
          </div>

          {/* Team Mode Card */}
          <div className="w-1/2 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
              <img
                src="/api/placeholder/600/400"
                alt="Team Mode"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-purple-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Team Mode
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Collaborate and compete with peers! Participate in group exams and multiplayer 
                association games. Learn together, share knowledge, and grow as a team.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-purple-600" />
                  Collaborative exam sessions
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-purple-600" />
                  Multiplayer games
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-purple-600" />
                  Team performance insights
                </li>
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
                Start Team Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Common Background Elements
  const BackgroundElements = () => (
    <>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <BackgroundElements />
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'signup' && <SignupPage />}
      {currentPage === 'mode-selection' && <ModeSelectionPage />}
    </div>
  );
};

export default Platform;
