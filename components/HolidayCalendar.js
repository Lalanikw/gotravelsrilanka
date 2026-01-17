'use client';

import React, { useState, useEffect } from 'react';

const HolidayCalendar = () => {
  const [holidays, setHolidays] = useState([]);
  const [isFallback, setIsFallback] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch('/api/holidays');
        const data = await response.json();

        if (data.holidays && Array.isArray(data.holidays)) {
          setHolidays(data.holidays);
          setIsFallback(data.isFallback || false);
        } else {
          throw new Error('Unexpected response format from server');
        }
      } catch (error) {
        console.error('Error fetching holidays:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, []);


  if (isLoading) {
    return <div>Loading holidays...</div>;
  }

  if (error) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Holidays</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
          <p className="mt-2">Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Holidays</h2>
      {isFallback && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Note: </strong>
          <span className="block sm:inline">We are currently displaying a limited list of holidays due to temporary issues. Please check back later for a complete list.</span>
        </div>
      )}
      {holidays.length > 0 ? (
        <ul className="space-y-2">
          {holidays.map((holiday) => (
            <li key={holiday.date} className="bg-white shadow rounded p-4">
              <span className="font-semibold">{new Date(holiday.date).toLocaleDateString()}</span>: {holiday.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No holidays found.</p>
      )}
    </div>
  );
};

export default HolidayCalendar;
