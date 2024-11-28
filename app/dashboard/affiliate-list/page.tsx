
import React from 'react';
import DashboardShell from '../../components/Common/DashboardShell';

export default function AffiliateList() {
  return (
    <DashboardShell>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate List</h2>
        {/* Table or List Content */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Affiliate ID</th>
                <th className="py-2 px-4 border-b">Partner's Name</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Country</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with dynamic content */}
              <tr>
                <td className="py-2 px-4 border-b">12345</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">Active</td>
                <td className="py-2 px-4 border-b">USA</td>
              </tr>
              {/* Additional rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
