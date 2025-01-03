import React from 'react';
import { Box, Avatar } from '@mui/material';
import logo from '../../Images/LOGOIP.png'; // Adjust the path as necessary
import './Header.css';

const Header: React.FC = () => {
    const userProfileImage = ''; // Add a valid user profile image path or URL if available

    return (
        <Box className="header-container">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                    src={userProfileImage}
                    alt="User"
                    sx={{ width: 40, height: 40, marginRight: '20px' }}
                />
            </Box>
        </Box>
    );
};

export default Header;
