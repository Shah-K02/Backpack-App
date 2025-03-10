import React, { useState } from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';
import BpkCalendar from '@skyscanner/backpack-web/bpk-component-calendar';
import format from 'date-fns/format';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const formatDate = (date) => format(date, 'yyyy-MM-dd');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

const getClassName = cssModules(STYLES);

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={getClassName('App')}>
      <header className={getClassName('App__header')}>
        <div className={getClassName('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>
            Flight Schedule
          </BpkText>
        </div>
      </header>
      <main className={getClassName('App__main')}>
        <BpkText tagName="p" className={getClassName('App__text')}>
          To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
        </BpkText>

        {/* Add the Calendar Component */}
        <div className={getClassName('App__calendar')}>
          <BpkCalendar
            id="calendar"
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1} // Monday
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={{
              type: 'single',
              date: selectedDate,
            }}
          />
        </div>

        {/* Continue Button */}
        <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
      </main>
    </div>
  );
};

export default App;