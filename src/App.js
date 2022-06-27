import axios from "axios";
import { useState } from "react";
import Test from "./components/Test";
import "./styles.css";

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=16eb603ac7d5549bab9405c7a98a6ea9`;



    const fetchWeather = async (event) => {
        event.preventDefault();
        


        axios.get(url)
        .then((response) => {
            setData(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
        setLocation('');
       
       
    }

    return (
        <>
        <div className="container pt-5" >
            <div className="row" >
                <div className="col-sm-6  " >
                    <h1 className="display-5" > Application Meteo </h1>
                    <form className="d-flex mt-4" >
                        <input
                            value={location}
                            onChange={event => setLocation(event.target.value)}

                            type="text"
                            className="form-control me-2"
                            placeholder="Entrez le nom d'une ville" /
                        >
                        <button
                            className="btn btn-danger"
                            onClick={fetchWeather}
                            type="submit">Envoyer</button>
                    </form> </div>
                <div className="col-sm-6 pt-3 text-center">
  


                    <p> {data.name}
                  
                    {data.sys ? <span className="badge bg-warning ms-2">
                        {data.sys.country}
                    </span> : null}
  </p>


                    {data.main ? <h1>{data.main.temp}  °C</h1> : null}

  {data.weather ? <p>{data.weather[0].icon}</p> : null}

                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                    </div>

 
 
            </div>

        </div>

     {/* <Test />   */}

        </>
    );
}

export default App;