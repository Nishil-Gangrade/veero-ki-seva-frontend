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
import axios from 'axios';
import { Search, Filter, Heart, Users, Target, TrendingUp } from 'lucide-react';
import bgImage from '../../assets/images/frontpage1.jpg';
import DonorNavbar from '../../components/DonorNavbar';
import EventCategorySelector from '../../components/EventCategorySelector';
import EventCard from '../../components/EventCard';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Birthday');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApprovedEvents();
  }, []);

  const fetchApprovedEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/army/approved-events`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching approved events:', error);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    let filtered = events.filter((e) => e.category === selectedCategory);

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
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
  }, [events, selectedCategory, searchTerm, sortBy]);

  const stats = {
    totalEvents: events.length,
    activeEvents: events.filter(e => e.status === 'Active').length,
    totalRaised: events.reduce((sum, e) => sum + (e.raisedAmount || 0), 0),
    totalDonors: events.reduce((sum, e) => sum + (e.donorCount || 0), 0)
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <DonorNavbar />

        <div className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg mt-5">
            Support Our <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Heroes</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Heart, label: 'Active Events', value: stats.activeEvents, color: 'text-red-400' },
              { icon: Users, label: 'Total Donors', value: stats.totalDonors, color: 'text-blue-400' },
              { icon: Target, label: 'Total Events', value: stats.totalEvents, color: 'text-green-400' },
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

        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border bg-white/20 text-white placeholder-white/70 focus:outline-none"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/20 text-white"
            >
              <option value="newest">Newest</option>
              <option value="urgent">Most Urgent</option>
              <option value="amount">Highest Amount</option>
              <option value="progress">Most Progress</option>
            </select>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mb-8">
          <EventCategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-12">
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-white">No events found for selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
