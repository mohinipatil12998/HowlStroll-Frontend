import React, { useState } from 'react';
import {
  User,
  Crown,
  Dog,
  Calendar,
  DollarSign,
  Briefcase,
  List,
  Mail,
  Phone,
  Star,
  MapPin,
  Clock,
  Settings,
  Shield,
  MessageCircle,
  PawPrint,
} from 'lucide-react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { mockDashData } from '../../data/dashbord';

// The main App component for the dashboard
function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [userType, setUserType] = useState('ADMIN'); // State to control the current dashboard view

  const renderDashboardContent = (
    userType = 'USER'
  ) => {
    switch (userType) {
      case 'ADMIN':
        return (
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <PawPrint size={40} className="text-indigo-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Walkers</p>
                    <p className="text-3xl font-bold text-gray-900">{mockDashData.admin.totalWalkers}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-green-500 font-semibold">+15% this month</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <User size={40} className="text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">{mockDashData.admin.activeUsers}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-green-500 font-semibold">+8% this month</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <DollarSign size={40} className="text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${mockDashData.admin.totalRevenue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-green-500 font-semibold">+22% this quarter</span>
                </div>
              </div>
            </div>

            {/* Admin Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Revenue</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockDashData.admin.revenueData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={mockDashData.admin.serviceDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                      {mockDashData.admin.serviceDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#4f46e5', '#3b82f6', '#10b981'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Bookings</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Walker</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockDashData.admin.recentBookings.map(booking => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.walker}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.service}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pending Walker Verifications</h3>
              <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                <Shield size={24} className="text-yellow-500" />
                <p className="text-gray-800">You have {mockDashData.admin.pendingVerifications} walker applications awaiting review.</p>
              </div>
            </div>
          </div>
        );
      case 'SERVICE_PROVIDER':
        return (
          // Walker Dashboard Content
          <div className="p-8 space-y-8">
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-md space-y-4 md:space-y-0 md:space-x-8">
              <img src={mockDashData.walker.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover shadow-lg" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900">{mockDashData.walker.name}</h2>
                <div className="flex items-center justify-center md:justify-start mt-2 text-yellow-500">
                  <Star size={20} />
                  <span className="ml-1 text-gray-700 font-semibold">{mockDashData.walker.rating} ({mockDashData.walker.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-2 text-gray-600">
                  <p className="flex items-center"><MapPin size={16} className="mr-1 text-indigo-500" /> Pimpri-chinchwad, India</p>
                  <p className="ml-4 flex items-center"><Shield size={16} className="mr-1 text-indigo-500" /> Verified</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
            
            {/* Walker Earnings Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Earnings</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockDashData.walker.dailyEarnings}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="earnings" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Appointments</h3>
                <ul className="space-y-4">
                  {mockDashData.walker.upcomingAppointments.map(app => (
                    <li key={app.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Calendar size={24} className="text-indigo-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{app.service} for {app.user}</p>
                        <p className="text-gray-600 text-sm">{app.time} - {app.pet}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Earnings & Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <DollarSign size={24} className="text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Total Earnings (This Month)</p>
                      <p className="text-gray-600 text-lg font-bold">${mockDashData.walker.earnings}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Clock size={24} className="text-gray-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Your Availability</p>
                      <p className="text-gray-600 text-sm">{mockDashData.walker.availability}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'USER':
      default:
        return (
          // End User Dashboard Content
          <div className="p-8 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <img src={mockDashData.endUser.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover shadow-lg" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900">Welcome, {mockDashData.endUser.name}!</h2>
                <p className="text-gray-600">Manage your bookings and pet information.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                  Book a New Service
                </button>
              </div>
            </div>
            
            {/* End User Booking Distribution Chart */}
            <div className="bg-white p-6 rounded-xl shadow-md flex justify-center">
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Booking Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={mockDashData.endUser.bookingDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#4f46e5" label>
                      {mockDashData.endUser.bookingDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#4f46e5', '#10b981', '#3b82f6'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Bookings</h3>
                <ul className="space-y-4">
                  {mockDashData.endUser.upcomingBookings.map(booking => (
                    <li key={booking.id} className="p-4 bg-gray-50 rounded-lg shadow-inner">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-900">{booking.service} with {booking.walker}</p>
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">{booking.pet}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{booking.date} at {booking.time}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">My Pets</h3>
                <ul className="space-y-4">
                  {mockDashData.endUser.petInfo.map(pet => (
                    <li key={pet.name} className="p-4 bg-gray-50 rounded-lg shadow-inner">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-900">{pet.name}</p>
                        <span className="text-xs font-semibold text-gray-600 bg-gray-200 px-2 py-1 rounded-full">{pet.type}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Breed: {pet.breed}, Age: {pet.age}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Past Bookings</h3>
              <ul className="space-y-4">
                {mockDashData.endUser.pastBookings.map(booking => (
                  <li key={booking.id} className="p-4 bg-gray-50 rounded-lg shadow-inner">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-900">{booking.service} with {booking.walker}</p>
                      <div className="flex items-center text-yellow-500">
                        <Star size={16} />
                        <span className="ml-1 text-gray-700">{booking.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Completed on {booking.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar for navigation */}
      {/* <aside className="bg-gray-800 text-white w-full md:w-64 p-6 flex flex-col md:min-h-screen">
        <div className="flex items-center justify-between md:justify-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => setUserType('endUser')}
            className={`w-full flex items-center space-x-3 p-4 rounded-xl font-semibold transition-colors duration-300 ${
              userType === 'endUser' ? 'bg-indigo-600' : 'hover:bg-gray-700'
            }`}
          >
            <User size={20} />
            <span>End User Dashboard</span>
          </button>
          <button
            onClick={() => setUserType('walker')}
            className={`w-full flex items-center space-x-3 p-4 rounded-xl font-semibold transition-colors duration-300 ${
              userType === 'walker' ? 'bg-indigo-600' : 'hover:bg-gray-700'
            }`}
          >
            <Dog size={20} />
            <span>Walker Dashboard</span>
          </button>
          <button
            onClick={() => setUserType('admin')}
            className={`w-full flex items-center space-x-3 p-4 rounded-xl font-semibold transition-colors duration-300 ${
              userType === 'admin' ? 'bg-indigo-600' : 'hover:bg-gray-700'
            }`}
          >
            <Crown size={20} />
            <span>Admin Dashboard</span>
          </button>
        </nav>
      </aside>
       */}
      {/* Main content area */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        {renderDashboardContent(userType)}
      </div>
    </div>
  );
}

export default Dashboard;
