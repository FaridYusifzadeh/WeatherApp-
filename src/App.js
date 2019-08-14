import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Wheather from './components/Whether';


const API_KEY = "89fc8f984ae327d72e7edcb2ebf6f6e1";


class App extends React.Component {

  state =
    {
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      error: undefined
    }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var suunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: suunset_date,
        error: undefined
      });
    }
    else {

      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Şəhəri daxil edin"
      });
    }

  }

  render() {
    return (

      <div className="wrapper">
<div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 info">
                  <Info />
                  </div>
                  <div className="col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather} />
        <Wheather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />

                  </div>
                </div>
              </div>
              </div>
        
       
      </div>
    );
  }

}

export default App;
