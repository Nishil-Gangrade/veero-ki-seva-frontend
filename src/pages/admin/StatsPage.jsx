import React from 'react';
import { Users, Heart, TrendingUp, Calendar, IndianRupee, UserCheck, Trophy, Gift } from 'lucide-react';
import { statsData } from '../../data/mockData';

const StatsPage = () => {
  const fmt = (num, isMoney) => isMoney
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(num)
    : new Intl.NumberFormat('en-IN').format(num);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Donations', value: fmt(statsData.totalDonations, true), icon: IndianRupee, style: 'bg-blue' },
          { label: 'Total Donors', value: fmt(statsData.totalDonors), icon: Users, style: 'bg-green' },
          { label: 'Average Donation', value: fmt(statsData.avgDonation, true), icon: Heart, style: 'bg-purple' },
          { label: 'Monthly Growth', value: `${statsData.monthlyGrowth}%`, icon: TrendingUp, style: 'bg-orange' },
        ].map(({ label, value, icon: Icon, style }) => (
          <div key={label} className={`bg-gradient-to-r from-${style}-600 to-${style}-700 p-6 rounded-xl text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/75 text-sm">{label}</p>
                <p className="text-3xl font-bold">{value}</p>
              </div>
              <div className={`${style}-500 p-3 rounded-lg`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Top Donors</h3>
          {statsData.topDonors.map((d, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">{i+1}</div>
                <div>
                  <p className="font-medium text-gray-900">{d.name}</p>
                  <p className="text-sm text-gray-500">{d.date}</p>
                </div>
              </div>
              <p className="font-semibold">{fmt(d.amount, true)}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Donations by Category</h3>
          {statsData.donationsByCategory.map((cat, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">{cat.category}</span>
                <span className="text-sm text-gray-500">{cat.count} donors</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(cat.amount / statsData.totalDonations) * 100}%` }}
                />
              </div>
              <p className="mt-1 font-semibold">{fmt(cat.amount, true)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
