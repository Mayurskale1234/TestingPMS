// app/dashboard/offer-list/page.tsx
'use client';

import { useState } from 'react';
import DashboardShell from "@/app/components/Common/DashboardShell";

export default function OfferList() {
  const [formData, setFormData] = useState({
    affiliateId: '',
    partnerName: '',
    country: '',
    status: 'Active',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logic to store form data can go here
    console.log('Form submitted:', formData);
  };

  return (
    <DashboardShell>
      <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add New Offer</h2>
        
        {isSubmitted && (
          <p className="text-green-600 mb-4">Offer added successfully!</p>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Affiliate ID</label>
            <input
              type="text"
              placeholder="Affiliate ID"
              value={formData.affiliateId}
              onChange={(e) => setFormData({ ...formData, affiliateId: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Partner Name</label>
            <input
              type="text"
              placeholder="Partner Name"
              value={formData.partnerName}
              onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </DashboardShell>
  );
}
