
import { Box, Typography, Paper } from '@mui/material';

const stats = [
  { title: 'Total Users', value: '1,248', color: '#2563eb' },
  { title: 'Active Users', value: '864', color: '#16a34a' },
  { title: 'Total Revenue', value: 'Rs. 85,400', color: '#9333ea' },
  { title: 'Total Orders', value: '326', color: '#ea580c' },
];

const activities = [
  { title: 'New user registered', time: 'Today, 09:30 AM', status: 'Completed' },
  { title: 'New order received', time: 'Today, 10:15 AM', status: 'New' },
  { title: 'User profile updated', time: 'Yesterday, 04:20 PM', status: 'Updated' },
];

export default function DashboardHome() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: '#f5f7fb', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Dashboard Overview
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Welcome back, Admin! Here is your dashboard summary.
      </Typography>

      {/* KPI Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        {stats.map((item) => (
          <Paper
            key={item.title}
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              borderLeft: `4px solid ${item.color}`,
            }}
          >
            <Typography color="text.secondary" variant="body2">
              {item.title}
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
              {item.value}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Recent Activity */}
      <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Recent Activity
        </Typography>

        {activities.map((activity) => (
          <Box
            key={activity.title}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              py: 2,
              borderBottom: '1px solid #eeeeee',
            }}
          >
            <Box>
              <Typography fontWeight="medium">
                {activity.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.time}
              </Typography>
            </Box>

            <Typography variant="body2" color="primary.main">
              {activity.status}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
