declare module 'react-big-calendar' {
    import * as React from 'react';
  
    export interface Event {
      title: string;
      start: Date;
      end: Date;
      allDay: boolean;
    }
  
    export const Calendar: React.ComponentType<any>;
    export const dateFnsLocalizer: (options: any) => any;
  }
  