// src/pages/Dashboard.js
import React from 'react';
import InboxItem from './InboxItem';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black"> {/* Set global text color to black */}
      {/* Sidebar */}
      <aside className="w-1/5 bg-yellow-100 p-4">
        <div className="space-y-4">
          <button className="w-full flex items-center space-x-2 p-3 rounded bg-yellow-200 hover:bg-yellow-300 text-black">
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-3 rounded bg-yellow-200 hover:bg-yellow-300 text-black">
            <span>📝</span>
            <span>Exams</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-3 rounded bg-yellow-200 hover:bg-yellow-300 text-black">
            <span>📥</span>
            <span>Inbox</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-3 rounded bg-yellow-200 hover:bg-yellow-300 text-black">
            <span>📄</span>
            <span>Docs</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-3 rounded bg-yellow-200 hover:bg-yellow-300 text-black">
            <span>📅</span>
            <span>Calendar</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-4/5 p-6 text-black">
        {/* Search Bar */}
        <header className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
          />
          <div className="flex space-x-4">
            <button className="text-black">📷</button>
            <button className="text-black">📄</button>
            <button className="text-black">👤</button>
          </div>
        </header>

        {/* Inbox Section */}
        <section className="bg-white p-4 rounded-lg shadow-md mb-6 text-black">
          <h2 className="font-bold text-lg mb-4 text-black">Inbox</h2>
          <div className="space-y-2">
            <InboxItem text="You have an exam today at 16:00 in C202" />
            <InboxItem text="You have an exam tomorrow, 22/10/24, at 16:00" />
            <InboxItem text="New Doc was added by Turcu Cristina Elena at 15:00 12/10/24" />
            <InboxItem text="New Exam was added by Turcu Cristina Elena at 14:46 12/10/24" />
          </div>
        </section>

        {/* Details Section */}
        <section className="bg-blue-100 p-4 rounded-lg shadow-md text-black">
          <h2 className="font-bold text-lg mb-2 text-black">Exam Details</h2>
          <p>Today, 22/10/24, at 16:00 you have the Ingineria Programelor exam in room C202. Good luck!</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
