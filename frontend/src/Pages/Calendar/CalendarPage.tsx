import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default calendar styles
import './CalendarPage.css'; // Your custom styles

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        className="Calendar"
        value={date}
      />
    </div>
  );
};

export default CalendarPage;
