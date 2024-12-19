import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const Header: React.FC = () => {
    const logos = [
        'https://via.placeholder.com/100x50.png?text=Logo1',
        'https://via.placeholder.com/100x50.png?text=Logo2',
        'https://via.placeholder.com/100x50.png?text=Logo3',
    ];

    const randomLogo = logos[Math.floor(Math.random() * logos.length)];

    const userProfileImage = 'https://via.placeholder.com/40.png';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#003D7B',
                color: 'white',
                marginBottom: '10px',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                    alt="Logo"
                    style={{ width: '100px', height: '80px' }}
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
