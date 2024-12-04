import React from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      style={{ background: 'linear-gradient(to bottom, #000428, #004e92)' }}
    >
      <Box
        sx={{
          width: 300,
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          LOGIN
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
              padding: '4px 10px',
            }}
          >
            <MailOutlineIcon sx={{ marginRight: 1, color: '#555' }} />
            <TextField
              variant="standard"
              placeholder="Email"
              InputProps={{ disableUnderline: true }}
              fullWidth
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
              padding: '4px 10px',
            }}
          >
            <LockOutlinedIcon sx={{ marginRight: 1, color: '#555' }} />
            <TextField
              variant="standard"
              type="password"
              placeholder="Password"
              InputProps={{ disableUnderline: true }}
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1e40af',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 0',
              '&:hover': {
                backgroundColor: '#153e75',
              },
            }}
          >
            LOGIN
          </Button>
        </Box>
        <Typography variant="body2" mt={2} color="text.secondary">
          Don’t have an account?{' '}
          <Typography
            component="span"
            color="primary"
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Register
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
