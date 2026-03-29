import { Link } from 'react-router-dom';
import { Users, BookOpen, DollarSign, Settings, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className="rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-indigo-200 font-semibold">Admin Panel</p>
              <h1 className="text-3xl font-extrabold mt-2">Welcome, {user?.name || 'Admin'}</h1>
              <p className="text-indigo-200 mt-2">Manage users, courses, and platform settings.</p>
            </div>
            <div className="flex gap-4">
              <Link to="/admin/settings" className="px-4 py-2 bg-white text-indigo-900 rounded-md font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Total Users</span>
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">1,248</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12% this month
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Active Courses</span>
              <BookOpen className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">142</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +5 new this week
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Revenue</span>
              <DollarSign className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">$24,500</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +8% this month
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">Instructors</span>
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-extrabold text-gray-900">48</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Recent Registrations</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                      U{i}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">New User {i}</p>
                      <p className="text-xs text-gray-500">user{i}@example.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">2 hours ago</span>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-indigo-600 font-semibold hover:text-indigo-800">View all users</button>
          </div>
          
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">System Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
                <strong>Notice:</strong> Server maintenance scheduled for upcoming weekend.
              </div>
              <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm">
                <strong>Success:</strong> Daily backup completed successfully.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;