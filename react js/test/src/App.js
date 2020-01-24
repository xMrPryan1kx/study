import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "d64947480bb9e5ae3130dd2fa9516013";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;



    if (city) {

      const apiUrl = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  
      const data = await apiUrl.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();


      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
        error: ""
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form gettingWeather = {this.gettingWeather} />
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
         />
      </div>
    )
  }
}

export default App;