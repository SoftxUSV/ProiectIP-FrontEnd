import React from 'react';
import Button from '@mui/material/Button';

const BackButton: React.FC = () => {
    const goBack = () => {
        window.history.back();
    };
    
    return (
        <Button variant="contained" color="primary" onClick={goBack}>
            Back
        </Button>
    );
};

export default BackButton;
