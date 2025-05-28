// src/pages/donor/DonorHome.jsx
import DonorNavbar from '../../components/DonorNavbar';
import bgImage from '../../assets/images/frontpage1.jpg';

const DonorDonate = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <DonorNavbar />
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-white text-3xl font-bold bg-black bg-opacity-40 p-6 rounded-xl">This is the Donor Donation Page</h1>
      </div>
    </div>
  );
};

export default DonorDonate;
