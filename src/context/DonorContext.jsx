// src/context/DonorContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const DonorContext = createContext();

export const DonorProvider = ({ children }) => {
  const [donor, setDonor] = useState(null);

  // Load donor from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("donor");
    if (stored) {
      setDonor(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on donor change
  useEffect(() => {
    if (donor) {
      localStorage.setItem("donor", JSON.stringify(donor));
    }
  }, [donor]);

  return (
    <DonorContext.Provider value={{ donor, setDonor }}>
      {children}
    </DonorContext.Provider>
  );
};

export const useDonorContext = () => useContext(DonorContext);
