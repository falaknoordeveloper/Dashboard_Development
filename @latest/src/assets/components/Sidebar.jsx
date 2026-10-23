
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

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

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 3, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            aria-label="close drawer"
            onClick={() => setOpen(false)}
          >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {['Dashboard', 'Users', 'Orders', 'Messages'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? 3 : 'auto',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {['Settings', 'Help'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: open ? 'initial' : 'center',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: open ? 3 : 'auto',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Dashboard Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          minHeight: '100vh',
          p: { xs: 2, md: 4 },
          backgroundColor: '#f5f7fb',
        }}
      >
        <DrawerHeader />

      <Typography
  variant="h4"
  fontWeight="bold"
  gutterBottom
  sx={{ textAlign: 'center' }}
>
  Dashboard Overview
</Typography>

<Typography
  color="text.secondary"
  sx={{ mb: 4, textAlign: 'center' }}
>
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
              <Typography variant="body2" color="text.secondary">
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
    </Box>
  );
}
