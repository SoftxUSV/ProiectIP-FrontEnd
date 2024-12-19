import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { parse, format } from 'date-fns';  
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set up the localizer using date-fns
const localizer = dateFnsLocalizer({
  startOfWeek: (date: Date) => new Date(date),
  getDay: (date: Date) => date.getDay(),
  formats: {
    dayFormat: 'd',
    dayHeaderFormat: 'dd',
    weekdayFormat: 'EEE',
    monthHeaderFormat: 'MMMM yyyy',
    dayRangeHeaderFormat: 'MMM dd',
    eventTimeRangeFormat: 'HH:mm',
  },
  parse,
  format,
  firstDayOfWeek: 0,
});

const CalendarPage: React.FC = () => {
  // Simple event data with correct Date objects
  const [events, setEvents] = useState([
    {
      title: 'Sample Event 1',
      start: new Date(2024, 11, 15, 10, 0),  // Dec 15, 2024 10:00 AM
      end: new Date(2024, 11, 15, 12, 0),    // Dec 15, 2024 12:00 PM
      allDay: false,
    },
    {
      title: 'Sample Event 2',
      start: new Date(2024, 11, 20, 14, 0),  // Dec 20, 2024 2:00 PM
      end: new Date(2024, 11, 20, 16, 0),    // Dec 20, 2024 4:00 PM
      allDay: false,
    },
    {
      title: 'All Day Event',
      start: new Date(2024, 11, 25),  // Dec 25, 2024 (All day)
      end: new Date(2024, 11, 25),    // Dec 25, 2024 (All day)
      allDay: true,
    },
  ]);

  // Check if events are valid
  useEffect(() => {
    console.log('Events:', events); // Check events
  }, [events]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calendar Page</h1>

      {/* Render the calendar */}
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={['month', 'week', 'day']}  // Available views
        defaultView="month"  // Default view is 'month'
        popup={true}  // Enable popup for event details
      />
    </div>

  );
  
};



export default CalendarPage;
