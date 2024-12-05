import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const SubjectDropdown: React.FC = () => {
  const [subject, setSubject] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" style={{ minWidth: 200, margin: '20px' }}>
      <InputLabel id="subject-label">Alege Materia</InputLabel>
      <Select
        labelId="subject-label"
        value={subject}
        onChange={handleChange}
        label="Alege Materia"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="matematica">Matematică</MenuItem>
        <MenuItem value="informatica">Informatică</MenuItem>
        <MenuItem value="fizica">Fizică</MenuItem>
        <MenuItem value="Sisteme inteligente">Sisteme inteligente</MenuItem>
        {/* Adaugă mai multe materii după cum este necesar */}
      </Select>
    </FormControl>
  );
};

export default SubjectDropdown;
