import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import CloudIcon from '@mui/icons-material/Cloud';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import cloud from '../images/cloud.png';
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import OpacityIcon from '@mui/icons-material/Opacity';
import WavesIcon from '@mui/icons-material/Waves';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const Weather =({city, temp, mintemp, maxtemp, humidity, pressure, description})=>{
    return(<>
    <div className="weather-box1">
        <div className="temp"><span className="degree">{temp}℃</span><span className="desc">{description}</span></div>
        <div className="logo"><img alt="cloud" src={cloud}/></div>
    </div>
    <div className="weather-box2"><h4>{city}</h4></div>
    <div className="weather-box3">
        <div className="info"><p>Weather Info</p></div>
     <div className="weather-info">
        <div className="info-box">
            <div className="box1">
                <span><ArrowCircleDownIcon/></span>
                <span className="desciption">
                    <span>{mintemp}℃</span>
                    <span>Min</span>
                </span>
            </div>
            <div className="box2">
            <span><ArrowCircleUpIcon/></span>
                <span className="desciption">
                <span>{maxtemp}℃</span>
                <span>Max</span>
                </span>
            </div>
        </div>
        <div className="info-box">
        <div className="box3">
                <span><WavesIcon/></span>
                <span className="desciption">
                <span>{humidity}%</span>
                <span>Humidity</span>
                </span>
            </div>
            <div className="box4">
                <span><ExitToAppIcon/></span>
                <span className="desciption">
                <span>{pressure} ㍱</span>
                <span>Pressure</span>
                </span>
            </div>
        </div>
     </div>
    </div>
    </>)
}
export default Weather;