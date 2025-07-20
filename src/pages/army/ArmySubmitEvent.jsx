import React, { useState } from 'react';
import { submitArmyEvent } from '../../api/armyApi';
import ArmyNavbar from '../../components/ArmyNavbar';
import { toast } from 'react-toastify';


const ArmySubmitEvent = () => {
  const [formData, setFormData] = useState({
    armyId: '68710908c8b332fc3f6f9c36', // TODO: Replace with logged-in army user's id (from auth context/localstorage)
    title: '',
    category: '',
    description: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitArmyEvent(formData);
      toast.success('Event submitted successfully!');
      setFormData({ ...formData, title: '', category: '', description: '', date: '' });
    } catch (err) {
      toast.error('Failed to submit event');
    }
  };

  return (
    <div>
      <ArmyNavbar />
      <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Submit New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full border p-2"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Birthday">Birthday</option>
            <option value="Marriage">Marriage</option>
            <option value="Hospital">Hospital</option>
            <option value="School">School</option>
          </select>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-2"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
          <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArmySubmitEvent;
