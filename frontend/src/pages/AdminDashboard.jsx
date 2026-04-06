import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Settings, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  LayoutGrid, 
  FileText, 
  CreditCard, 
  CheckCircle, 
  XCircle,
  MoreHorizontal
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  const adminStats = [
    { label: 'Total Users', value: '14,248', icon: Users, color: 'text-indigo-600', trend: '+12%' },
    { label: 'Active Courses', value: '842', icon: BookOpen, color: 'text-blue-600', trend: '+5%' },
    { label: 'Total Revenue', value: '$124,500', icon: DollarSign, color: 'text-emerald-600', trend: '+8%' },
    { label: 'Pending Approvals', value: '24', icon: AlertCircle, color: 'text-amber-600', trend: 'Critical' },
  ];

  const pendingCourses = [
    { id: 1, title: 'Advanced Machine Learning', instructor: 'Dr. Sarah Jenkins', date: 'Oct 12, 2026', category: 'Data Science' },
    { id: 2, title: 'Professional Digital Marketing', instructor: 'Marcus Miller', date: 'Oct 14, 2026', category: 'Marketing' },
    { id: 3, title: 'Full-Stack Web Development', instructor: 'Elena Gomez', date: 'Oct 15, 2026', category: 'Development' },
  ];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <section className="rounded-3xl bg-slate-900 text-white p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                System Administrator
              </div>
              <h1 className="text-4xl font-black tracking-tight">Main Command Center</h1>
              <p className="text-slate-400 mt-2 text-lg">Platform-wide overview, revenue tracking, and content moderation.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-2xl font-bold transition-all border border-slate-700 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-900/40 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Export Reports
              </button>
            </div>
          </div>
        </section>

        {/* Action Hub - Quick Links */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { label: 'Manage Users', icon: Users, color: 'bg-blue-100 text-blue-600' },
            { label: 'Course Approvals', icon: BookOpen, color: 'bg-amber-100 text-amber-600' },
            { label: 'Category Mgmt', icon: LayoutGrid, color: 'bg-purple-100 text-purple-600' },
            { label: 'Payments', icon: CreditCard, color: 'bg-emerald-100 text-emerald-600' },
            { label: 'Reports', icon: FileText, color: 'bg-slate-100 text-slate-600' },
          ].map((action, idx) => (
            <button key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 group">
              <div className={`${action.color} p-3 rounded-xl transition-transform group-hover:scale-110`}>
                <action.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">{action.label}</span>
            </button>
          ))}
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-gray-50 rounded-xl">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  stat.trend === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Content Moderation & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Course Approvals */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Pending Course Approvals</h2>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Verify content before releasing it to the platform.</p>
                </div>
                <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">Review All</button>
              </div>
              <div className="divide-y divide-gray-100">
                {pendingCourses.map((course) => (
                  <div key={course.id} className="p-6 hover:bg-slate-50/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold border border-slate-200">
                          {course.title.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{course.title}</h3>
                          <p className="text-sm text-slate-500 font-medium">by <span className="text-indigo-600 font-bold">{course.instructor}</span> • {course.category}</p>
                          <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-widest">Submitted on {course.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 sm:flex-none p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors border border-red-100 tooltip" title="Reject">
                          <XCircle className="h-5 w-5" />
                        </button>
                        <button className="flex-1 sm:flex-none px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                          <CheckCircle className="h-5 w-5" />
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Platform Health & Alerts */}
          <div className="space-y-8">
            {/* Revenue Analytics Placeholder */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 overflow-hidden">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                <span>Revenue Flow</span>
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Instructor Payouts</span>
                  <span className="font-bold text-red-500">-$42,300</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-medium">Platform Fees</span>
                  <span className="font-bold text-emerald-600">+$18,240</span>
                </div>
                <div className="pt-4 border-t border-dashed border-gray-100 flex items-center justify-between">
                  <span className="text-slate-900 font-black">Net Profit</span>
                  <span className="text-xl font-black text-indigo-600">$100,440</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-slate-50 text-slate-600 font-bold rounded-2xl border border-slate-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-100 transition-all">
                Detailed Financials
              </button>
            </div>

            {/* System Log */}
            <div className="bg-indigo-900 rounded-3xl shadow-xl p-6 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="h-32 w-32" />
              </div>
              <h2 className="text-lg font-bold mb-6 text-indigo-100">System Logs</h2>
              <div className="space-y-5 relative z-10">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 shrink-0"></div>
                  <p className="text-xs font-medium text-indigo-100/70">Backup completed. 02:00 AM</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0"></div>
                  <p className="text-xs font-medium text-indigo-100/70">High traffic detected on 'Web Dev' category.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0"></div>
                  <p className="text-xs font-medium text-indigo-100/70">System update v2.4.0 deployed successfully.</p>
                </div>
              </div>
              <button className="w-full mt-8 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm font-bold text-xs transition-all border border-white/10 uppercase tracking-widest">
                View Full Logs
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;