'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 5;

const ContactPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);
  const paginatedContacts = contacts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/contact');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error('Failed to load contacts', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleDeleteAll = async () => {
    if (!confirm('⚠ Are you sure you want to delete all contact messages?')) return;

    try {
      const res = await fetch(`/api/contact?all=true`, { method: 'DELETE' });
      if (res.ok) {
        setContacts([]);
        setPage(1);
      }
    } catch (err) {
      console.error('Delete all failed:', err);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 font-inter text-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold font-poppins text-blue-800">Contact Submissions</h1>
            <p className="text-gray-600 mt-1">View and manage messages sent through the contact form.</p>
          </div>
          {contacts.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="mt-4 sm:mt-0 bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition"
            >
              Delete All
            </button>
          )}
        </header>

        <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
          {loading ? (
            <p className="p-6 text-gray-500 text-center">Loading...</p>
          ) : contacts.length === 0 ? (
            <p className="p-6 text-gray-500 text-center">No contact submissions found.</p>
          ) : (
            <table className="min-w-full table-auto divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Message</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium">{contact.name}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{contact.email}</td>
                    <td className="px-6 py-4 text-sm">{contact.phone || '-'}</td>
                    <td className="px-6 py-4 text-sm">{contact.subject}</td>
                    <td className="px-6 py-4 text-sm max-w-xs break-words">{contact.message}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {contacts.length > ITEMS_PER_PAGE && (
          <nav className="flex justify-center mt-6 space-x-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 text-sm font-semibold rounded-md ${
                page === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-sm text-gray-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className={`px-4 py-2 text-sm font-semibold rounded-md ${
                page === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
