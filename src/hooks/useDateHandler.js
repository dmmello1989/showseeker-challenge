import { useState } from "react";

export const useDateHandler = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue == "") {
      return setSelectedDays([]);
    }

    // Format the input value to lowercase and convert it into an array
    const daysArray = inputValue.toLowerCase().split(',');
    // Temporary Set to prevent repeated numbers
    const tempSelectedDays = new Set;

    daysArray.forEach(day => {
      // Get rid of unwanted spaces
      const trimDay = day.trim();

      if (trimDay.includes('-')) {
        // Convert consecutive days into an array
        const consecutiveDays = trimDay.split('-');
        // Get the number corresponding to the first day of the consecutive days 
        const firstDay = convertDayToNumber(consecutiveDays[0].trim());
        // Get the number corresponding to the last day of the consecutive days
        const lastDay = convertDayToNumber(consecutiveDays[1].trim());

        if (firstDay === 0 || lastDay === 0) {
          return tempSelectedDays.add(0);
        }

        if (firstDay > lastDay) {
           // Add numbers from firstDay to 7
          for (let number = firstDay; number <= 7; number++) {
            tempSelectedDays.add(number);
          }
          // Add numbers from 1 to lastDay
          for (let number = 1; number <= lastDay; number++) {
            tempSelectedDays.add(number);
          }
        }

        // Use firstDay and lastDay in a loop to add number into the temporary array
        for (let number = firstDay; number <= lastDay; number++) {
          tempSelectedDays.add(number);
        }
      } else {
        // If the day is just a string, convert it to it's corresponding number and push it into the temporary array
        tempSelectedDays.add(convertDayToNumber(trimDay));
      }
    });

    // Create array from temporary Set and update selectedDays state
    setSelectedDays(Array.from(tempSelectedDays));
  };

  const convertDayToNumber = (day) => {
    switch (day) {
      case 'm':
      case 'mon':
      case 'monday':
        return 1;
      case 't':
      case 'tue':
      case 'tuesday':
        return 2;
      case 'w':
      case 'wed':
      case 'wednesday':
        return 3;
      case 'th':
      case 'thu':
      case 'thursday':
        return 4;
      case 'f':
      case 'fri':
      case 'friday':
        return 5;
      case 's':
      case 'sat':
      case 'saturday':
        return 6;
      case 'su':
      case 'sun':
      case 'sunday':
        return 7;
      default:
        return 0;
    }
  };

  console.log({
    inputValue,
    selectedDays
  })

  return {
    inputValue,
    selectedDays,
    handleSubmit,
    setInputValue
  };
}