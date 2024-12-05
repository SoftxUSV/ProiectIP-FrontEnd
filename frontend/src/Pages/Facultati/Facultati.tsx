import React from 'react';
import Button from '@mui/material/Button';
const  Facultati= () => {
    return (
      <div>
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
            FIESC
          </Button>
            </div>
        );
    }
export default Facultati;