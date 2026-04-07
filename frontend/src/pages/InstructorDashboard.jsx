import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Users, 
  BookOpen, 
  DollarSign, 
  BarChart3, 
  MessageSquare, 
  Video, 
  CheckCircle2, 
  Clock,
  TrendingUp,
  MoreVertical
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const InstructorDashboard = () => {
  const { user } = useAuth();

  // Mock data for instructor
  const instructorStats = [
    { label: 'Total Students', value: '1,248', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Courses', value: '12', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Total Revenue', value: '$14,250', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Avg Rating', value: '4.8', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const recentCourses = [
    { id: 1, title: 'Mastering Modern React', students: 458, revenue: '$4,280', status: 'published', thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80' },
    { id: 2, title: 'UI/UX Design Masterclass', students: 312, revenue: '$2,900', status: 'published', thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?w=400&q=80' },
    { id: 3, title: 'Node.js Backend Development', students: 184, revenue: '$1,550', status: 'pending', thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80' },
  ];

  const recentQuestions = [
    { id: 1, student: 'Emily Chen', course: 'Mastering Modern React', question: 'How do I handle nested states in useReducer?', time: '2h ago' },
    { id: 2, student: 'Michael Ross', course: 'UI/UX Design Masterclass', question: 'Should I use Figma or Adobe XD for this?', time: '5h ago' },
  ];

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">Instructor Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your courses, track student progress, and grow your audience.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Video className="h-5 w-5 text-gray-400" />
              Upload Video
            </button>
            <button className="inline-flex items-center gap-2 bg-amber-600 px-4 py-2.5 rounded-xl font-bold text-white hover:bg-amber-700 transition-all shadow-md shadow-amber-200">
              <PlusCircle className="h-5 w-5" />
              Create New Course
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorStats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} p-2.5 rounded-xl`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              </div>
              <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* My Courses Table-like List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Manage Courses</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Your current catalog and performance.</p>
                </div>
                <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Course</th>
                      <th className="px-6 py-4">Students</th>
                      <th className="px-6 py-4">Revenue</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                              <img src={course.thumbnail} alt="" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-gray-900 text-sm truncate max-w-[200px]">{course.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900">{course.students}</span>
                            <span className="text-[10px] text-gray-400">Total Enrolled</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{course.revenue}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                            course.status === 'published' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {course.status === 'published' ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                            {course.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-gray-100 rounded-md text-gray-400">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Student Analytics Chart Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">Student Analytics</h2>
                <select className="bg-gray-50 border border-gray-200 text-sm font-semibold rounded-lg px-3 py-1.5 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-48 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                <BarChart3 className="h-8 w-8 mb-2 opacity-20" />
                <p className="text-xs font-medium uppercase tracking-widest opacity-40">Analytics Visualization Placeholder</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Earnings Report */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <DollarSign className="h-24 w-24 text-gray-900" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">Earnings Summary</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Balance</p>
                  <p className="text-4xl font-extrabold text-gray-900 mt-1">$4,120.00</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-bold text-gray-400">This Month</p>
                    <p className="text-lg font-bold text-gray-900 mt-0.5">$1,840</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Pending</p>
                    <p className="text-lg font-bold text-gray-900 mt-0.5">$650</p>
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white rounded-xl py-3 font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                  Withdraw Funds
                </button>
              </div>
            </div>

            {/* Q&A section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-amber-500" />
                  Recent Q&A
                </h2>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2 NEW</span>
              </div>
              <div className="space-y-6">
                {recentQuestions.map(q => (
                  <div key={q.id} className="relative pl-4 border-l-2 border-amber-200 group cursor-pointer hover:bg-amber-50/50 p-2 rounded-r-lg -ml-2 transition-colors">
                    <div className="flex justify-between items-start">
                      <p className="text-xs font-bold text-gray-900">{q.student}</p>
                      <span className="text-[10px] text-gray-400">{q.time}</span>
                    </div>
                    <p className="text-xs font-semibold text-amber-600 mt-0.5 mt-1">{q.course}</p>
                    <p className="text-sm font-medium text-gray-600 mt-1 line-clamp-2">"{q.question}"</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                Open Instructor Support
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
