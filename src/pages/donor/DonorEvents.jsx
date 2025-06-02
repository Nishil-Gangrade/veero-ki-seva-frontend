// src/pages/donor/DonorEvents.jsx
import { Link } from "react-router-dom";
import DonorNavbar from '../../components/DonorNavbar';

import bgImage from '../../assets/images/frontpage1.jpg';


const dummyEvents = [
  {
    id: "event1",
    title: "Support Families of Martyrs",
    image: "/assets/images/dummy1.jpg",
    desc: "Help us support the families of fallen heroes with essentials and education.",
  },
  {
    id: "event2",
    title: "Medical Aid for Veterans",
    image: "/assets/images/dummy2.jpg",
    desc: "Contribute to provide timely medical care to injured soldiers and veterans.",
  },
  {
    id: "event3",
    title: "Rehabilitation Programs",
    image: "/assets/images/dummy3.jpg",
    desc: "Fund skill training and rehabilitation programs for retired servicemen.",
  },
  {
    id: "event4",
    title: "Children's Education Drive",
    image: "/assets/images/dummy4.jpg",
    desc: "Sponsor education for children of our brave martyrs.",
  },
];

const EventCards = () => {
  return (
    
      <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="backdrop-blur-sm min-h-screen bg-black bg-opacity-50 overflow-y-auto">
        <DonorNavbar />
      <h2 className="text-center text-4xl font-bold text-white mb-10">Ongoing Events</h2>

      <div className="flex flex-col gap-10 items-center">
        {dummyEvents.map((event) => (
          <div
            key={event.id}
            className="relative w-[90%] max-w-[700px] h-[400px] overflow-hidden rounded-2xl shadow-2xl group border border-white"
          >
            {/* Background Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:blur-sm transition-all duration-500"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 text-white flex flex-col justify-center items-center p-5 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-2 text-center">{event.title}</h3>
              <p className="text-sm mb-4 text-center">{event.desc}</p>
              <Link to={`/donate?eventId=${event.id}`}>
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-white font-semibold transition">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventCards;
