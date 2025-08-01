import { useState, useEffect } from "react";
import DonorNavbar from "../../components/DonorNavbar";
import bgImage from "../../assets/images/frontpage1.jpg";
import defaultProfilePic from "../../assets/images/pfp.png"; // Updated path
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDonorContext } from "../../context/DonorContext";

const DonorProfile = () => {
  const { donor, setDonor } = useDonorContext();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profilePic: defaultProfilePic,
  });

  useEffect(() => {
    if (donor) {
      setProfileData({
        name: donor.name || "",
        email: donor.email || "",
        phone: donor.phone || "",
        password: "",
        profilePic: defaultProfilePic, // Always use default pic
      });
    }
  }, [donor]);

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = {
      ...donor,
      name: profileData.name,
      phone: profileData.phone,
      profilePic: defaultProfilePic,
    };

    setDonor(updated);
    toast.success("✔ Profile updated successfully!");
  };

  const previousDonations = [
    { id: 1, event: "Medical Aid for Veterans", amount: 500, date: "2024-11-01" },
    { id: 2, event: "Education Drive", amount: 1000, date: "2025-01-10" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen text-white">
        <DonorNavbar />

        {/* Add padding-top to avoid content getting hidden under navbar */}
        <div className="max-w-4xl mx-auto pt-28 px-6">
          <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-xl text-black">
            <h2 className="text-3xl font-bold text-center mb-6">Your Profile</h2>

            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-green-500 overflow-hidden bg-gray-100">
                <img
                  src={defaultProfilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 italic text-sm text-gray-600">Default Profile Image</p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  readOnly
                  className="w-full mt-1 p-2 border rounded bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Save Profile
              </button>
            </div>

            {/* Donation History */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Donation History</h3>
              <ul className="space-y-3">
                {previousDonations.map((donation) => (
                  <li
                    key={donation.id}
                    className="bg-gray-100 p-4 rounded shadow-sm flex justify-between items-center"
                  >
                    <span>{donation.event}</span>
                    <span>
                      ₹{donation.amount} on {donation.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;
