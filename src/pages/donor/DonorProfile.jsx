import { useState, useEffect } from "react";
import DonorNavbar from "../../components/DonorNavbar";

const DonorProfile = () => {
  // State for user data
  const [profileData, setProfileData] = useState({
    name: "Nishil", // You can fetch this from backend
    email: "nishil@example.com",
    phone: "9876543210",
    password: "",
    profilePic: null, // For new upload
  });

  const [preview, setPreview] = useState(null); // For showing uploaded image

  // Simulated previous donations
  const previousDonations = [
    { id: 1, event: "Medical Aid for Veterans", amount: 500, date: "2024-11-01" },
    { id: 2, event: "Education Drive", amount: 1000, date: "2025-01-10" },
  ];

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({ ...profileData, profilePic: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    // Here you'd call backend API to save the updated profile info
    console.log("Saving profile:", profileData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-green-100">
      <DonorNavbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Your Profile</h2>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full border-4 border-gray-300 bg-gray-100 overflow-hidden">
            <img
              src={preview || "/src/assets/images/pp.webp"} // fallback profile image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4"
          />
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border rounded"
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
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Save Profile
          </button>
        </div>

        {/* Donation History */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Previous Donations</h3>
          <ul className="space-y-3">
            {previousDonations.map((donation) => (
              <li
                key={donation.id}
                className="bg-gray-100 p-4 rounded shadow-sm flex justify-between items-center"
              >
                <span>{donation.event}</span>
                <span>₹{donation.amount} on {donation.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;
