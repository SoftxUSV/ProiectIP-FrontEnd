import React from 'react';
import {
  MenuItem,
  Typography,
  Box,
  Button,
  Menu,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation

const FacultatiPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedGrupa, setSelectedGrupa] = React.useState("");
  const [selectedMaterie, setSelectedMaterie] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [grupaAnchorEl, setGrupaAnchorEl] = React.useState<null | HTMLElement>(null);
  const [materieAnchorEl, setMaterieAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate(); // Hook to navigate between pages

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setGrupaAnchorEl(null);
    setMaterieAnchorEl(null);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
  };

  const handleGrupaClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setGrupaAnchorEl(event.currentTarget);
  };

  const handleGrupaSelect = (grupa: string) => {
    setSelectedGrupa(grupa);
    handleClose();
  };

  const handleMaterieClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMaterieAnchorEl(event.currentTarget);
  };

  const handleMaterieSelect = (materie: string) => {
    setSelectedMaterie(materie);
    handleClose();
  };

  const handleGoToCalendar = () => {
    navigate('/calendar', { state: { facultati: selectedOption, grupa: selectedGrupa, materie: selectedMaterie } });
  };

  const facultyOptions = [
    "Facultatea de inginerie electrica si stiinta calculatoarelor",
    "Facultatea de Litere și Științe ale Comunicării",
    "Facultatea de Drept și Științe Administrative",
    "Facultatea de Medicină și Științe Biologice",
    "Facultatea de Economie ,Administrație și Afaceri",
  ];

  const grupaOptions = ["1", "2", "3"];
  const materieOptions = ["Matematica", "Fizica", "Informatica", "Chimie"];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          width: '300px',
          bgcolor: '#003D7B',
          color: 'white',
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Facultati
        </Typography>
        <Button
          variant="contained"
          onClick={handleDropdownClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
            marginBottom: '16px',
          }}
        >
          {selectedOption || 'Select an option'}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            sx: {
              bgcolor: '#003D7B',
              color: 'white',
            },
          }}
        >
          {facultyOptions.map((option, index) => (
            <MenuItem
              key={index}
              onClick={() => handleSelect(option)}
              sx={{
                bgcolor: '#003D7B',
                color: 'white',
                '&:hover': { bgcolor: '#0056a6' },
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        {/* Repeat for Grupa and Materie with similar logic */}
        <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Grupa
        </Typography>
        <Button
          variant="contained"
          onClick={handleGrupaClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
            marginBottom: '16px',
          }}
        >
          {selectedGrupa || 'Select a Grupa'}
        </Button>
        <Menu
          anchorEl={grupaAnchorEl}
          open={Boolean(grupaAnchorEl)}
          onClose={handleClose}
          MenuListProps={{
            sx: {
              bgcolor: '#003D7B',
              color: 'white',
            },
          }}
        >
          {grupaOptions.map((grupa, index) => (
            <MenuItem
              key={index}
              onClick={() => handleGrupaSelect(grupa)}
              sx={{
                bgcolor: '#003D7B',
                color: 'white',
                '&:hover': { bgcolor: '#0056a6' },
              }}
            >
              {grupa}
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Materie
        </Typography>
        <Button
          variant="contained"
          onClick={handleMaterieClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
            marginBottom: '16px',
          }}
        >
          {selectedMaterie || 'Select a Materie'}
        </Button>
        <Menu
          anchorEl={materieAnchorEl}
          open={Boolean(materieAnchorEl)}
          onClose={handleClose}
          MenuListProps={{
            sx: {
              bgcolor: '#003D7B',
              color: 'white',
            },
          }}
        >
          {materieOptions.map((materie, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMaterieSelect(materie)}
              sx={{
                bgcolor: '#003D7B',
                color: 'white',
                '&:hover': { bgcolor: '#0056a6' },
              }}
            >
              {materie}
            </MenuItem>
          ))}
        </Menu>
        <Button
          variant="contained"
          onClick={handleGoToCalendar}
          sx={{
            bgcolor: '#0056a6',
            color: 'white',
            '&:hover': { bgcolor: '#007bff' },
            width: '100%',
            marginTop: '16px', // Add spacing above the button
          }}
        >
          Go to Calendar
        </Button>
      </Box>
    </Box>
  );
};

export default FacultatiPage;
