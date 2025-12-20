import { useState, useEffect } from 'react';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setSubmissions(stored);
  }, []);

  const clearSubmissions = () => {
    localStorage.removeItem('contactSubmissions');
    setSubmissions([]);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>
        
        <div className="mb-4">
          <button
            onClick={clearSubmissions}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear All Submissions
          </button>
        </div>

        <div className="space-y-4">
          {submissions.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            submissions.map((sub) => (
              <div key={sub.id} className="bg-white p-6 rounded-lg shadow border">
                <div className="grid grid-cols-2 gap-4">
                  <div><strong>Name:</strong> {sub.name}</div>
                  <div><strong>Email:</strong> {sub.email}</div>
                  <div><strong>Phone:</strong> {sub.phone || 'N/A'}</div>
                  <div><strong>Company:</strong> {sub.company}</div>
                  <div><strong>Use Case:</strong> {sub.useCase}</div>
                  <div><strong>Timeline:</strong> {sub.timeline}</div>
                  <div className="col-span-2"><strong>Message:</strong> {sub.message}</div>
                  <div><strong>Form Type:</strong> {sub.formType}</div>
                  <div><strong>Submitted At:</strong> {new Date(sub.submittedAt).toLocaleString()}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;