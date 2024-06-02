// import { useState, useEffect } from "react";

// const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=485589c5ce3b49e2a1d182121242805&q=Kyiv&aqi=no`

// function Weather() {
//   const date = new Date();
//   const dayNumber = date.getDate();
//   const day = date.getDay();
//   const weekdaysName = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   const currentDay = weekdaysName[day];
//   const month = date.getMonth();
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const currentMonth = months[month];
//   const [temp, setTemp] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch(BASE_URL);
//       const data = await result.json();
//       console.log(data);

//     }
//     fetchData();
//   }, []);

//   return (
// 		<div className='w-1200 h-850 bg-violet-450 rounded-xl flex p-3 '>
// 			<div className='flex w-40 flex-col'>
// 				<h1 id='City'>Kyiv</h1>
// 				<h1 className='text-xl'>
// 					{currentMonth} {dayNumber}
// 				</h1>
// 				<h1 className='text-xl mx-1'>{currentDay}</h1>
// 				<p>{temp}</p>
// 			</div>
// 			<div className='flex w-500 h-80 justyfy-center items-center'></div>
// 		</div>
// 	)
// }

// export default Weather;
