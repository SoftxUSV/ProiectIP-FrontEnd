import React from 'react';
import {
  MenuItem,
  Typography,
  Box,
  Button,
  Menu,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FacultatiPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedGrupa, setSelectedGrupa] = React.useState("");  // New state for Grupa
  const [selectedMaterie, setSelectedMaterie] = React.useState("");  // New state for Materie
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [grupaAnchorEl, setGrupaAnchorEl] = React.useState<null | HTMLElement>(null); // New anchor for Grupa
  const [materieAnchorEl, setMaterieAnchorEl] = React.useState<null | HTMLElement>(null); // New anchor for Materie

  // Facultati Dropdown functions
  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setGrupaAnchorEl(null); // Close Grupa dropdown as well
    setMaterieAnchorEl(null); // Close Materie dropdown as well
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
  };

  // Grupa Dropdown functions
  const handleGrupaClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setGrupaAnchorEl(event.currentTarget);
  };

  const handleGrupaSelect = (grupa: string) => {
    setSelectedGrupa(grupa);
    handleClose();
  };

  // Materie Dropdown functions
  const handleMaterieClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMaterieAnchorEl(event.currentTarget);
  };

  const handleMaterieSelect = (materie: string) => {
    setSelectedMaterie(materie);
    handleClose();
  };

  const facultyOptions = [
    "Facultatea de inginerie electrica si stiinta calculatoarelor",
    "Facultatea de Litere și Științe ale Comunicării",
    "Facultatea de Drept și Științe Administrative",
    "Facultatea de Medicină și Științe Biologice",
    "Facultatea de Economie ,Administrație și Afaceri",
  ];

  const grupaOptions = ["1", "2", "3"]; // Options for Grupa
  const materieOptions = ["Matematica", "Fizica", "Informatica", "Chimie"]; // Options for Materie

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This makes the container fill the whole viewport height
        bgcolor: '#f0f0f0', // Optional: Add background color to the page
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
          textAlign: 'center', // Center the text inside the box
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          Facultati
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          onClick={handleDropdownClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
            marginBottom: '16px', // Add some space between the dropdowns
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

        <Typography
          variant="h6"
          sx={{
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          Grupa
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          onClick={handleGrupaClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
            marginBottom: '16px', // Add some space between the dropdowns
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

        <Typography
          variant="h6"
          sx={{
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          Materie
        </Typography>

        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          onClick={handleMaterieClick}
          sx={{
            bgcolor: '#003D7B',
            color: 'white',
            '&:hover': { bgcolor: '#0056a6' },
            width: '100%',
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
      </Box>
    </Box>
  );
};

export default FacultatiPage;
