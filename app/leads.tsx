// leads.tsx
"use client";

import React, { useEffect, useState } from "react";

interface Contact {
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
}

const LeadsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    const fetchContacts = async () => {
      try {
        const response = await fetch("/api/contacts");
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch contacts");
        }
        
        const fetchedContacts: Contact[] = await response.json();
        setContacts(fetchedContacts);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Helper function to format name
  const formatName = (firstname: string | null, lastname: string | null) => {
    if (firstname && lastname) return `${firstname} ${lastname}`;
    if (firstname) return firstname;
    if (lastname) return lastname;
    return "Unnamed Contact";
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen text-xl">
      Loading contacts...
    </div>
  );
  
  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded">
      Error: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact List</h1>
      
      {contacts.length === 0 ? (
        <p className="text-center text-gray-600">No contacts found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr 
                  key={contact.id} 
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="p-3 text-gray-700">{contact.id}</td>
                  <td className="p-3 font-medium">
                    {formatName(contact.firstname, contact.lastname)}
                    {contact.lastname?.includes("(Sample Contact)") && (
                      <span className="text-xs text-gray-500 ml-2">
                        (Sample)
                      </span>
                    )}
                  </td>
                  <td className="p-3">
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-blue-600 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-4 text-center text-gray-600">
            Total Contacts: {contacts.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;