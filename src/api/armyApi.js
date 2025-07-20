import axios from 'axios';

// Submit Army Event
export const submitArmyEvent = async (eventData) => {
  try {
    const response = await axios.post("http://localhost:5000/api/army/submit-event", eventData);
    return response.data;
  } catch (error) {
    console.error("Failed to submit army event", error);
    throw error;
  }
};

// Get Army's Own Events
export const getMyArmyEvents = async (armyId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/army/my-events/${armyId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch army events", error);
    throw error;
  }
};
