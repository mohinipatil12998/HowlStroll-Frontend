 export const mockDashData = {
    admin: {
      totalWalkers: 45,
      activeUsers: 120,
      totalRevenue: 75000,
      recentBookings: [
        { id: 1, user: 'Jane Doe', walker: 'John Smith', service: 'Dog Walking', date: '2024-08-10' },
        { id: 2, user: 'Sam Wilson', walker: 'Sarah Lee', service: 'Pet Boarding', date: '2024-08-09' },
        { id: 3, user: 'Alex Chen', walker: 'Tom Evans', service: 'Pet Grooming', date: '2024-08-08' },
      ],
      pendingVerifications: 3,
      // Chart data for admin
      revenueData: [
        { name: 'Jan', revenue: 4000 },
        { name: 'Feb', revenue: 3000 },
        { name: 'Mar', revenue: 6000 },
        { name: 'Apr', revenue: 5500 },
        { name: 'May', revenue: 7000 },
        { name: 'Jun', revenue: 8500 },
        { name: 'Jul', revenue: 9000 },
        { name: 'Aug', revenue: 11000 },
      ],
      serviceDistributionData: [
        { name: 'Dog Walking', value: 50 },
        { name: 'Pet Boarding', value: 30 },
        { name: 'Pet Grooming', value: 20 },
      ],
    },
    walker: {
      name: 'John Smith',
      profilePicture: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=JS',
      upcomingAppointments: [
        { id: 1, user: 'Jane Doe', service: 'Dog Walking', time: '10:00 AM', pet: 'Buster (Dog)' },
        { id: 2, user: 'Sam Wilson', service: 'Pet Daycare', time: '1:00 PM', pet: 'Whiskers (Cat)' },
      ],
      earnings: 1200,
      rating: 4.8,
      reviews: 55,
      availability: 'Mon, Wed, Fri',
      // Chart data for walker
      dailyEarnings: [
        { day: 'Mon', earnings: 150 },
        { day: 'Tue', earnings: 180 },
        { day: 'Wed', earnings: 210 },
        { day: 'Thu', earnings: 190 },
        { day: 'Fri', earnings: 250 },
        { day: 'Sat', earnings: 300 },
        { day: 'Sun', earnings: 280 },
      ],
    },
    endUser: {
      name: 'Jane Doe',
      profilePicture: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=JD',
      upcomingBookings: [
        { id: 1, service: 'Dog Walking', walker: 'John Smith', date: 'Aug 10, 2024', time: '10:00 AM', pet: 'Buster' },
        { id: 2, service: 'Pet Grooming', walker: 'Sarah Lee', date: 'Aug 15, 2024', time: '2:30 PM', pet: 'Buster' },
      ],
      petInfo: [
        { name: 'Buster', type: 'Dog', breed: 'Golden Retriever', age: 3 },
      ],
      pastBookings: [
        { id: 3, service: 'Pet Boarding', walker: 'Tom Evans', date: 'July 25, 2024', rating: 5 },
      ],
      // Chart data for end user
      bookingDistribution: [
        { name: 'Dog Walking', value: 3 },
        { name: 'Pet Grooming', value: 2 },
        { name: 'Pet Boarding', value: 1 },
      ],
    },
  };