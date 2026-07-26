import WeatherForecast from "./Components/WeatherForecast/WeatherForecast";

function App() {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: './sun.png',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: './clear night.png',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: './stormy all day.png',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: './overcast evening.png',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: './cloudy night.png',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map(forecast=> <WeatherForecast key={forecast.day} {...forecast}/>)}
        

      </section>
      
    </>
  )
}

export default App
