// Mock data for admin statistics
export const statsData = {
  totalDonations: 500000,      // total amount collected
  totalDonors: 120,            // number of donors
  avgDonation: 4200,           // average donation amount
  monthlyGrowth: 12,           // % growth
  topDonors: [
    { name: "Rajesh Kumar", amount: 10000, date: "2025-06-15" },
    { name: "Sita Mehra", amount: 8000, date: "2025-06-10" },
    { name: "Amit Patel", amount: 7500, date: "2025-06-05" }
  ],
  donationsByCategory: [
    { category: "Martyr Family Support", amount: 300000, count: 50 },
    { category: "Education for Children", amount: 150000, count: 30 },
    { category: "Medical Assistance", amount: 50000, count: 20 }
  ]
};

// Mock data for pending events
export const pendingEvents = [
  {
    id: 1,
    name: "Kargil Vijay Diwas",
    description: "Annual event to honor Kargil war heroes",
    date: "2025-07-26",
    location: "New Delhi",
    organizer: "Defence Ministry",
    status: "pending"
  },
  {
    id: 2,
    name: "Martyr Families Meet",
    description: "Meetup for families of martyrs for support & networking",
    date: "2025-08-14",
    location: "Pune",
    organizer: "Veero Ki Seva Foundation",
    status: "pending"
  },
  {
    id: 3,
    name: "Fundraiser for Education",
    description: "Charity event to raise funds for children of martyrs",
    date: "2025-09-10",
    location: "Bangalore",
    organizer: "CharityPlus",
    status: "pending"
  }
];
