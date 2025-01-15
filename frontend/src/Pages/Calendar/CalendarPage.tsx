import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface LocationState {
  facultati: string;
  grupa: string;
  materie: string;
}

interface ExamDetails {
  name: string;
  scheduledDate: Date | null;
  groupId: string;
  duration: string;
  location: string;
}

interface ExamResponse {
  name: string;
  scheduledDate: string;
  groupId: string;
  duration: string;
  location: string;
}

const CalendarPage: React.FC = () => {
  const [examDetails, setExamDetails] = useState<ExamDetails>({
    name: '',
    scheduledDate: null,
    groupId: '',
    duration: '',
    location: ''
  });
  const [examResponses, setExamResponses] = useState<ExamResponse[]>([]);

  // Fetch exams when component mounts
  useEffect(() => {
    fetch('http://localhost:7140/api/exams')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setExamResponses(data))
      .catch(error => console.error('Failed to fetch exams:', error));
  }, []);

  const handleChange = (value: string | Date | null, fieldName: keyof ExamDetails) => {
    setExamDetails({
      ...examDetails,
      [fieldName]: value instanceof Date ? value : value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!examDetails.scheduledDate || !examDetails.name || !examDetails.groupId || !examDetails.duration) {
      alert("Please make sure all fields are correctly filled.");
      return;
    }

    const payload = {
      ...examDetails,
      groupId: parseInt(examDetails.groupId),
      duration: parseInt(examDetails.duration),
      scheduledDate: examDetails.scheduledDate.toISOString()
    };

    try {
      const response = await fetch('http://localhost:7140/api/exams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.json(); // Assuming the server returns JSON with error details
        throw new Error(`Failed to save the exam: ${JSON.stringify(errorText)}`);
      }

      const data = await response.json();
      setExamResponses([...examResponses, data]);
      alert('Exam set successfully!');
    } catch (error) {
      console.error('Failed to save the exam:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%'
    }}>
      <div style={{
        width: '50%',
        minWidth: '300px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginRight: '20px'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label>Select Date:</label>
          <DatePicker
            selected={examDetails.scheduledDate}
            onChange={(date) => handleChange(date, 'scheduledDate')}
            dateFormat="MMMM d, yyyy"
            wrapperClassName="datePicker"
          />
        </div>
        <h6>Exam Details</h6>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Exam Name"
            value={examDetails.name}
            onChange={(e) => handleChange(e.target.value, 'name')}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <input
            type="text"
            placeholder="Group ID"
            value={examDetails.groupId}
            onChange={(e) => handleChange(e.target.value, 'groupId')}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <input
            type="text"
            placeholder="Duration (minutes)"
            value={examDetails.duration}
            onChange={(e) => handleChange(e.target.value, 'duration')}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <input
            type="text"
            placeholder="Location"
            value={examDetails.location}
            onChange={(e) => handleChange(e.target.value, 'location')}
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <button type="submit" style={{ marginTop: '20px' }}>Set Exam</button>
        </form>
      </div>
      <div style={{
        width: '30%',
        minWidth: '200px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        overflowY: 'auto'
      }}>
        <h6>Submitted Exams</h6>
        {examResponses.map((exam, index) => (
          <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Name:</strong> {exam.name}</p>
            <p><strong>Date:</strong> {exam.scheduledDate}</p>
            <p><strong>Group ID:</strong> {exam.groupId}</p>
            <p><strong>Duration:</strong> {exam.duration}</p>
            <p><strong>Location:</strong> {exam.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
