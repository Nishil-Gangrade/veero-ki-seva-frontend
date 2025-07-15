// // src/pages/EventsPage.jsx
// import React, { useState } from 'react';
// import bgImage from '../../assets/images/frontpage1.jpg';
// import DonorNavbar from '../../components/DonorNavbar';
// import EventCategorySelector from '../../components/EventCategorySelector';
// import EventCard from '../../components/EventCard';
// import { eventData } from '../../data/events';

// const EventsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Birthday');

//   const filteredEvents = eventData.filter((e) => e.category === selectedCategory);

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="backdrop-blur-sm min-h-screen bg-black bg-opacity-50 overflow-y-auto">
//         <DonorNavbar />
//         <div className="min-h-screen px-4">
//           <h1 className="text-3xl font-bold text-center text-white py-6">Support a Cause</h1>
//           <EventCategorySelector
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//           />
//           <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
//             {filteredEvents.map((event) => (
//               <EventCard key={event.id} event={event} highlight={true} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;
import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, Users, Calendar, MapPin, Target, TrendingUp, Clock, Star } from 'lucide-react';
import bgImage from '../../assets/images/frontpage1.jpg';
import DonorNavbar from '../../components/DonorNavbar';
import EventCategorySelector from '../../components/EventCategorySelector';
import EventCard from '../../components/EventCard';
import { eventData } from '../../data/events';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Birthday');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced filtering and sorting
  useEffect(() => {
    setIsLoading(true);
    let filtered = eventData.filter((e) => e.category === selectedCategory);
    
    // Search functionality
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now()));
        break;
      case 'urgent':
        filtered.sort((a, b) => (b.urgent || 0) - (a.urgent || 0));
        break;
      case 'amount':
        filtered.sort((a, b) => (b.targetAmount || 0) - (a.targetAmount || 0));
        break;
      case 'progress':
        filtered.sort((a, b) => {
          const progressA = ((a.raisedAmount || 0) / (a.targetAmount || 1)) * 100;
          const progressB = ((b.raisedAmount || 0) / (b.targetAmount || 1)) * 100;
          return progressB - progressA;
        });
        break;
    }

    setTimeout(() => {
      setFilteredEvents(filtered);
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchTerm, sortBy]);

  // Stats calculation
  const stats = {
    totalEvents: eventData.length,
    activeEvents: eventData.filter(e => e.status === 'active').length,
    totalRaised: eventData.reduce((sum, e) => sum + (e.raisedAmount || 0), 0),
    totalDonors: eventData.reduce((sum, e) => sum + (e.donorCount || 0), 0)
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 animate-pulse">
          <div className="h-48 bg-white/20 rounded-xl mb-4"></div>
          <div className="h-4 bg-white/20 rounded mb-2"></div>
          <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
          <div className="h-8 bg-white/20 rounded"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${
              i % 3 === 0 ? 'bg-orange-400/30' : i % 3 === 1 ? 'bg-white/20' : 'bg-green-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <DonorNavbar />
        
        {/* Hero Section */}
        <div className="text-center py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Support Our <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Heroes</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              Every donation makes a difference in the lives of our brave martyrs' families
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Heart, label: 'Active Events', value: stats.activeEvents, color: 'text-red-400' },
                { icon: Users, label: 'Total Donors', value: stats.totalDonors, color: 'text-blue-400' },
                { icon: Target, label: 'Events Completed', value: stats.totalEvents - stats.activeEvents, color: 'text-green-400' },
                { icon: TrendingUp, label: 'Funds Raised', value: `₹${(stats.totalRaised / 100000).toFixed(1)}L`, color: 'text-orange-400' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none cursor-pointer"
                >
                  <option value="newest" className="bg-gray-800">Newest First</option>
                  <option value="urgent" className="bg-gray-800">Most Urgent</option>
                  <option value="amount" className="bg-gray-800">Highest Amount</option>
                  <option value="progress" className="bg-gray-800">Most Progress</option>
                </select>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-4 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                    showFilters 
                      ? 'bg-orange-500 border-orange-400 text-white' 
                      : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Status</label>
                    <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="" className="bg-gray-800">All Status</option>
                      <option value="active" className="bg-gray-800">Active</option>
                      <option value="completed" className="bg-gray-800">Completed</option>
                      <option value="urgent" className="bg-gray-800">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Amount Range</label>
                    <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="" className="bg-gray-800">Any Amount</option>
                      <option value="0-10000" className="bg-gray-800">₹0 - ₹10,000</option>
                      <option value="10000-50000" className="bg-gray-800">₹10,000 - ₹50,000</option>
                      <option value="50000+" className="bg-gray-800">₹50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Location</label>
                    <select className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400">
                      <option value="" className="bg-gray-800">All Locations</option>
                      <option value="delhi" className="bg-gray-800">Delhi</option>
                      <option value="mumbai" className="bg-gray-800">Mumbai</option>
                      <option value="bangalore" className="bg-gray-800">Bangalore</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Selector */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <EventCategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold">
                {selectedCategory} Events
                <span className="text-lg font-normal text-white/70 ml-2">
                  ({filteredEvents.length} results)
                </span>
              </h2>
            </div>
            
            {searchTerm && (
              <div className="text-white/80">
                Searching for: <span className="font-semibold text-orange-400">"{searchTerm}"</span>
              </div>
            )}
          </div>

          {/* Loading State */}
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {/* Events Grid */}
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="transform transition-all duration-500 hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <EventCard event={event} highlight={true} />
                    </div>
                  ))}
                </div>
              ) : (
                /* No Results */
                <div className="text-center py-16">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
                    <Search className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
                    <p className="text-white/70 mb-6">
                      {searchTerm 
                        ? `No events match "${searchTerm}" in ${selectedCategory} category`
                        : `No events available in ${selectedCategory} category`
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('Birthday');
                      }}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-white/80 mb-6 text-lg">
              Suggest a new cause or get in touch with our team to create a custom donation event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Suggest a Cause
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;