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

      {/* Main Section */}
      <div className="relative z-10 px-8 pb-16 flex flex-col md:flex-row items-start">
        {/* Left */}
        <div className="flex-1 text-gray-100">
          <h1 className="text-4xl font-bold mb-4  pt-28 ">Welcome to Veero Ki Seva 🇮🇳</h1>
          <p className="text-lg max-w-xl mb-6">
            Thank you for being here. By donating or participating, you’re supporting the families of our real heroes — the bravehearts who gave their lives for our nation.
          </p>
          <p className="text-base text-gray-100 max-w-xl">
            We believe that true patriotism is when we stand by those who stood for us. Join us in the journey of impact and seva.
          </p>
          
          
        </div>

        {/* Right – Scrolling Images */}
<div className="w-full md:w-80 mt-10 md:mt-0 md:ml-12 overflow-hidden relative h-[700px]">
  <div className="scroll-container">
    {[...cardImages, ...cardImages].map((img, idx) => {
      const messages = [
        "With donation from Rahul, martyr Subedar Param's son's birthday was celebrated.",
        "Thanks to Arnav, daughter of Major Ram was married with full honor.",
        "Veer Bal Vidyalaya was upgraded with new smart classes via your support.",
        "Riya got treated with dengue her medical bills were paid by our doonor raj."
      ];
      const msg = messages[idx % 4];

      return (
        <div key={idx} className="scroll-card group">
          <div className="card-inner">
            <div className="card-front">
              <img src={img} alt={`Veer ${idx}`} className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="card-back flex items-center justify-center text-sm p-3 text-white bg-black bg-opacity-80 rounded-xl text-center">
              {msg}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

      </div>

      {/* Footer */}
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

      {/* CSS Styles */}
      <style>{`
        .scroll-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: scrollUp 20s linear infinite;
        }
        .scroll-card {
          width: 100%;
          height: 160px;
          perspective: 1000px;
        }
        .card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s;
        }
        .scroll-card:hover .card-inner {
          transform: rotateY(180deg);
        }
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        .card-back {
          transform: rotateY(180deg);
        }
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};

export default DonorHome;
