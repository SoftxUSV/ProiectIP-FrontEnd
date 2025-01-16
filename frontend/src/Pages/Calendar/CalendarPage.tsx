import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/exams');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch exams: ${response.status} - ${errorText}`);
      }
      const data = await response.json();
      console.log('Fetched exams:', data);
      setExamResponses(data);
    } catch (error) {
      console.error(error);
      setFetchError(error instanceof Error ? error.message : 'Unknown error fetching exams');
    }
  };

  const handleChange = (value: string | Date | null, fieldName: keyof ExamDetails) => {
    setExamDetails(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    if (!examDetails.scheduledDate || !examDetails.name || !examDetails.groupId || !examDetails.duration || !examDetails.location) {
      alert("Please ensure all fields are filled out.");
      return;
    }

    const payload = {
      ...examDetails,
      groupId: parseInt(examDetails.groupId),
      duration: parseInt(examDetails.duration),
      scheduledDate: examDetails.scheduledDate.toISOString(),
      location: examDetails.location
    };

    try {
      const response = await fetch('http://localhost:5000/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save the exam: ${response.status} - ${errorText}`);
      }

      const newExam = await response.json();
      console.log('Submitted exam:', newExam);
      setExamResponses(prev => [...prev, newExam]);
      alert('Exam added successfully!');
    } catch (error) {
      console.error(error);
      setSubmitError(error instanceof Error ? error.message : 'Unknown error submitting exam');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <div style={{ width: '50%', minWidth: '300px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'white', marginRight: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label>Select Date:</label>
          <DatePicker
            selected={examDetails.scheduledDate}
            onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
              console.log('Selected date:', date);
              handleChange(date, 'scheduledDate');
            }}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <h6>Exam Details</h6>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Exam Name" value={examDetails.name} onChange={(e) => handleChange(e.target.value, 'name')} style={{ display: 'block', marginBottom: '10px', width: '100%' }} />
          <input type="text" placeholder="Group ID" value={examDetails.groupId} onChange={(e) => handleChange(e.target.value, 'groupId')} style={{ display: 'block', marginBottom: '10px', width: '100%' }} />
          <input type="text" placeholder="Duration (minutes)" value={examDetails.duration} onChange={(e) => handleChange(e.target.value, 'duration')} style={{ display: 'block', marginBottom: '10px', width: '100%' }} />
          <input type="text" placeholder="Location" value={examDetails.location} onChange={(e) => handleChange(e.target.value, 'location')} style={{ display: 'block', marginBottom: '10px', width: '100%' }} />
          <button type="submit" style={{ marginTop: '20px' }}>Set Exam</button>
        </form>
        {submitError && <p style={{ color: 'red' }}>Error submitting exam: {submitError}</p>}
      </div>
      <div style={{ width: '10%', minWidth: '200px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'white', overflowY: 'auto' }}>
        <h6>Submitted Exams</h6>
        {examResponses.map((exam, index) => (
          <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <p><strong>Name:</strong> {exam.name}</p>
            <p><strong>Date:</strong> {new Date(exam.scheduledDate).toLocaleDateString()}</p>
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
