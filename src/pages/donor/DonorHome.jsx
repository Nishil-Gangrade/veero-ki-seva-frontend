import { Link } from 'react-router-dom';
import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';
import dummy1 from '../../assets/images/birthdayHome.png';
import dummy2 from '../../assets/images/marrigeHome.png';
import dummy3 from '../../assets/images/schoolHome.png';
import dummy4 from '../../assets/images/hospitalHome.png';

const DonorHome = () => {
  const cardImages = [dummy1, dummy2, dummy3, dummy4];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute inset-0 backdrop-blur-sm min-h-screen bg-black bg-opacity-40" />

      {/* Navbar */}
      <DonorNavbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center text-white px-4">
        {/* Title & Description */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to Veero Ki Seva 
          </h1>
          <p className="text-lg sm:text-xl mb-4 drop-shadow">
            Thank you for being here. By donating or participating, you’re supporting the families of our real heroes — the bravehearts who gave their lives for our nation.
          </p>
          <p className="text-base sm:text-lg mb-8 drop-shadow ">
            We believe that true patriotism is when we stand by those who stood for us. Join us in the journey of impact and seva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/donor/donate" className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Donate Now
            </Link>
            <a href="#footer" className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition">
              Know More
            </a>
          </div>

          {/* Stats Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-white">
            {[
              { number: '500+', label: 'Families Helped' },
              { number: '₹50L+', label: 'Funds Raised' },
              { number: '1000+', label: 'Donors' },
              { number: '50+', label: 'Events' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Sliding Cards */}
      <div className="relative z-10 px-4 sm:px-10 mt-10 overflow-hidden">
        <div className="horizontal-scroll whitespace-nowrap animate-scroll">
          {[...cardImages, ...cardImages].map((img, idx) => {
            const messages = [
              "With donation from Rahul, martyr Subedar Param's son's birthday was celebrated.",
              "Thanks to Arnav, daughter of Major Ram was married with full honor.",
              "Veer Bal Vidyalaya was upgraded with new smart classes via your support.",
              "Riya got treated with dengue; her medical bills were paid by donor Raj."
            ];
            const msg = messages[idx % 4];

            return (
              <div key={idx} className="inline-block w-64 h-64 mx-4 relative group overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`Card ${idx}`}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-sm text-white p-4 text-center">
                  {msg}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="relative z-10 bg-slate-200 bg-opacity-80 backdrop-blur-md shadow-md text-gray-800 py-10 px-8 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-3">About VEEROKISEVA</h2>
            <p className="text-sm text-gray-700">
              A tech-for-good initiative to empower the unsung families of India’s brave soldiers through community participation, transparency, and service.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Explore</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-orange-600">Who We Are</a></li>
              <li><a href="#" className="hover:text-orange-600">Our Aim</a></li>
              <li><a href="#" className="hover:text-orange-600">Ongoing Projects</a></li>
              <li><a href="#" className="hover:text-orange-600">Blog</a></li>
              <li><a href="#" className="hover:text-orange-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-600">Instagram</a>
              <a href="#" className="hover:text-orange-600">LinkedIn</a>
              <a href="#" className="hover:text-orange-600">Twitter</a>
              <a href="#" className="hover:text-orange-600">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        .horizontal-scroll {
          display: inline-block;
          white-space: nowrap;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scrollLeft 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DonorHome;
