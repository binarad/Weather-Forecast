function Weather() {
  const date = new Date();
  const dayNumber = date.getDate();
  const day = date.getDay();
  const weekdaysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = weekdaysName[day];
  const month = date.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[month];

  return (
    <div className="w-1200 h-850 bg-violet-450 rounded-xl flex">
      <div className="flex text-3xl">
        <svg
          className="h-5 w-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h1 className="">City</h1>
        <h1>
          {currentMonth} {dayNumber}
        </h1>
        <h1>{currentDay}</h1>
      </div>
    </div>
  );
}

export default Weather;
