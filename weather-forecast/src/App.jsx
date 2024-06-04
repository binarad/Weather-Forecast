import { useState} from 'react'
import UnknownWeather from './assets/UnknownWeather.png'
import HumidityImg from "./assets/humidity.png"
import WindSpeedImg from "./assets/windSpeed.png"
import SunRiseImg from "./assets/sunrise.png"
import SunSetImg from "./assets/sunset.png"
import UVIndexImg from "./assets/uvindex.png"

const date = new Date()
const dayNumber = date.getDate()
const day = date.getDay()
const weekdaysName = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const shortenedWeekDays = [
	'Sun',
	'Mon',
	'Tues',
	'Wed',
	'Thurs',
	'Fri',
	'Sat'
]
const currentDay = weekdaysName[day]
const month = date.getMonth()
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const currentMonth = months[month];
function App() {
  const [temp, setTemp] = useState(0); //For Temperature
  const [cond, setCond] = useState(""); //For Condition Name
  const [condImg, setCondImg] = useState(""); // For Condition Image
  const [feelsLike, setFeelsLike] = useState(0); // For Feels Like Temp
  const [cityName, setCityName] = useState("City"); // For City Name
  const [value, setValue] = useState(""); // For Input
  const [humidity, setHumidity] = useState("0"); //For Humidity
  const [windSpeed, setWindSpeed] = useState(""); // For Wind Speed 
  const [sunRise, setSunRise] = useState("00:00AM"); // For Sun Rise Time
  const [sunSet, setSunSet] = useState("00:00PM"); // For Sun Set time 
  const [uvIndex, setUVIndex] = useState(0);
  const [hourlyTemp, setHourlyTemp] = useState([]);
  const [nextDaysForecast, setNextDaysForecast] = useState([]);



  const fetchData = () => {
	fetch(`http://api.weatherapi.com/v1/forecast.json?key=485589c5ce3b49e2a1d182121242805&q=${value}&days=7&aqi=no&alerts=no`	)
		.then(res => res.json())
		.then(data => {
			const hourOfForecast = data.forecast.forecastday[0].hour
			const forecastDays = data.forecast.forecastday
			// console.log(newTime);
			setTemp(Math.floor(data.current.temp_c))
			setCond(data.current.condition.text)
			setCondImg(data.current.condition.icon)
			setFeelsLike(Math.floor(data.current.feelslike_c))
			setCityName(data.location.name)
			setHumidity(data.current.humidity)
			setSunRise(data.forecast.forecastday[0].astro.sunrise)
			setSunSet(data.forecast.forecastday[0].astro.sunset)
			setWindSpeed(data.current.wind_kph)
			setUVIndex(data.current.uv)
			let newHours = []
			let weekdaysForecast = []
			for (let i = 0; i < hourOfForecast.length; i++) {
				newHours.push(
					<div className='flex flex-col m-1 border-separate h-full justify-between w-10'>
						<h1>{hourOfForecast[i].time.slice(11)}</h1>{' '}
						<h1>{Math.floor(hourOfForecast[i].temp_c) + '°C'}</h1>
						<img className='w-9 h-9' src={hourOfForecast[i].condition.icon} />
					</div>
				)
				setHourlyTemp(newHours)
			}

			for (let i = 1; i < forecastDays.length; i++) {
				let dayname = new Date(forecastDays[i].date)
				let dayn = dayname.getDay()
				let newdayn = shortenedWeekDays[dayn]
				let daynumb = dayname.getDate()
				// console.log(dayname)
				// console.log(dayn);
				console.log(newdayn)
				console.log(month + 1)
				weekdaysForecast.push(
					<div className='bg-[#5C6DFF] w-[150px] h-[150px] m-2 flex justify-center flex-col items-center rounded shadow-[-8px_-8px_4px_rgba(0,0,0,0.2)] '>
						<h1>
							{newdayn} {daynumb + '/' + (month + 1)}{' '}
						</h1>
						<img src={forecastDays[i].day.condition.icon} />
						<h1>Min {Math.floor(forecastDays[i].day.mintemp_c)}°C</h1>
						<h1>Max {Math.floor(forecastDays[i].day.maxtemp_c)}°C</h1>
					</div>
				)
			}
			setNextDaysForecast(weekdaysForecast)
			// console.log(newHours);
			console.log(data)
		})
  }


	return (
		<div className='flex justif-center flex-col'>
			<div className='flex justify-center flex-row items-center truncate h-11 m-3'>
				<input
					id='input'
					className='w-500 h-10 rounded-xl px-2'
					//ref={inputRef}
					type='text'
					value={value || ''}
					placeholder='Enter your city'
					onChange={event => setValue(event.target.value)}
				/>
				<button
					onClick={fetchData}
					id='search-button'
					className='bg-white flex m-10 h-10 rounded-xl justify-center items-center w-40 hover:bg-violet-450 '
				>
					Search
				</button>
			</div>

			<div className='main w-1200 h-850 bg-violet-450 flex p-3 justify-center rounded-3xl flex-wrap'>
				<div className='flex w-1100 h-80 rounded-3xl justify-center items-center'>
					<div className='flex w-60 h-80 flex-col items-start justify-center text-xl italic font-normal'>
						<h1 id='City'>{cityName}</h1>
						<h1>
							{currentMonth} {dayNumber}
						</h1>
						<h1>{currentDay}</h1>
						<h1>{temp}°C</h1>
						<p>Feels Like: {feelsLike}°C</p>
					</div>
					<div className='flex w-500 h-80 items-center flex-col text-xl justify-center'>
						<img className='w-40 h-40 ' src={condImg || UnknownWeather} />
						<h1>{cond}</h1>
					</div>

					<div className='flex w-60 h-80 flex-col justify-between text-xl'>
						<div className='flex items-center'>
							<img className='w-14 h-14 mr-2 ' src={SunRiseImg} />
							<h1 className='ml-2'>{sunRise}</h1>
						</div>
						<div className='flex items-center'>
							<img className='w-14 h-14 mr-2' src={SunSetImg} />
							<h1 className='ml-2'>{sunSet}</h1>
						</div>
						<div className='flex items-center'>
							<img className='w-14 h-14 flex mr-2' src={HumidityImg} />
							<h1 className='ml-2'>{humidity}%</h1>
						</div>
						<div className='flex items-center'>
							<img className='w-14 h-14 mr-2' src={WindSpeedImg} />
							<h1 className='ml-2'>{windSpeed}km/h</h1>
						</div>
						<div className='flex items-center'>
							<img className='w-14 h-14 mr-2' src={UVIndexImg} />
							<h1 className='ml-2'>{uvIndex}</h1>
						</div>
					</div>
				</div>
				<div className='flex bg-violet-250 w-1100 h-[150px] rounded-3xl p-3 text-sm justify-center items-center'>
					{hourlyTemp}
				</div>
				<div className='flex bg-violet-450 w-1100 h-[250px] rounded-3xl shadow-[-8px_-8px_4px_3px_rgba(0,0,0,0.2)] justify-center items-center'>
					{nextDaysForecast}
				</div>
			</div>
		</div>
	)
}

export default App