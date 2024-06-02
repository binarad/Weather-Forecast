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
  const [hours, setHours] = useState([]);



  const fetchData = () => {
	fetch(`http://api.weatherapi.com/v1/forecast.json?key=485589c5ce3b49e2a1d182121242805&q=${value}&days=1&aqi=no&alerts=no`)
		.then(res => res.json())
		.then(data => {
			const hourOfForecast = data.forecast.forecastday[0].hour;
			let newTime = hourOfForecast.slice(11)
			console.log(newTime);
			setTemp(Math.floor(data.current.temp_c));
			setCond(data.current.condition.text);
			setCondImg(data.current.condition.icon);
			setFeelsLike(Math.floor(data.current.feelslike_c));
			setCityName(data.location.name);
			setHumidity(data.current.humidity);
			setSunRise(data.forecast.forecastday[0].astro.sunrise);
			setSunSet(data.forecast.forecastday[0].astro.sunset);
			setWindSpeed(data.current.wind_kph);
			setUVIndex(data.current.uv);
			for (let i in hourOfForecast) {
				let newHours = hourOfForecast[i].time
				newTime = newHours.slice(11)
				setHours(newTime)
			}
		})
  }


	return (
		<div className='flex justif-center flex-col'>
			<div className='flex justify-center flex-row items-center truncate h-11 m-3'>
				<input
					id='input'
					className='w-500 h-10 border border-black rounded-xl px-2'
					//ref={inputRef}
					type='text'
					value={value || ''}
					placeholder='Enter your city'
					onChange={event => setValue(event.target.value)}
				/>
				<button
					onClick={fetchData}
					id='search-button'
					className='bg-white flex m-10 h-10 border border-black rounded-xl justify-center items-center w-40'
				>
					Search
				</button>
			</div>

			<div className='main w-1200 h-850 bg-violet-450 flex p-3 justify-center rounded-3xl flex-wrap'>
				<div className='flex w-60 h-80 flex-col'>
					<h1 id='City'>{cityName}</h1>
					<h1>
						{currentMonth} {dayNumber}
					</h1>
					<h1>{currentDay}</h1>
					<h1>{temp}°C</h1>
					<p>Feels Like: {feelsLike}°C</p>
				</div>
				<div className='flex w-500 h-80 items-center flex-col '>
					<img className='w-40 h-40 ' src={condImg || UnknownWeather} />
					<h1>{cond}</h1>
				</div>

				<div className='flex w-60 h-80 flex-col justify-between '>
					<div className='flex items-center'>
						<img className='w-14 h-14 mr-2 ' src={SunRiseImg} />
						<h1>{sunRise}</h1>
					</div>
					<div className='flex items-center'>
						<img className='w-14 h-14 mr-2' src={SunSetImg} />
						<h1>{sunSet}</h1>
					</div>
					<div className='flex items-center'>
						<img className='w-14 h-14 flex mr-2' src={HumidityImg} /> {humidity}
						%
					</div>
					<div className='flex items-center'>
						<img className='w-14 h-14 mr-2' src={WindSpeedImg} />
						<h1>{windSpeed}km/h</h1>
					</div>
					<div className='flex items-center'>
						<img className='w-14 h-14 mr-2' src={UVIndexImg} />
						<h1>{uvIndex}</h1>
					</div>
				</div>
				<div className='flex bg-violet-250 w-1100 h-[150px] rounded-3xl p-2.5'>
					{hours}
				</div>
				<div className="flex bg-violet-450 w-1100 h-[250px] rounded-3xl shadow-[-6px_-6px_4px_3px_rgba(0,0,0,0.2)]"></div>
			</div>
		</div>
	)
}

export default App
