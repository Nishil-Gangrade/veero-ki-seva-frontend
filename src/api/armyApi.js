import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Submit Army Event
export const submitArmyEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/army/submit-event`, eventData);
    return response.data;
  } catch (error) {
    console.error("Failed to submit army event", error);
    throw error;
  }
};

// Get Army's Own Events
export const getMyArmyEvents = async (armyId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/army/my-events/${armyId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch army events", error);
    throw error;
  }
};
