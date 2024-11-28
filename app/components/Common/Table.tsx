// app/components/Common/Table.tsx

import React from 'react';

interface TableProps {
    columns: string[];
    data: any; // Replace 'any' with a more specific type if possible
}

const Table: React.FC<TableProps> = () => {
  const data = [
    {
      date: '2024-11-01 10:30 AM',
      affiliateId: 'A12345',
      partnerName: 'John Doe',
      status: 'Active',
      country: 'USA',
    },
    {
      date: '2024-11-02 02:15 PM',
      affiliateId: 'B67890',
      partnerName: 'Jane Smith',
      status: 'Inactive',
      country: 'Canada',
    },
    // Add more entries as needed
  ];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Affiliate List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
            <th className="py-2 text-left text-xs font-semibold text-gray-600 uppercase">Affiliate ID</th>
            <th className="py-2 text-left text-xs font-semibold text-gray-600 uppercase">Partner Name</th>
            <th className="py-2 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
            <th className="py-2 text-left text-xs font-semibold text-gray-600 uppercase">Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2">{item.date}</td>
              <td className="py-2">{item.affiliateId}</td>
              <td className="py-2">{item.partnerName}</td>
              <td className="py-2">{item.status}</td>
              <td className="py-2">{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
