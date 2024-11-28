// app/dashboard/page.tsx
'use client';

import React from 'react';
import DashboardShell from '../components/Common/DashboardShell';

export default function Dashboard() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Overview Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Earnings Card */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-blue-600">Total Earnings</p>
              <p className="text-2xl font-semibold text-blue-900">$1,234.56</p>
              <p className="text-sm text-blue-600">+12.3% from last month</p>
            </div>
            
            {/* Active Links Card */}
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-green-600">Clicks</p>
              <p className="text-2xl font-semibold text-green-900">2300</p>
              <p className="text-sm text-green-600">+10% from last month</p>
            </div>
            
            {/* Conversions Card */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-sm font-medium text-purple-600">Conversions</p>
              <p className="text-2xl font-semibold text-purple-900">156</p>
              <p className="text-sm text-purple-600">+8.5% from last week</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      New conversion from link #12345
                    </p>
                    <p className="text-sm text-gray-500">
                      Commission earned: $24.99
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

// app/components/Dashboard.js (example)

import { useEffect, useState } from 'react';

function HubSpotDataSection() {
  const [hubSpotData, setHubSpotData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/fetchHubSpotData');
        if (!response.ok) {
          throw new Error('Failed to fetch data from HubSpot');
        }
        const data = await response.json();
        setHubSpotData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>HubSpot Contacts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(hubSpotData, null, 2)}</pre>
      )}
    </div>
  );
}

