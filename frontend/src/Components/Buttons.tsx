import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Buttons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Button variant="contained" color="primary" style={{ margin: '10px' }} onClick={() => navigate('/create-exam')}>
        Creare Examen
      </Button>
      <Button variant="contained" color="secondary" style={{ margin: '10px' }} onClick={() => navigate('/schedule-exam')}>
        Programare Examen
      </Button>
      <Button variant="contained" color="success" style={{ margin: '10px' }} onClick={() => navigate('/view-exams')}>
        Afișare Examene
      </Button>
    </div>
  );
};

export default Buttons;
