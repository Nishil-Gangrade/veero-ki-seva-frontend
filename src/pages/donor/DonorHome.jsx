import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';
import dummy1 from '../../assets/images/dummy1.jpeg';
import dummy2 from '../../assets/images/dummy2.jpeg';
import dummy3 from '../../assets/images/dummy3.jpeg';
import dummy4 from '../../assets/images/dummy4.jpeg';

const DonorHome = () => {
  const cardImages = [dummy1, dummy2, dummy3, dummy4];

  return (
    <div className="relative min-h-screen">
      {/* Background Image + Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 backdrop-blur-sm min-h-screen bg-black bg-opacity-40" />

      {/* Navbar */}
      <DonorNavbar />

      {/* Main Content */}
      <div className="relative z-10 px-8 pt-28 pb-16 flex flex-col md:flex-row">
        {/* Left Section – Welcome & About */}
        <div className="flex-1 text-gray-200">
          <h1 className="text-4xl font-bold mb-4">Welcome to Veero Ki Seva 🇮🇳</h1>
          <p className="text-lg max-w-xl mb-6">
            Thank you for being here. By donating or participating, you’re supporting the families of our real heroes — the bravehearts who gave their lives for our nation.
          </p>
          <p className="text-base text-gray-100 max-w-xl">
            We believe that true patriotism is when we stand by those who stood for us. Join us in the journey of impact and seva.
          </p>
        </div>

        {/* Right Section – Floating Cards */}
        <div className="w-full md:w-80 mt-10 md:mt-0 md:ml-10 h-[500px] overflow-hidden relative">
          <div className="absolute animate-scrollUp flex flex-col gap-6">
            {cardImages.concat(cardImages).map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition hover:scale-105 cursor-pointer group"
              >
                <img src={img} alt={`Donation ${idx + 1}`} className="w-full h-40 object-cover" />
                <div className="p-3 text-gray-700 text-sm group-hover:text-orange-600">
                  Helping Veer Family #{(idx % 4) + 1}<br />
                  <span className="text-xs text-gray-500 group-hover:text-orange-700">Click to know how your donation changes lives.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer – About VEEROKISEVA */}
      <footer className="relative z-10 bg-slate-200 bg-opacity-80 backdrop-blur-md shadow-md text-gray-800 py-10 px-8 mt-10">
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

      {/* Scroll Animation */}
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scrollUp {
            animation: scrollUp 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default DonorHome;
