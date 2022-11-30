import React, { useState, useEffect} from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import './style/Style.css';

function App() {

  const [city, setcity] = useState();
  
  // const [weatherinfo, setweatherinfo] = useState({
  //  description:"",
  //   temp:0,
  //   temp_max:0,
  //   temp_min:0,
  //  pressure:0,
  //  humidity:0 

  // });

  const [description, setdescription] = useState('');
  const [temp, settemp] = useState();
  const [mintemp, setmintemp] = useState();
  const [maxtemp, setmaxtemp] = useState();
  const [humidity, sethumidity] = useState();
  const [pressure, setpressure] = useState();



  const changeHandler = (event)=>{
setcity(event.target.value);
// setflag(!flag);
  }
//   const clickhandler = (event)=>{
// event.preventDefault();
// fetchapi();
//   }

 
  
  useEffect(()=>{

    const fetchapi = async()=>{
      const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6ef65de3244fe94fabc67e68b952b913`)
       const data = await response.json();
      console.log(data.main);
      // setweatherinfo({
      //   description:data.weather[0].description,
      //     temp:data.main.temp,
      //     temp_max:data.main.temp_max,
      //     temp_min:data.main.temp_min,
      //    pressure:data.main.pressure,
      //    humidity:data.main.humidity 
      //  });
       setdescription(data.weather[0].description);
      settemp(data.main.temp);
      setmintemp(data.main.temp_min);
      setmaxtemp(data.main.temp_max);
      sethumidity(data.main.humidity);
      setpressure(data.main.pressure);
     
      }
   
        fetchapi();
       
      
  },[city, description, temp, mintemp, maxtemp, humidity, pressure]);

 
  return (
    <>
   <div className="container">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8 weather-report">
    <div className="heading">  <h1>React Weather App</h1></div>
    
    <div className="search-box"><Search city={city} changeHandler={changeHandler} /></div>
    {!city? "No Record":
     (<div className="weather-box"><Weather city={city} description={description} temp={temp} mintemp={mintemp} maxtemp={maxtemp} humidity={humidity} pressure={pressure}/></div>)}
      
     
     </div>
      <div className="col-2"></div>
     </div>

   </div>

    </>
    
  );
}

export default App;
